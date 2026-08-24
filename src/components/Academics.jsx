import { academics } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Academics.css";

export default function Academics() {
  const ref = useReveal();

  return (
    <section id="academics" className="section section-alt">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <span className="eyebrow eyebrow--lime">Academics</span>
          <h2>Coursework I build with</h2>
          <p>{academics.intro}</p>
        </div>

        <div className="academics-grid">
          {academics.strengths.map((course) => (
            <div className="course-card" key={course.name}>
              <h3>{course.name}</h3>
              <p>{course.note}</p>
            </div>
          ))}
        </div>

        <div className="academics-note">
          <p>
            ✨ <strong>Academic Records:</strong> Full semester transcripts & course performance records are available upon request for verified academic or hiring inquiries.
          </p>
        </div>
      </div>
    </section>
  );
}
