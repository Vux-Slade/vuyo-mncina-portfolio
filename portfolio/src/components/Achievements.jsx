import { achievements } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Achievements.css";

export default function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" className="section">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <span className="eyebrow eyebrow--sky">Achievements</span>
          <h2>Milestones</h2>
          <p>A running list — hackathons, certifications, and awards get added here as they happen.</p>
        </div>

        <div className="achievements-list">
          {achievements.map((item) => (
            <div className="achievement-row" key={item.id}>
              <span className="achievement-row__year">{item.year}</span>
              <div className="achievement-row__body">
                <h3>{item.title}</h3>
                <p className="achievement-row__org">{item.org}</p>
                <p className="achievement-row__desc">{item.description}</p>
              </div>
            </div>
          ))}

          <div className="achievement-row achievement-row--placeholder">
            <span className="achievement-row__year">—</span>
            <div className="achievement-row__body">
              <h3>More to come</h3>
              <p className="achievement-row__desc">Future hackathons, certifications, and awards will land here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
