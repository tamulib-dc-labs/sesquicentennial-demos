# Aggie Theme Components

A collection of reusable, Texas A&M themed components for building beautiful web pages quickly and consistently.

## Quick Start

### 1. Import Components and Styles

In your JavaScript file:

```javascript
import './components/components.css';
import {
  renderNavbar,
  renderHero,
  renderCardGrid,
  renderSection,
  renderFooter,
  renderContentBlock,
  renderCTASection,
  renderHighlight,
  renderTextContent
} from './components/index.js';
```

### 2. Create Your HTML Structure

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
  </head>
  <body>
    <div id="navbar"></div>
    <div id="hero"></div>
    <main class="container">
      <div id="content"></div>
    </main>
    <div id="footer"></div>
    <script type="module" src="/your-script.js"></script>
  </body>
</html>
```

### 3. Render Components

Use the render functions to inject components into your page:

```javascript
renderNavbar('#navbar', {
  title: 'My Site',
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' }
  ]
});
```

## Components

### Navbar

Creates a sticky navigation bar with the Texas A&M maroon theme.

**Options:**
- `title` (string): Brand title displayed on the left
- `links` (array): Array of link objects with `text` and `href` properties

**Example:**
```javascript
renderNavbar('#navbar', {
  title: 'Sesquicentennial Planning Demos',
  links: [
    { text: 'Map', href: '#map' },
    { text: 'Sliders', href: '#sliders' },
    { text: 'Timeline', href: '#timeline' },
    { text: 'Contact', href: '#contact' }
  ]
});
```

---

### Hero

Creates a hero section with a gradient background, title, subtitle, and optional call-to-action button.

**Options:**
- `title` (string): Main hero title
- `subtitle` (string): Descriptive subtitle text
- `button` (object): Button configuration
  - `text` (string): Button text
  - `href` (string): Button link
  - `large` (boolean): Use large button size
  - `onClick` (string): Optional onclick handler
- `background` (string): 'gradient' (default) or 'solid'

**Example:**
```javascript
renderHero('#hero', {
  title: 'Welcome to Texas A&M',
  subtitle: 'Explore 150 years of Aggie history',
  button: {
    text: 'Get Started',
    href: '#explore',
    large: true
  }
});
```

---

### Card

Creates individual cards or card grids for displaying content.

**Single Card Options:**
- `icon` (string): Icon or emoji
- `title` (string): Card title
- `description` (string): Card description
- `href` (string): Make entire card clickable
- `button` (object): Add a button to the card
  - `text` (string): Button text
  - `href` (string): Button link

**Example - Card Grid:**
```javascript
import { renderCardGrid } from './components/index.js';

const cards = [
  {
    icon: '🗺️',
    title: 'Interactive Map',
    description: 'Explore campus landmarks through an interactive map',
    button: {
      text: 'View Map',
      href: './map.html'
    }
  },
  {
    icon: '📚',
    title: 'Library',
    description: 'Access our extensive digital collections',
    href: '/library'
  }
];

renderCardGrid('#cards-container', cards);
```

---

### Section

Creates a content section with optional title, description, and custom content.

**Options:**
- `id` (string): Section ID attribute
- `title` (string): Section title
- `description` (string): Section description
- `content` (string): HTML content for the section body
- `className` (string): Additional CSS classes
- `background` (string): 'default', 'light', or 'white'

**Example:**
```javascript
renderSection('#my-section', {
  id: 'about',
  title: 'About This Project',
  description: 'Learn more about our mission',
  background: 'light',
  content: '<p>Your custom HTML content here</p>'
});
```

---

### Button

Creates a styled button or link button.

**Options:**
- `text` (string): Button text
- `href` (string): Creates a link button (optional)
- `onClick` (string): onclick handler
- `type` (string): 'primary' or 'secondary'
- `large` (boolean): Use large button size
- `className` (string): Additional CSS classes

**Example:**
```javascript
import { createButton } from './components/index.js';

// Link button
const button1 = createButton({
  text: 'Learn More',
  href: '/about',
  type: 'primary',
  large: true
});

