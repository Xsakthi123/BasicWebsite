import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-content">
        <Link className="brand footer-brand" to="/">
          Brightside Studio
        </Link>
        <p>Thoughtful support for your next big idea.</p>
        <small>&copy; {new Date().getFullYear()} Brightside Studio</small>
      </div>
    </footer>
  );
}
