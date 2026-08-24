import { achievements, education } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Education.css";

export default function Education() {
  const ref = useReveal();

  const timelineItems = [
    {
      id: "datacamp-associate",
      title: "Data Engineer Associate Career Track",
      subtitle: "DataCamp Certification",
      period: "2026",
      detail: "Completed comprehensive career track covering data engineering pipelines, data warehousing, SQL, and database architecture.",
      badge: "Certification",
    },
    {
      id: "emcu",
      title: "BSc Computer Science (Final Year)",
      subtitle: "Eswatini Medical Christian University",
      period: "2023 – Present",
      detail: "Core computer science studies spanning algorithms, discrete mathematics, theory of computation, software design, and applied systems.",
      badge: "University",
    },
    {
      id: "sololearn-certs",
      title: "SoloLearn Technical Certifications",
      subtitle: "SoloLearn",
      period: "2023 – 2024",
      detail: "Earned certifications across multiple development tracks including Python, Java, SQL, JavaScript, and Web Development.",
      badge: "Certifications",
    },
    {
      id: "stmarks",
      title: "EGCSE (High School Diploma)",
      subtitle: "St. Mark's High School",
      period: "2018 – 2022",
      detail: "Eswatini General Certificate of Secondary Education syllabus with strong performance in mathematics and physical sciences.",
      badge: "High School",
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <h2>Education & Certifications</h2>
        </div>

        <ol className="timeline">
          {timelineItems.map((item) => (
            <li className="timeline__item" key={item.id}>
              <div className="timeline__marker" />
              <div className="timeline__card">
                <div className="timeline__card-head">
                  <span className="timeline__period">{item.period}</span>
                  <span className="timeline__badge">{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="timeline__credential">{item.subtitle}</p>
                <p className="timeline__detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
