# SPEC.md - Ember & Oak Restaurant Landing Page

## Project Overview
- **Project Name**: Ember & Oak
- **Project Type**: Premium restaurant landing page (single page)
- **Core Functionality**: Showcase restaurant brand, menu, ambience, and facilitate reservations
- **Target Users**: Prospective diners seeking upscale dining experience

---

## 1. Visual Design Specification

### Color Palette
| Role | Color | Hex Code |
|------|-------|----------|
| Primary Background | Warm Ivory | `#FAF8F5` |
| Secondary Background | Soft Beige | `#F3EDE4` |
| Card Background | Pure White | `#FFFFFF` |
| Primary Text | Charcoal | `#2D2A26` |
| Secondary Text | Warm Gray | `#6B6560` |
| Accent Primary | Muted Gold | `#C9A962` |
| Accent Secondary | Soft Clay | `#B8A594` |
| Border/Divider | Light Taupe | `#E8E2DA` |
| Highlight | Warm Cream | `#FDFAF6` |

### Typography
| Element | Font Family | Weight | Size (Desktop) | Size (Mobile) |
|---------|------------|--------|---------------|--------------|
| Logo/Brand | Playfair Display | 500 | 28px | 22px |
| H1 (Hero) | Playfair Display | 400 | 64px | 36px |
| H2 (Section) | Playfair Display | 400 | 42px | 28px |
| H3 (Subsection) | DM Sans | 500 | 20px | 18px |
| Body | DM Sans | 400 | 16px | 15px |
| Body Small | DM Sans | 400 | 14px | 13px |
| Nav Links | DM Sans | 500 | 15px | 14px |
| Button | DM Sans | 500 | 14px | 13px |
| Caption | DM Sans | 400 | 12px | 11px |

### Spacing System
- **Section Padding**: 120px vertical (desktop), 64px (mobile)
- **Container Max Width**: 1200px
- **Grid Gap**: 32px (desktop), 24px (mobile)
- **Component Padding**: 24px-32px
- **Border Radius**: Cards: 12px, Buttons: 6px, Images: 8px

### Visual Effects
- **Shadows**:
  - Subtle: `0 2px 8px rgba(45, 42, 38, 0.06)`
  - Medium: `0 4px 20px rgba(45, 42, 38, 0.08)`
  - Elevated: `0 8px 32px rgba(45, 42, 38, 0.12)`
- **Transitions**: All 0.3s ease-out (300ms)
- **Backdrop Blur**: Header blur 12px with 95% opacity background

---

## 2. Component Specification

### 2.1 Header Component
- **Position**: Fixed/sticky top, semi-transparent with blur on scroll
- **Height**: 72px (desktop), 64px (mobile)
- **Layout**: Logo left, nav center (hidden on mobile with hamburger), CTA right
- **Background**: `rgba(250, 248, 245, 0.95)` with backdrop-filter blur(12px)
- **Border**: 1px bottom `#E8E2DA` at 30% opacity
- **Animation**: Subtle slide-down on page load
- **Nav Items**: About, Menu, Gallery, Contact, Location
- **CTA Button**: "Reserve a Table" - outlined style with gold accent

### 2.2 Hero Section
- **Layout**: Two-column on desktop (text left, image right), stacked on mobile
- **Height**: Auto, min 90vh on desktop
- **Background**: Primary background with subtle texture
- **Elements**:
  - Headline: "Where Fire Meets Flavor"
  - Subheadline: "Modern charcoal-driven cuisine in a warm, intimate setting"
  - Opening hours badge
  - Primary CTA: "View Menu" (filled gold)
  - Secondary CTA: "Our Story" (outlined)
- **Image**: Large atmospheric food/interior image with subtle parallax
- **Animation**: Staggered text fade-in, image scale-in on load

### 2.3 About Section
- **Layout**: Two-column with image left, text right
- **Background**: Secondary background (soft beige)
- **Content**:
  - Section label: "Our Story"
  - Headline: "Crafted by Fire, Defined by Guests"
  - Body paragraph: Restaurant philosophy, ingredients, craft
  - Stats row: Years (8+), Seats (48), Chef's years (20+)
- **Image**: Chef at work or open kitchen with warm tone
- **Animation**: Fade-up on scroll

