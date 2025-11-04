import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * SearchView handles search, map display, login, signup, logout, and reviews on the index page.
 * Displays resources as a list and map markers with review forms in popups.
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
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [signupForm, setSignupForm] = useState({ username: '', password: '' });
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  // Check login status on mount
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('http://localhost:3000/api/user', {
          credentials: 'include'
        });
        const data = await res.json();
        if (res.ok && data.username) {
          setUser(data.username);
          setMessage('Welcome back, ' + data.username + '!');
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Fetch user error:', err);
        setError('Failed to check login status.');
      }
    }
    fetchUser();
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [51.505, -0.09],
        zoom: 10
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);

      mapInstanceRef.current.on('click', (e) => {
        if (user) {
          setClickedLatLon([e.latlng.lat, e.latlng.lng]);
          setShowAddForm(true);
        } else {
          setError('Please log in to add a resource.');
        }
      });
    }
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [user]);

  async function handleSearch(e) {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!region.trim()) {
      setError('Region is required.');
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/resources?region=${encodeURIComponent(region)}`, {
        credentials: 'include'
      });
      const data = await res.json();
      if (res.ok) {
        setResources(data);
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];
        data.forEach(resource => {
          const reviewForm = user ? `
            <div>
              <h4>Add Review</h4>
              <textarea id="review-${resource.id}" placeholder="Write your review" rows="2" style="width:100%;"></textarea>
              <button onclick="submitReview(${resource.id})">Submit Review</button>
            </div>
          ` : '<p>Please log in to add a review.</p>';
          const reviewsList = resource.reviews.length > 0
            ? `<h4>Reviews:</h4><ul>${resource.reviews.map(r => `<li>${r}</li>`).join('')}</ul>`
            : '<p>No reviews yet.</p>';
          const popupContent = `
            <b>${resource.name}</b><br>
            ${resource.description}<br>
            ${reviewsList}
            ${reviewForm}
          `;
          const marker = L.marker([resource.lat, resource.lon])
            .addTo(mapInstanceRef.current)
            .bindPopup(popupContent);
          markersRef.current.push(marker);
        });
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

  // Global function for review submission (called from popup)
  window.submitReview = async function(resourceId) {
    const textarea = document.getElementById(`review-${resourceId}`);
    const review = textarea.value.trim();
    if (!review) {
      alert('Review cannot be empty.');
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/resources/${resourceId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review }),
        credentials: 'include'
      });
      const data = await res.json();
      if (res.ok) {
        const resFetch = await fetch(`http://localhost:3000/api/resources?region=${encodeURIComponent(region)}`, {
          credentials: 'include'
        });
        if (resFetch.ok) {
          const updatedResources = await resFetch.json();
          setResources(updatedResources);
          setMessage('Review added successfully.');
          markersRef.current.forEach(marker => marker.remove());
          markersRef.current = [];
          updatedResources.forEach(resource => {
            const reviewForm = user ? `
              <div>
                <h4>Add Review</h4>
                <textarea id="review-${resource.id}" placeholder="Write your review" rows="2" style="width:100%;"></textarea>
                <button onclick="submitReview(${resource.id})">Submit Review</button>
              </div>
            ` : '<p>Please log in to add a review.</p>';
            const reviewsList = resource.reviews.length > 0
              ? `<h4>Reviews:</h4><ul>${resource.reviews.map(r => `<li>${r}</li>`).join('')}</ul>`
              : '<p>No reviews yet.</p>';
            const popupContent = `
              <b>${resource.name}</b><br>
              ${resource.description}<br>
              ${reviewsList}
              ${reviewForm}
            `;
            const marker = L.marker([resource.lat, resource.lon])
              .addTo(mapInstanceRef.current)
              .bindPopup(popupContent);
            markersRef.current.push(marker);
          });
        }
      } else {
        setError(data.error || 'Failed to add review.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    }
  };

  async function handleRecommend(id) {
    try {
      const res = await fetch(`http://localhost:3000/api/resources/${id}/recommend`, {
        method: 'POST',
        credentials: 'include'
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
        }),
        credentials: 'include'
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Resource added with ID ${data.id}`);
        setNewResource({ name: '', category: '', country: '', region: '', description: '' });
        setShowAddForm(false);
        const marker = L.marker([clickedLatLon[0], clickedLatLon[1]])
          .addTo(mapInstanceRef.current)
          .bindPopup(`
            <b>${newResource.name}</b><br>
            ${newResource.description}<br>
            <p>No reviews yet.</p>
            ${user ? `
              <div>
                <h4>Add Review</h4>
                <textarea id="review-${data.id}" placeholder="Write your review" rows="2" style="width:100%;"></textarea>
                <button onclick="submitReview(${data.id})">Submit Review</button>
              </div>
            ` : '<p>Please log in to add a review.</p>'}
          `);
        markersRef.current.push(marker);
        const resFetch = await fetch(`http://localhost:3000/api/resources?region=${encodeURIComponent(region)}`, {
          credentials: 'include'
        });
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

  function handleLoginChange(e) {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSignupChange(e) {
    const { name, value } = e.target;
    setSignupForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!loginForm.username.trim() || !loginForm.password.trim()) {
      setError('Username and password are required.');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
        credentials: 'include'
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Login successful! Welcome, ${data.username}!`);
        setUser(data.username);
        setLoginForm({ username: '', password: '' });
      } else {
        setError(data.error || 'Failed to log in.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    }
  }

  async function handleSignupSubmit(e) {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!signupForm.username.trim() || !signupForm.password.trim()) {
      setError('Username and password are required.');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupForm),
        credentials: 'include'
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Signup successful! Please log in as ${signupForm.username}.`);
        setSignupForm({ username: '', password: '' });
        setShowLoginForm(true);
      } else {
        setError(data.error || 'Failed to sign up.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    }
  }

  async function handleLogout() {
    try {
      const res = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        credentials: 'include'
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Logout successful!');
        setUser(null);
        setShowLoginForm(true);
      } else {
        setError(data.error || 'Failed to log out.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    }
  }

  return (
    <div>
      <h2>Search Healthcare Resources</h2>
      <Link to="/add">Add Resource (Form)</Link>
      {user ? (
        <div style={{ margin: '16px 0' }}>
          Logged in as {user}
          <button onClick={handleLogout} style={{ marginLeft: '16px' }}>Logout</button>
        </div>
      ) : (
        <div style={{ margin: '16px 0' }}>
          {showLoginForm ? (
            <>
              <form onSubmit={handleLoginSubmit} style={{ marginBottom: '16px' }}>
                <h3>Login</h3>
                <input
                  name="username"
                  value={loginForm.username}
                  onChange={handleLoginChange}
                  placeholder="Username"
                  style={{ marginRight: '8px' }}
                />
                <input
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                  type="password"
                  style={{ marginRight: '8px' }}
                />
                <button type="submit">Login</button>
              </form>
              <button onClick={() => setShowLoginForm(false)}>Need an account? Sign Up</button>
            </>
          ) : (
            <>
              <form onSubmit={handleSignupSubmit} style={{ marginBottom: '16px' }}>
                <h3>Sign Up</h3>
                <input
                  name="username"
                  value={signupForm.username}
                  onChange={handleSignupChange}
                  placeholder="Username"
                  style={{ marginRight: '8px' }}
                />
                <input
                  name="password"
                  value={signupForm.password}
                  onChange={handleSignupChange}
                  placeholder="Password"
                  type="password"
                  style={{ marginRight: '8px' }}
                />
                <button type="submit">Sign Up</button>
              </form>
              <button onClick={() => setShowLoginForm(true)}>Already have an account? Login</button>
            </>
          )}
        </div>
      )}
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
            {resource.reviews.length > 0 && (
              <>
                <h4>Reviews:</h4>
                <ul>
                  {resource.reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                  ))}
                </ul>
              </>
            )}
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