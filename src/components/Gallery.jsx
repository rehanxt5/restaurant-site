import { galleryImages } from '../data/contentData';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery section">
      <div className="gallery__container">
        <div className="gallery__header">
          <span className="section-label animate-fade-in-up">Ambience</span>
          <h2 className="gallery__title animate-fade-in-up delay-1">
            A Place to<br />
            <span className="gallery__title-italic">Gather</span>
          </h2>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery__item gallery__item--${image.aspectRatio} animate-fade-in-up delay-${(index % 3) + 2}`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery__image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;