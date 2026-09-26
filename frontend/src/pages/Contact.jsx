import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    // Convert the named form fields into the JSON shape expected by the API.
    const contactDetails = Object.fromEntries(formData.entries());

    try {
      // VITE_API_BASE_URL can point to another backend without changing this component.
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactDetails),
      });

      if (!response.ok) {
        throw new Error("The message could not be sent. Please check your details and try again.");
      }

      const result = await response.json();
      setStatus({ type: "success", message: result.message });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof TypeError
            ? "We couldn't connect to the server. Please try again in a moment."
            : error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="page-shell page-content contact-layout">
      <section className="contact-copy">
        <p className="eyebrow">Get in touch</p>
        <h1>Tell us what you're working on.</h1>
        <p>
          Share a little about your business or what you need help with. We&apos;ll be
          happy to hear from you.
        </p>
        <div className="contact-note">
          <span className="note-icon" aria-hidden="true">
            ✳
          </span>
          <p>A good first conversation starts with a simple hello.</p>
        </div>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength="80"
          placeholder="Alex Example"
          required
        />

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength="254"
          placeholder="alex@example.com"
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength="120"
          placeholder="How can we help?"
          required
        />

        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          maxLength="2000"
          placeholder="Tell us a little about your project..."
          required
        />

        {status.message && (
          <p className={`form-status ${status.type}`} role="status">
            {status.message}
          </p>
        )}

        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send your message"}
        </button>
      </form>
    </main>
  );
}
