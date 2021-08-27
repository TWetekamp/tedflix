import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <div>
      <header>
        <div className="banner">TedFlix</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
