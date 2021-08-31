import { NavLink } from "react-router-dom";
import './style.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <ul>
          <li>Copyright 2021</li>
          <li><a href="https://github.com/TWetekamp/tedflix">GitHub</a></li>
          <li>
            <NavLink to="/credits">Credits</NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
