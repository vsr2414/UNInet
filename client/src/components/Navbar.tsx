import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="home-navbar">
      <Link to="/" className="home-logo">
        UNI<span>net</span>
      </Link>

      <nav className="home-nav-links">
        <Link to="/#questions">Explore</Link>
        <Link to="/#topics">Topics</Link>
      </nav>

      <div className="home-nav-actions">
        <Link to="/login" className="home-login">
          Log in
        </Link>
        <Link to="/register" className="home-register">
          Join UNInet
        </Link>
      </div>
    </header>
  );
}

export default Navbar;