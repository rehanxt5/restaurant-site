import './Location.css';

const Location = () => {
  return (
    <section id="location" className="location section">
      <div className="location__container">
        <div className="location__header">
          <span className="section-label animate-fade-in-up">Find Us</span>
          <h2 className="location__title animate-fade-in-up delay-1">
            Come<br />
            <span className="location__title-italic">Visit</span>
          </h2>
        </div>

        <div className="location__content">
          <div className="location__map animate-fade-in-up delay-2">
            <iframe
              title="Ember & Oak Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98513038459375!3d40.74881797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="location__details animate-fade-in-up delay-3">
            <div className="location__address">
              <h3 className="location__details-title">Address</h3>
              <p className="location__address-text">
                247 West 28th Street<br />
                New York, NY 10001
              </p>
            </div>

            <div className="location__landmark">
              <h3 className="location__details-title">Nearby</h3>
              <p className="location__landmark-text">
                One block north of the Empire State Building, 
                between 7th and 8th Avenue.
              </p>
            </div>

            <div className="location__parking">
              <h3 className="location__details-title">Parking</h3>
              <p className="location__parking-text">
                Street parking available. We recommend 
                the garage at 256 West 29th Street.
              </p>
            </div>

            <div className="location__transit">
              <h3 className="location__details-title">Transit</h3>
              <p className="location__transit-text">
                A/C/E, 1/2/3 to 34th Street-Penn Station. 
                N/R/W to 28th Street.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;