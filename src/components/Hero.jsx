import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="section-label animate-fade-in-up">Open Tuesday — Sunday</span>
          <h1 className="hero__title animate-fade-in-up delay-1">
            Where Fire<br />
            <span className="hero__title-highlight">Meets</span> Flavor
          </h1>
          <p className="hero__subtitle animate-fade-in-up delay-2">
            Modern charcoal-driven cuisine in a warm, intimate setting. 
            Every dish is crafted over open flame, served with intention.
          </p>
          <div className="hero__cta-group animate-fade-in-up delay-3">
            <a href="#menu" className="btn btn-primary">View Menu</a>
            <a href="#about" className="btn btn-secondary">Our Story</a>
          </div>
          <div className="hero__info animate-fade-in-up delay-4">
            <div className="hero__info-item">
              <span className="hero__info-label">Dinner</span>
              <span className="hero__info-value">Tue—Thu 5—10pm</span>
            </div>
            <div className="hero__info-divider"></div>
            <div className="hero__info-item">
              <span className="hero__info-label">Fri—Sat</span>
              <span className="hero__info-value">5—11pm</span>
            </div>
            <div className="hero__info-divider"></div>
            <div className="hero__info-item">
              <span className="hero__info-label">Sunday</span>
              <span className="hero__info-value">Brunch 10—2</span>
            </div>
          </div>
        </div>
        <div className="hero__image-wrapper animate-scale-in delay-2">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=1000&fit=crop" 
            alt="Oak-grilled prime ribeye with charcoal and fresh herbs"
            className="hero__image"
          />
          <div className="hero__image-accent"></div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;