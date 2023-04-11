import { HashLink as Link } from "react-router-hash-link";

export const Landing = () => {
  return (
    <main className="section">
      <div className="headline-container">
        <p className="title">Transit through time.</p>
        <p className="description">
          Explore the history of Philadelphia's SEPTA with interactive maps,
          timelines, videos, and more!
        </p>
        <Link role="button" className="button" to="/#timeline">
          Explore
        </Link>
      </div>
    </main>
  );
};

export default Landing;
