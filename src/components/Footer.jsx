import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-text">Ember</span>
              <span className="footer__logo-ampersand">&</span>
              <span className="footer__logo-text">Oak</span>
            </a>
            <p className="footer__tagline">
              Where fire meets flavor
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__links-column">
              <h4 className="footer__links-title">Explore</h4>
              <nav className="footer__nav">
                <a href="#about" className="footer__link">About</a>
                <a href="#menu" className="footer__link">Menu</a>
                <a href="#gallery" className="footer__link">Gallery</a>
                <a href="#testimonials" className="footer__link">Reviews</a>
              </nav>
            </div>
            <div className="footer__links-column">
              <h4 className="footer__links-title">Visit</h4>
              <nav className="footer__nav">
                <a href="#contact" className="footer__link">Contact</a>
                <a href="#location" className="footer__link">Location</a>
                <a href="#contact" className="footer__link">Reservations</a>
                <a href="#contact" className="footer__link">Private Events</a>
              </nav>
            </div>
            <div className="footer__links-column">
              <h4 className="footer__links-title">Connect</h4>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.57c0-3.099 1.894-4.888 4.659-4.888 1.325 0 2.463.099 2.463.099v2.57h-1.387c-1.437 0-1.887.955-1.887 1.938v2.34h3.203l-.467 3.47h-2.736v8.385c5.736-.9 10.124-5.864 10.124-11.854z"/>
                  </svg>
                </a>
                <a href="#" className="footer__social-link" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.955-3.127 1.17a4.965 4.965 0 00-8.39 4.523 5.007 5.007 0 00-.11 1.017 10 10 0 01-7.255-3.634 4.83 4.83 0 001.522 6.573c-1.02-.046-2.03-.32-2.885-.75v.06a4.935 4.935 0 003.946 4.84 5.065 5.065 0 01-2.224.084 4.939 4.939 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.159-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Ember & Oak. All rights reserved.
          </p>
          <p className="footer__crafted">
            Warmly crafted
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;