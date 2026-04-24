// Menu Data for Ember & Oak Restaurant
export const menuItems = [
  // Starters
  {
    id: 's1',
    name: 'Charcoal Roasted Beets',
    description: 'With whipped goat cheese, pistachio, and aged balsamic reduction',
    price: 18,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=400&h=400&fit=crop',
    isSignature: false
  },
  {
    id: 's2',
    name: 'Smoked Bone Marrow',
    description: 'Served with grilled sourdough and sea salt flakes',
    price: 22,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop',
    isSignature: false
  },
  {
    id: 's3',
    name: 'Ember-Roasted Cauliflower',
    description: 'With tahini, preserved lemon, and za\'atar',
    price: 16,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1606850780554-b55de2674f52?w=400&h=400&fit=crop',
    isSignature: false
  },
  // Mains
  {
    id: 'm1',
    name: 'Oak-Grilled Ribeye',
    description: '14oz prime ribeye with charred shallot butter and bone marrow jus',
    price: 58,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=400&fit=crop',
    isSignature: true
  },
  {
    id: 'm2',
    name: 'Slow-Roasted Lamb Shoulder',
    description: 'With pomegranate glaze, rosemary, and garlic labneh',
    price: 44,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=400&fit=crop',
    isSignature: false
  },
  {
    id: 'm3',
    name: 'Charred Salmon',
    description: 'Wild-caught Atlantic salmon with miso glaze and bok choy',
    price: 38,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop',
    isSignature: false
  },
  {
    id: 'm4',
    name: 'Ember Vegetables',
    description: 'Seasonal vegetable medley with smoked aioli',
    price: 28,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop',
    isSignature: false
  },
  // Desserts
  {
    id: 'd1',
    name: 'Burnt Honey Custard',
    description: 'With cardamom brittle and torched meringue',
    price: 14,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71cae63b?w=400&h=400&fit=crop',
    isSignature: false
  },
  {
    id: 'd2',
    name: 'Charred Peach Tart',
    description: 'With vanilla bean ice cream and basil',
    price: 16,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&h=400&fit=crop',
    isSignature: true
  },
  {
    id: 'd3',
    name: 'Smoked Chocolate Ganache',
    description: 'With olive oil, sea salt, and rye crumbs',
    price: 14,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571862157490-40998ee1a43b?w=400&h=400&fit=crop',
    isSignature: false
  },
  // Beverages
  {
    id: 'b1',
    name: 'Ember Old Fashioned',
    description: 'Bourbon, smoked maple, aromatic bitters',
    price: 18,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=400&fit=crop',
    isSignature: false
  },
  {
    id: 'b2',
    name: 'Oak Smoked Negroni',
    description: 'Gin, campari, sweet vermouth with oak chip infusion',
    price: 16,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c?w=400&h=400&fit=crop',
    isSignature: false
  },
  {
    id: 'b3',
    name: 'Seasonal House Sangria',
    description: 'Weekly rotation of fresh fruits and spirits',
    price: 14,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&h=400&fit=crop',
    isSignature: false
  }
];

export const signatureDishes = menuItems.filter(item => item.isSignature);

export const categories = ['starters', 'mains', 'desserts', 'beverages'];