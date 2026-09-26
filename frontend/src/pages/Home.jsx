import { Link } from "react-router-dom";

const highlights = [
  {
    number: "01",
    title: "A clear direction",
    text: "Turn big ideas into practical steps your team can feel good about.",
  },
  {
    number: "02",
    title: "Thoughtful design",
    text: "Create a polished, consistent experience that feels like your business.",
  },
  {
    number: "03",
    title: "A partner who listens",
    text: "Get friendly, focused support from the first conversation to launch.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">A brighter way to grow</p>
          <h1>Good ideas deserve a business built to match.</h1>
          <p className="hero-intro">
            We help small businesses find their focus, share their story, and move forward
            with confidence.
          </p>
          <div className="button-row">
            <Link className="button" to="/contact">
              Start a conversation <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="text-link" to="/services">
              Explore our services
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of a sunrise">
          <div className="sun" />
          <div className="hill hill-back" />
          <div className="hill hill-front" />
          <span className="art-caption">Make room for what's next.</span>
        </div>
      </section>

      <section className="highlights-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Why Brightside</p>
            <h2>Small steps. Meaningful momentum.</h2>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
