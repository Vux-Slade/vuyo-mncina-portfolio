import { about } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container about reveal" ref={ref}>
        <div className="section-head">
          <h2>About Me</h2>
        </div>
        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
