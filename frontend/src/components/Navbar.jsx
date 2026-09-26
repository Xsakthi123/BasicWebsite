import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Brightside Studio home">
          <span className="brand-mark" aria-hidden="true">
            B
          </span>
          Brightside Studio
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="button button-small" to="/contact">
            Let&apos;s talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
