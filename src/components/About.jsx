import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="about__container">
        <div className="about__image-wrapper animate-fade-in-up">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800&h=1000&fit=crop" 
            alt="Chef preparing over open flame at ember kitchen"
            className="about__image"
          />
          <div className="about__image-accent"></div>
        </div>
        <div className="about__content">
          <span className="section-label animate-fade-in-up">Our Story</span>
          <h2 className="about__title animate-fade-in-up delay-1">
            Crafted by Fire,<br />
            <span className="about__title-italic">Defined by Guests</span>
          </h2>
          <div className="about__text animate-fade-in-up delay-2">
            <p>
              Ember & Oak was born from a simple obsession: the primal beauty of cooking over open flame. 
              We believe fire transforms ingredients in ways no other method can—inways no other method can—it caramelizes, chars, and deepens, creating flavors that linger.
            </p>
            <p>
              Our open kitchen lets you witness every sear, every smoke, every careful rotation. 
              We source from farms within 150 miles, changing our menu with the seasons. 
              This isn't fine dining as performance—it's gathering as it should be.
            </p>
          </div>
          <div className="about__stats animate-fade-in-up delay-3">
            <div className="about__stat">
              <span className="about__stat-number">8+</span>
              <span className="about__stat-label">Years</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">48</span>
              <span className="about__stat-label">Seats</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">20+</span>
              <span className="about__stat-label">Years of Craft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;