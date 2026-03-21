import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your styling here

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px', backgroundColor: '#00234c' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</Link>
      <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
      <Link to="/skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</Link>
    </nav>
  );
}