// Click handler button
const button2 = createButton({
  text: 'Submit',
  onClick: 'handleSubmit()',
  type: 'secondary'
});
```

---

### Footer

Creates a footer with copyright text and optional links.

**Options:**
- `text` (string): Footer text/copyright
- `links` (array): Array of link objects with `text` and `href`

**Example:**
```javascript
renderFooter('#footer', {
  text: '© 2025 Texas A&M University Libraries',
  links: [
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Contact', href: '/contact' }
  ]
});
```

---

### Content Block

Creates a side-by-side layout with image and text, perfect for feature descriptions.

**Options:**
- `image` (string): Image URL or path
- `imageAlt` (string): Alt text for the image
- `title` (string): Content block title
- `description` (string): Content description (supports HTML)
- `imagePosition` (string): 'left' or 'right' (default: 'left')
- `button` (object): Optional button config
  - `text` (string): Button text
  - `href` (string): Button link
  - `type` (string): 'primary' or 'secondary'
- `background` (string): 'white' (default), 'light', or 'maroon'

**Example:**
```javascript
import { renderContentBlock } from './components/index.js';

renderContentBlock('#content-block', {
  image: '/images/campus.jpg',
  imageAlt: 'Texas A&M Campus',
  title: 'Discover Our Campus',
  description: '<p>Texas A&M University has a rich history spanning 150 years. Our campus is home to beautiful architecture and vibrant traditions.</p>',
  imagePosition: 'left',
  button: {
    text: 'Take a Tour',
    href: '/tour',
    type: 'primary'
  },
  background: 'light'
});
```

---

### CTA Section

Creates a prominent call-to-action section with maroon background.

**Options:**
- `title` (string): CTA title
- `description` (string): CTA description
- `button` (object): Button configuration
  - `text` (string): Button text
  - `href` (string): Button link
  - `target` (string): Optional target attribute (e.g., '_blank')
- `background` (string): 'gradient' (default) or 'solid'
- `size` (string): 'default' or 'large'

**Example:**
```javascript
import { renderCTASection } from './components/index.js';

renderCTASection('#cta', {
  title: 'Ready to Get Started?',
  description: 'Join thousands of Aggies in exploring our rich history and vibrant community.',
  button: {
    text: 'Explore Now',
    href: 'https://example.com',
    target: '_blank'
  },
  background: 'gradient',
  size: 'large'
});
```

---

### Highlight / Callout

Creates an emphasized content box to draw attention to important information.

**Options:**
- `title` (string): Highlight title
- `content` (string): Highlight content (supports HTML)
- `icon` (string): Optional icon or emoji
- `type` (string): 'maroon' (default), 'info', 'success', or 'warning'
- `button` (object): Optional button config
  - `text` (string): Button text
  - `href` (string): Button link

**Example:**
```javascript
import { renderHighlight } from './components/index.js';

renderHighlight('#highlight', {
  icon: '📢',
  title: 'Important Announcement',
  content: '<p>Our interactive map now includes over 100 historic locations across campus!</p>',
  type: 'info',
  button: {
    text: 'View Map',
    href: '/map'
  }
});
```

---

### Text Content Area

Creates a rich text content area with proper typography for articles, documentation, or long-form content.

**Options:**
- `title` (string): Main title
- `subtitle` (string): Optional subtitle
- `content` (string): Main content (supports full HTML)
- `width` (string): 'narrow', 'medium' (default), or 'wide'
- `centerTitle` (boolean): Center the title (default: false)

**Example:**
```javascript
import { renderTextContent } from './components/index.js';

