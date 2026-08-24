import { affiliations } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Affiliations.css";

export default function Affiliations() {
  const ref = useReveal();

  return (
    <section id="affiliations" className="section section-alt">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <span className="eyebrow eyebrow--lime">Affiliations</span>
          <h2>Who I build with</h2>
        </div>

        <div className="affiliations-list">
          {affiliations.map((a) => (
            <div className="affiliation-card" key={a.name}>
              <h3>{a.name}</h3>
              <span className="affiliation-card__role">{a.role}</span>
              <p>{a.description}</p>
            </div>
          ))}

          <div className="affiliation-card affiliation-card--placeholder">
            <h3>More coming soon</h3>
            <p>Clubs and societies will be added here as they're confirmed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
