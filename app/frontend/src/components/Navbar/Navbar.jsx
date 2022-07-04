import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      |
      <Link to="/tasks">Tasks</Link>
      |
      <Link to="/about">About</Link>
    </nav>
  );
}
export default Navbar;
