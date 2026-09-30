function Projects() {
  return (
    <section className="projects-section">

      <div className="page-heading">
        <p className="welcome-text">MY WORK</p>
        <h2>Projects</h2>
        <p>
          Here are some of the projects I have worked on through my
          academic studies and practical experience.
        </p>
      </div>

      <div className="projects-container">

        <div className="project-card">
          <img
            src="/images/lidu's-eatery.png"
            alt="Lidu's Eatery website"
          />

          <div className="project-content">
            <h3>Lidu's Eatery Website</h3>

            <p>
              A multi-page restaurant website designed to provide
              customers with information about the restaurant, menu,
              ordering, location, and contact information.
            </p>

            <p><strong>Completion Date:</strong> 2026</p>
            <p><strong>Role:</strong> Web Developer</p>
            <p>
              <strong>Outcome:</strong> Created a functional restaurant
              website using web development technologies.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>jQuery</span>
            </div>
          </div>
        </div>


        <div className="project-card">
          <img
            src="/images/medtrack.png"
            alt="MedTrack project"
          />

          <div className="project-content">
            <h3>MedTrack</h3>

            <p>
              A remote patient monitoring and medication adherence
              system designed to help patients manage medications
              and allow healthcare providers to monitor patient
              information.
            </p>

            <p><strong>Completion Date:</strong> 2026</p>
            <p><strong>Role:</strong> System Designer</p>
            <p>
              <strong>Outcome:</strong> Developed requirements and
              system design for a healthcare monitoring solution.
            </p>

            <div className="project-tags">
              <span>System Design</span>
              <span>Healthcare</span>
              <span>Database</span>
            </div>
          </div>
        </div>


        <div className="project-card">
          <img
            src="/logo.png"
            alt="React portfolio website"
          />

          <div className="project-content">
            <h3>React Portfolio Website</h3>

            <p>
              A personal portfolio website created to showcase my
              education, skills, projects, services, references,
              and contact information.
            </p>

            <p><strong>Completion Date:</strong> 2026</p>
            <p><strong>Role:</strong> Web Developer</p>
            <p>
              <strong>Outcome:</strong> Built a responsive portfolio
              website using React and React Router.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;