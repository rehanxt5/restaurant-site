import { signatureDishes } from '../data/menuData';
import './SignatureDishes.css';

const SignatureDishes = () => {
  return (
    <section id="signature" className="signature section">
      <div className="signature__container">
        <div className="signature__header">
          <span className="section-label animate-fade-in-up">Chef's Selection</span>
          <h2 className="signature__title animate-fade-in-up delay-1">
            Signature<br />
            <span className="signature__title-italic">Recommendations</span>
          </h2>
        </div>

        <div className="signature__wrapper">
          <div className="signature__scroll">
            {signatureDishes.map((dish, index) => (
              <div 
                key={dish.id} 
                className={`signature__card animate-fade-in-up delay-${index + 2}`}
              >
                <div className="signature__card-image-wrapper">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="signature__card-image"
                  />
                  <div className="signature__card-badge">
                    <span className="signature__card-badge-text">★ Signature</span>
                  </div>
                </div>
                <div className="signature__card-content">
                  <h3 className="signature__card-name">{dish.name}</h3>
                  <p className="signature__card-description">{dish.description}</p>
                  <span className="signature__card-price">${dish.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;