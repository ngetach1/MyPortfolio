import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h2>Hi, I'm Natnael Getachew</h2>

        <h3>Digital Health Engineer</h3>

        <p className="mission">
          My goal is to create useful, user-friendly, and reliable
          web applications and software solutions while continuously developing my technical
          and problem-solving skills.
        </p>

        <Link to="/about" className="home-button">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}

export default Home;