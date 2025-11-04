import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchView from './SearchView';
import AddResourceView from './AddResourceView';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '16px' }}>
        <nav style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ marginRight: '16px' }}>Search</Link>
          <Link to="/add">Add Resource</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SearchView />} />
          <Route path="/add" element={<AddResourceView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;