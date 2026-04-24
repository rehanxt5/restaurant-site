import { useState } from 'react';
import { menuItems, categories } from '../data/menuData';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('mains');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const getCategoryLabel = (category) => {
    const labels = {
      starters: 'Starters',
      mains: 'Mains',
      desserts: 'Desserts',
      beverages: 'Drinks'
    };
    return labels[category] || category;
  };

  return (
    <section id="menu" className="menu section">
      <div className="menu__container">
        <div className="menu__header">
          <span className="section-label animate-fade-in-up">Menu</span>
          <h2 className="menu__title animate-fade-in-up delay-1">
            Wood & Flame,<br />
            <span className="menu__title-italic">Served Simply</span>
          </h2>
        </div>

        <div className="menu__tabs animate-fade-in-up delay-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`menu__tab ${activeCategory === category ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`menu__card animate-fade-in-up delay-${(index % 3) + 1}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="menu__card-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="menu__card-image"
                />
                {item.isSignature && (
                  <span className="menu__card-badge">Chef's Pick</span>
                )}
              </div>
              <div className="menu__card-content">
                <h3 className="menu__card-name">{item.name}</h3>
                <p className="menu__card-description">{item.description}</p>
                <span className="menu__card-price">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;