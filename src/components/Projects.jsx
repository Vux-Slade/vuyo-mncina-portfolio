import { projects } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Projects.css";

function ProjectCard({ project }) {
  const ref = useReveal();

  return (
    <article className="project-card reveal" ref={ref}>
      <div className="project-card__head">
        <h3>{project.name}</h3>
        <span className={`status-pill status-pill--${project.statusTone}`}>{project.status}</span>
      </div>

      <p className="project-card__summary">{project.summary}</p>
      <p className="project-card__description">{project.description}</p>

      {project.achievement && (
        <div className="project-card__achievement">
          <span aria-hidden="true">🏆</span>
          <p>{project.achievement}</p>
        </div>
      )}

      <ul className="project-card__highlights">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="project-card__footer">
        <ul className="project-card__stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.links.repo ? (
            <a href={project.links.repo} target="_blank" rel="noreferrer">
              Repository ↗
            </a>
          ) : (
            <span className="project-card__link-placeholder">Repository link — coming soon</span>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              Live ↗
            </a>
          )}
        </div>
      </div>

      {project.team && <p className="project-card__team">{project.team}</p>}
    </article>
  );
}

export default function Projects() {
  const headRef = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <h2>Projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
