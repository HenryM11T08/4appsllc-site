import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          4 APPS <span>LLC</span>
        </Link>

        <div className="nav-links">
          <Link
            to="/services"
            className={location.pathname === "/services" ? "nav-active" : ""}
          >
            How We Help
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "nav-active" : ""}
          >
            About
          </Link>
          <Link to="/contact" className="nav-cta">
            Let's Improve Your Workday
          </Link>
        </div>
      </div>
    </nav>
  );
}