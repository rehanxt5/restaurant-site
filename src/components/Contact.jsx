import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="contact__container">
        <div className="contact__card animate-fade-in-up">
          <div className="contact__info">
            <span className="section-label">Get in Touch</span>
            <h2 className="contact__title">
              We\u2019d Love to<br />
              <span className="contact__title-italic">Host You</span>
            </h2>
            
            <div className="contact__details">
              <div className="contact__item">
                <span className="contact__item-label">Phone</span>
                <a href="tel:+15551234567" className="contact__item-value">+1 (555) 123-4567</a>
              </div>
              <div className="contact__item">
                <span className="contact__item-label">Email</span>
                <a href="mailto:hello@emberandoak.com" className="contact__item-value">hello@emberandoak.com</a>
              </div>
            </div>

            <div className="contact__hours">
              <h3 className="contact__hours-title">Opening Hours</h3>
              <div className="contact__hours-list">
                <div className="contact__hours-row">
                  <span>Tuesday \u2014 Thursday</span>
                  <span>5:00 PM \u2014 10:00 PM</span>
                </div>
                <div className="contact__hours-row">
                  <span>Friday \u2014 Saturday</span>
                  <span>5:00 PM \u2014 11:00 PM</span>
                </div>
                <div className="contact__hours-row">
                  <span>Sunday</span>
                  <span>Brunch 10:00 AM \u2014 2:00 PM</span>
                </div>
                <div className="contact__hours-row contact__hours-row--muted">
                  <span>Monday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__cta-wrapper">
            <h3 className="contact__cta-title">Make a Reservation</h3>
            <p className="contact__cta-text">
              For parties of 6 or more, we recommend calling ahead. 
              Walk-ins are always welcome based on availability.
            </p>
            <a href="tel:+15551234567" className="btn btn-primary contact__cta-button">
              Reserve by Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;