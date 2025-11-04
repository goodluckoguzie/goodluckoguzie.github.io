import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * SearchView lets users search for healthcare resources by region and displays them
 * as a list and on a Leaflet map. Users can recommend resources and add new ones by clicking the map.
 */
export default function SearchView() {
  const [region, setRegion] = useState('');
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newResource, setNewResource] = useState({
    name: '', category: '', country: '', region: '', description: ''
  });
  const [clickedLatLon, setClickedLatLon] = useState(null);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    // Initialize Leaflet map
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [51.505, -0.09], // Default: London
        zoom: 10
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);

      // Handle map clicks for adding resources
      mapInstanceRef.current.on('click', (e) => {
        setClickedLatLon([e.latlng.lat, e.latlng.lng]);
        setShowAddForm(true);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!region.trim()) {
      setError('Region is required.');
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/resources?region=${encodeURIComponent(region)}`);
      const data = await res.json();
      if (res.ok) {
        setResources(data);
        // Update map: clear existing markers
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];
        // Add new markers
        data.forEach(resource => {
          const marker = L.marker([resource.lat, resource.lon])
            .addTo(mapInstanceRef.current)
            .bindPopup(`<b>${resource.name}</b><br>${resource.description}`);
          markersRef.current.push(marker);
        });
        // Center map on first resource or keep default
        if (data.length > 0) {
          mapInstanceRef.current.setView([data[0].lat, data[0].lon], 10);
        }
      } else {
        setError(data.error || 'Failed to fetch resources.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    }
  }

  async function handleRecommend(id) {
    try {
      const res = await fetch(`http://localhost:3000/api/resources/${id}/recommend`, {
        method: 'POST'
      });
      const data = await res.json();
      if (res.ok) {
        setResources(prev => prev.map(r => 
          r.id === id ? { ...r, recommendations: r.recommendations + 1 } : r
        ));
        setMessage('Recommendation added.');
      } else {
        setError(data.error || 'Failed to recommend resource.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    }
  }

  function handleAddChange(e) {
    const { name, value } = e.target;
    setNewResource(prev => ({ ...prev, [name]: value }));
  }

  async function handleAddSubmit(e) {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!newResource.name.trim() || !newResource.category.trim() || !newResource.country.trim() ||
        !newResource.region.trim() || !newResource.description.trim()) {
      setError('All fields are required.');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newResource,
          lat: clickedLatLon[0],
          lon: clickedLatLon[1]
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Resource added with ID ${data.id}`);
        setNewResource({ name: '', category: '', country: '', region: '', description: '' });
        setShowAddForm(false);
        // Add new marker
        const marker = L.marker([clickedLatLon[0], clickedLatLon[1]])
          .addTo(mapInstanceRef.current)
          .bindPopup(`<b>${newResource.name}</b><br>${newResource.description}`);
        markersRef.current.push(marker);
        // Refresh resources
        const resFetch = await fetch(`http://localhost:3000/api/resources?region=${encodeURIComponent(region)}`);
        if (resFetch.ok) {
          setResources(await resFetch.json());
        }
      } else {
        setError(data.error || 'Failed to add resource.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    }
  }

  function handleAddCancel() {
    setShowAddForm(false);
    setNewResource({ name: '', category: '', country: '', region: '', description: '' });
    setClickedLatLon(null);
  }

  return (
    <div>
      <h2>Search Healthcare Resources</h2>
      <Link to="/add">Add Resource (Form)</Link>
      <form onSubmit={handleSearch} style={{ margin: '16px 0' }}>
        <input
          value={region}
          onChange={e => setRegion(e.target.value)}
          placeholder="Enter region (e.g., London)"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <div>
        {resources.map(resource => (
          <div key={resource.id} style={{ marginBottom: '16px', border: '1px solid #ccc', padding: '8px' }}>
            <h3>{resource.name}</h3>
            <p>Category: {resource.category}</p>
            <p>Description: {resource.description}</p>
            <p>Recommendations: {resource.recommendations}</p>
            <button onClick={() => handleRecommend(resource.id)}>Recommend</button>
          </div>
        ))}
      </div>
      <div ref={mapRef} style={{ height: '400px', marginTop: '16px' }}></div>
      {showAddForm && (
        <div style={{ marginTop: '16px', border: '1px solid #ccc', padding: '16px' }}>
          <h3>Add Resource at ({clickedLatLon[0].toFixed(4)}, {clickedLatLon[1].toFixed(4)})</h3>
          <form onSubmit={handleAddSubmit}>
            <div style={{ marginBottom: '8px' }}>
              <input name="name" value={newResource.name} onChange={handleAddChange} placeholder="Name" />
            </div>
            <div style={{ marginBottom: '8px' }}>
              <input name="category" value={newResource.category} onChange={handleAddChange} placeholder="Category" />
            </div>
            <div style={{ marginBottom: '8px' }}>
              <input name="country" value={newResource.country} onChange={handleAddChange} placeholder="Country" />
            </div>
            <div style={{ marginBottom: '8px' }}>
              <input name="region" value={newResource.region} onChange={handleAddChange} placeholder="Region" />
            </div>
            <div style={{ marginBottom: '8px' }}>
              <textarea name="description" value={newResource.description} onChange={handleAddChange} placeholder="Description" rows="3" />
            </div>
            <button type="submit">Add Resource</button>
            <button type="button" onClick={handleAddCancel} style={{ marginLeft: '8px' }}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}