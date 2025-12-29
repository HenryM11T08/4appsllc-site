import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">4 APPS LLC</Link>

        <div className="nav-links">
          <Link to="/services">How We Help</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="nav-cta">
            Let’s Improve Your Workday
          </Link>
        </div>
      </div>
    </nav>
  );
}