renderTextContent('#article', {
  title: 'The History of Texas A&M',
  subtitle: 'From Agricultural College to World-Class University',
  content: `
    <p>Texas A&M University was founded in 1876 as the state's first public institution of higher education.</p>

    <h2>Early Years</h2>
    <p>The Agricultural and Mechanical College of Texas opened its doors with just six faculty members...</p>

    <blockquote>
      "From knowledge, leadership. From leadership, progress."
    </blockquote>

    <h3>Key Milestones</h3>
    <ul>
      <li>1876 - Founded as Texas A&M College</li>
      <li>1963 - Became Texas A&M University</li>
      <li>2021 - Celebrated 145 years of excellence</li>
    </ul>
  `,
  width: 'medium',
  centerTitle: true
});
```

---

## Advanced Usage

### Using Create Functions

Instead of render functions, you can use create functions to get HTML strings:

```javascript
import { createCard, createButton } from './components/index.js';

const cardHTML = createCard({
  icon: '🎓',
  title: 'My Card',
  description: 'Card description'
});

// Insert into your page
document.querySelector('#container').innerHTML = cardHTML;
```

### Mixing Components with Custom HTML

You can combine components with your own HTML:

```javascript
renderSection('#my-section', {
  title: 'Custom Section',
  content: `
    <div class="card-grid">
      ${createCard({ title: 'Card 1', icon: '🎯' })}
      ${createCard({ title: 'Card 2', icon: '🎨' })}
    </div>
    <div style="margin-top: 2rem;">
      ${createButton({ text: 'Learn More', href: '#more' })}
    </div>
  `
});
```

### Customizing Styles

All components use CSS custom properties (variables) that you can override:

```css
:root {
  --maroon-primary: #500000;  /* Override to change primary color */
  --maroon-dark: #3c0000;
  --white: #ffffff;
  /* ... more variables */
}
```

## CSS Classes Reference

### Layout
- `.container` - Max-width container with padding
- `.section` - Standard section padding
- `.section-light` - Light gray background
- `.section-white` - White background

### Typography
- `.section-title` - Large maroon section titles
- `.section-description` - Descriptive text
- `.hero-title` - Large white hero titles
- `.hero-subtitle` - Hero subtitle text

### Components
- `.navbar` - Sticky navigation bar
- `.hero` - Hero section with gradient
- `.card` - Individual card
- `.card-grid` - Grid of cards
- `.btn` - Base button style
- `.btn-primary` - White button on maroon
- `.btn-secondary` - Maroon button
- `.btn-large` - Larger button size
- `.content-block` - Content block with image and text
- `.content-block-inner` - Inner container for content block
- `.cta-section` - Call-to-action section
- `.cta-content` - CTA inner container
- `.highlight` - Highlight/callout box
- `.highlight-maroon` - Maroon themed highlight
- `.highlight-info` - Blue themed highlight
- `.highlight-success` - Green themed highlight
- `.highlight-warning` - Yellow themed highlight
- `.text-content` - Text content area
- `.text-content-narrow` - Narrow width (700px)
- `.text-content-medium` - Medium width (900px)
- `.text-content-wide` - Wide width (1200px)

### Forms
- `.form-group` - Form field container
- `.contact-form` - Contact form wrapper

## Example: Complete Page

```javascript
import './components/components.css';
import * as Components from './components/index.js';

// Navbar
Components.renderNavbar('#navbar', {
  title: 'My Aggie Site',
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '#about' }
  ]
});

// Hero
Components.renderHero('#hero', {
  title: 'Welcome!',
  subtitle: 'This is my Texas A&M themed site',
  button: { text: 'Explore', href: '#content', large: true }
});

// Content Section with Cards
const cards = [
  { icon: '📚', title: 'Resources', description: 'Browse our collection' },
  { icon: '🎓', title: 'Programs', description: 'Learn about our programs' },
  { icon: '📞', title: 'Contact', description: 'Get in touch with us' }
];

Components.renderSection('#content', {
  id: 'about',
  title: 'Our Features',
  description: 'Discover what we offer',
  background: 'light',
  content: cards.map(card => Components.createCard(card)).join('')
});

// Footer
Components.renderFooter('#footer', {
  text: '© 2025 Texas A&M University'
});
```

## Browser Support

These components work in all modern browsers that support:
- ES6 Modules
- CSS Custom Properties
- CSS Grid
- Flexbox

## Need Help?

See `example.html` and `example.js` for a working demonstration of all components.
