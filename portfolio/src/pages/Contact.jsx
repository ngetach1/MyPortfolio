import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <section className="contact-section">

      <div className="page-heading">
        <p className="welcome-text">GET IN TOUCH</p>

        <h2>Contact Me</h2>

        <p>
          If you would like to get in touch with me, feel free to
          send me a message using the form below.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Contact Information</h3>

          <div className="contact-item">
            <h4>Email</h4>
            <p>natan100920fe@gmail.com</p>
          </div>

          <div className="contact-item">
            <h4>Phone</h4>
            <p>+1 (437) 662-1248</p>
          </div>

          <div className="contact-item">
            <h4>Location</h4>
            <p>Toronto, Ontario, Canada</p>
          </div>

        </div>


        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="firstName">
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="lastName">
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                required
              />
            </div>

          </div>


          <div className="form-group">
            <label htmlFor="phone">
              Contact Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              required
            ></textarea>
          </div>


          <button type="submit" className="button">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;