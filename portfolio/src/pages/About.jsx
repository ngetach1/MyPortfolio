function About() {
  return (
    <>
      <section className="about-section">

        <div className="about-image">
          <img
            src="/IMG_2735.jpeg"
            alt="Photo of Natnael Getachew"
          />
        </div>

        <div className="about-content">

          <p className="welcome-text">ABOUT ME</p>

          <h2>Natnael Getachew</h2>

          <h3>Digital Health Engineering Student</h3>

          <p>
            My name is Natnael Getachew. I am a Digital Health Engineering
            student with an interest in software development, web
            technologies, databases, and problem solving.
          </p>

          <p>
            I enjoy learning new technologies and developing applications
            that are simple, useful, and easy to use. I am continuously
            improving my programming and web development skills through
            academic projects and practical experience.
          </p>

          <p>
            My goal is to build my knowledge and experience in software
            and web development while creating solutions that provide
            value to users.
          </p>

          <a
            href="/resume.pdf"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </a>

        </div>

      </section>

      <section className="skills-section">

        <h2>My Skills</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>Web Development</h3>
            <p>
              HTML, CSS, JavaScript, and responsive web design.
            </p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p>
              Python and C# programming fundamentals.
            </p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>
              SQL, database management, and database fundamentals.
            </p>
          </div>

          <div className="skill-card">
            <h3>Problem Solving</h3>
            <p>
              Analytical thinking, troubleshooting, and developing
              practical solutions.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default About;