### 2.4 Menu Section
- **Layout**: Category tabs + grid of menu cards
- **Categories**: Starters, Mains, Desserts, Beverages
- **Card Design**:
  - Image (square, 200x200)
  - Dish name
  - Short description (2 lines max)
  - Price with $ prefix
  - Category badge (subtle)
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Animation**: Staggered fade-in per card

### 2.5 Signature Dishes Section
- **Layout**: Horizontal scroll cards on mobile, grid on desktop
- **Count**: 4 dishes
- **Design**: Larger presentation than menu, full-width image
- **Elements**:
  - Chef's pick badge (gold ribbon)
  - Dish name
  - Description
  - Price
- **Animation**: Smooth horizontal scroll on mobile, hover lift on desktop

### 2.6 Gallery Section
- **Layout**: Masonry-style 3-column grid
- **Count**: 9 images
- **Design**: Mix of food, interior, ambiance shots
- **Animation**: Hover zoom (scale 1.03), subtle shadow lift

### 2.7 Testimonials Section
- **Layout**: 3-column cards
- **Count**: 3 testimonials
- **Elements**:
  - Quote text
  - Author name
  - Date
  - Star rating (visual)
- **Design**: Soft card with left gold accent border

### 2.8 Contact Section
- **Layout**: Two-column (info + CTA)
- **Elements**:
  - Phone number
  - Email
  - Opening hours (daily schedule)
  - "Reserve Now" button
- **Background**: Card with subtle shadow

### 2.9 Location Section
- **Layout**: Map embed + address details
- **Map**: Google Maps embed placeholder
- **Elements**:
  - Full address
  - Nearby landmark
  - Parking info
- **Animation**: Fade-in with map

### 2.10 Footer
- **Layout**: 3-column (brand, links, social)
- **Elements**:
  - Logo
  - Quick links
  - Social placeholders
  - Copyright
  - "Warmly crafted" tagline

---

## 3. Animation Specification

### Micro-Animations (CSS Only)
| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Header | Load | Slide down + fade | 0.5s | ease-out |
| Hero text | Load | Staggered fade-up | 0.6s | ease-out |
| Hero image | Load | Scale 1.05 → 1 | 0.8s | ease-out |
| Menu cards | Scroll | Fade-up stagger | 0.4s each | ease-out |
| Gallery images | Hover | Scale 1.03 + shadow | 0.3s | ease-out |
| Buttons | Hover | Translate Y -2px + shadow | 0.3s | ease-out |
| Nav links | Hover | Underline slide | 0.3s | ease-out |
| Testimonial cards | Hover | Lift + shadow | 0.3s | ease-out |

### Section Entrance
- Trigger: When section enters viewport
- Animation: Opacity 0→1, translateY 30px→0
- Threshold: 100px

---

## 4. Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|------------|
| Desktop | ≥1024px | Full layout, 3-column grids |
| Tablet | 768px-1023px | 2-column grids, reduced padding |
| Mobile | <768px | Single column, hamburger nav, stacked |

---

## 5. Data Structures

### Menu Items Array
```javascript
{
  id: string,
  name: string,
  description: string,
  price: number,
  category: 'starters' | 'mains' | 'desserts' | 'beverages',
  image: string (URL),
  isSignature: boolean
}
```

### Testimonials Array
```javascript
{
  id: string,
  quote: string,
  author: string,
  date: string,
  rating: number (1-5)
}
```

### Gallery Images Array
```javascript
{
  id: string,
  src: string,
  alt: string,
  aspectRatio: 'square' | 'portrait' | 'landscape'
}
```

---

## 6. Acceptance Criteria

### Visual
- [ ] Light theme consistently applied
- [ ] Gold accents appear only as highlights
- [ ] Typography hierarchy is clear
- [ ] Images load with proper aspect ratios
- [ ] No layout shifts on load
- [ ] All sections have proper spacing

### Functional
- [ ] Navigation scrolls to sections smoothly
- [ ] Menu category tabs filter correctly
- [ ] All links have proper hrefs
- [ ] Map embed placeholder displays
- [ ] Mobile hamburger menu works

### Responsive
- [ ] Desktop layout matches spec
- [ ] Tablet layout adjusts gracefully
- [ ] Mobile layout is usable
- [ ] Touch targets are 44px minimum

### Accessibility
- [ ] Color contrast meets WCAG AA
- [ ] All images have alt text
- [ ] Headings in proper order
- [ ] Keyboard navigation works

### Performance
- [ ] Page loads under 3 seconds
- [ ] No console errors
- [ ] Images optimized