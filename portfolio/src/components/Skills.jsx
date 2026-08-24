import { skills } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section section-alt">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="skill-chips">
                {group.items.map((item) => (
                  <li key={item.name} className={`skill-chip ${item.favorite ? "skill-chip--favorite" : ""}`}>
                    {item.name}
                    {item.favorite && <span className="skill-chip__star" title="Favourite language">★</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
