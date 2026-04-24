import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <a href="#home" className="header__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="header__logo-text">Ember</span>
          <span className="header__logo-ampersand">&</span>
          <span className="header__logo-text">Oak</span>
        </a>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          <a href="#about" className="header__nav-link" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </a>
          <a href="#menu" className="header__nav-link" onClick={(e) => handleNavClick(e, 'menu')}>
            Menu
          </a>
          <a href="#gallery" className="header__nav-link" onClick={(e) => handleNavClick(e, 'gallery')}>
            Gallery
          </a>
          <a href="#contact" className="header__nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
          <a href="#location" className="header__nav-link" onClick={(e) => handleNavClick(e, 'location')}>
            Location
          </a>
        </nav>

        <a href="#contact" className="header__cta btn btn-outline" onClick={(e) => handleNavClick(e, 'contact')}>
          Reserve a Table
        </a>

        <button 
          className={`header__hamburger ${mobileMenuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;