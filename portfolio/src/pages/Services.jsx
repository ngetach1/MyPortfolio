function Services() {
  return (
    <section className="services-section">

      <div className="page-heading">
        <p className="welcome-text">WHAT I OFFER</p>

        <h2>My Services</h2>

        <p>
          I provide technology and development services based on my
          programming, web development, and database skills.
        </p>
      </div>

      <div className="services-container">

        <div className="service-card">
          <div className="service-icon">01</div>

          <h3>Web Development</h3>

          <p>
            Creating responsive and user-friendly websites using
            HTML, CSS, JavaScript, and modern web development
            techniques.
          </p>
        </div>


        <div className="service-card">
          <div className="service-icon">02</div>

          <h3>React Development</h3>

          <p>
            Building interactive web applications and user
            interfaces using React and component-based development.
          </p>
        </div>


        <div className="service-card">
          <div className="service-icon">03</div>

          <h3>Database Development</h3>

          <p>
            Working with SQL and database systems to organize,
            manage, and retrieve information efficiently.
          </p>
        </div>


        <div className="service-card">
          <div className="service-icon">04</div>

          <h3>Programming</h3>

          <p>
            Developing programming solutions using languages such
            as Python and C# while applying problem-solving skills.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;