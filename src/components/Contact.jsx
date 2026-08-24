import { contact, profile } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section contact">
      <div className="container reveal" ref={ref}>
        <div className="contact__card">
          <h2>Contact Me</h2>
          <p className="contact__lead">
            Open to internships, software engineering roles, collaborations, and interesting problems.
          </p>

          <div className="contact__links">
            <a className="contact__link" href={`mailto:${contact.email}`}>
              <span className="contact__link-label">Email</span>
              <span className="contact__link-value">{contact.email}</span>
            </a>
            <a className="contact__link" href={contact.github} target="_blank" rel="noreferrer">
              <span className="contact__link-label">GitHub</span>
              <span className="contact__link-value">{contact.github.replace("https://", "")}</span>
            </a>
            <a className="contact__link" href={contact.linkedin} target="_blank" rel="noreferrer">
              <span className="contact__link-label">LinkedIn</span>
              <span className="contact__link-value">{contact.linkedin.replace("https://", "")}</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          {profile.name} · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
