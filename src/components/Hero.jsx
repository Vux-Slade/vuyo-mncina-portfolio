import { profile } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner container">
        <div className="hero__image-col">
          {profile.photo ? (
            <img className="hero__portrait" src={profile.photo} alt={profile.name} />
          ) : (
            <div className="hero__portrait-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>{profile.name}</span>
            </div>
          )}
        </div>

        <div className="hero__text-col">
          <h1 className="hero__headline">My name is {profile.name}.</h1>
          <p className="hero__subheadline">
            I am currently a final-year Computer Science student at Eswatini Medical Christian University.
          </p>
          <div className="hero__actions">
            <a className="btn-contact-me" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
