import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";

function NotFound() {
  return (
    <main className="page-shell">
      <section className="content-section">
        <p className="eyebrow">Page not found</p>
        <h1>We couldn't find that page.</h1>
        <p>Try using the navigation above to find what you're looking for.</p>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      {/* Each URL path displays its own page inside the shared site layout. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
