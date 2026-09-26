const services = [
  {
    number: "01",
    title: "Brand foundations",
    description:
      "Find the words, visuals, and key ideas that help customers understand what makes your business special.",
    details: "Business story · Brand voice · Visual direction",
  },
  {
    number: "02",
    title: "Website planning",
    description:
      "Plan a welcoming website that puts the right information in the right place and makes the next step clear.",
    details: "Page planning · Content guidance · Launch checklist",
  },
  {
    number: "03",
    title: "Growth support",
    description:
      "Bring more structure to your next stage with practical recommendations shaped around your goals.",
    details: "Goal setting · Opportunity review · Action plan",
  },
];

export default function Services() {
  return (
    <main className="page-shell page-content">
      <section className="page-intro">
        <p className="eyebrow">What we do</p>
        <h1>Helpful services for your next chapter.</h1>
        <p>
          Start with one focused project or combine services into a plan that fits your
          business.
        </p>
      </section>
      <section className="service-list" aria-label="Our services">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="card-number">{service.number}</span>
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <small>{service.details}</small>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
