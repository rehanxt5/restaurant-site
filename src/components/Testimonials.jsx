import { testimonials } from '../data/contentData';
import './Testimonials.css';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`testimonials__star ${i < rating ? 'testimonials__star--filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="section-label animate-fade-in-up">Guest Words</span>
          <h2 className="testimonials__title animate-fade-in-up delay-1">
            What Our<br />
            <span className="testimonials__title-italic">Guests Say</span>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonials__card animate-fade-in-up delay-${index + 2}`}
            >
              <div className="testimonials__card-accent"></div>
              <div className="testimonials__stars">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="testimonials__quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonials__author">
                <span className="testimonials__author-name">{testimonial.author}</span>
                <span className="testimonials__author-date">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;