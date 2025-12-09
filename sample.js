/**
 * Sample Page - Comprehensive demonstration of all Aggie Theme Components
 */

import './components/components.css';
import {
  renderNavbar,
  renderHero,
  renderContentBlock,
  renderCardGrid,
  renderHighlight,
  renderTextContent,
  renderCTASection,
  renderFooter
} from './components/index.js';

// ========================================
// 1. Navbar Component
// ========================================
renderNavbar('#navbar', {
  title: 'Sample Page Demo',
  links: [
    { text: 'Home', href: 'index.html' },
    { text: 'Map', href: 'map.html' },
    { text: 'Example', href: 'example.html' },
    { text: 'Sample', href: 'sample.html' },
    { text: 'Docs', href: 'COMPONENTS.md' }
  ]
});

// ========================================
// 2. Hero Component
// ========================================
renderHero('#hero', {
  title: 'Complete Component Showcase',
  subtitle: 'Explore every component in the Aggie Theme library. This page demonstrates all available components with real-world examples and use cases.',
  button: {
    text: 'Scroll to Explore',
    href: '#content-block-1',
    large: true
  }
});

// ========================================
// 3. Content Block #1 - Image Left
// ========================================
renderContentBlock('#content-block-1', {
  image: 'https://placehold.co/600x400/500000/FFFFFF?text=Campus+View',
  imageAlt: 'Texas A&M Campus',
  title: 'Rich History & Tradition',
  description: `
    <p>Texas A&M University stands as one of the nation's premier institutions, with a legacy spanning over 150 years. Our campus combines historic architecture with modern facilities, creating an environment where tradition meets innovation.</p>
    <p>From the iconic Academic Building to Kyle Field, every corner of our campus tells a story of excellence, leadership, and the Aggie Spirit that binds our community together.</p>
  `,
  imagePosition: 'left',
  background: 'light',
  button: {
    text: 'Explore Campus History',
    href: 'map.html',
    type: 'primary'
  }
});

// ========================================
// 4. Highlight Component #1 - Info Type
// ========================================
renderHighlight('#highlight-1', {
  icon: '📢',
  title: 'New Interactive Map Available',
  content: `
    <p>We're excited to announce the launch of our new interactive campus map featuring over 100 historic locations! Explore the evolution of Texas A&M through immersive storytelling and archival photographs.</p>
    <p>The map includes timeline navigation, searchable locations, and detailed historical narratives about each landmark.</p>
  `,
  type: 'info',
  button: {
    text: 'Launch Map',
    href: 'map.html'
  }
});

// ========================================
// 5. Card Grid Component
// ========================================
const cards = [
  {
    icon: '🎓',
    title: 'Academic Excellence',
    description: 'Ranked among the top public universities with world-class programs in engineering, agriculture, business, and more.'
  },
  {
    icon: '🔬',
    title: 'Research Innovation',
    description: 'Leading research initiatives that address global challenges and drive technological advancement.'
  },
  {
    icon: '🤝',
    title: 'Community Impact',
    description: 'Aggies making a difference through service, leadership, and commitment to the greater good.'
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'International programs and partnerships connecting Aggies with opportunities worldwide.'
  },
  {
    icon: '🏅',
    title: 'Athletic Excellence',
    description: 'Competing at the highest level in the SEC with championship traditions and passionate fans.'
  },
  {
    icon: '💼',
    title: 'Career Success',
    description: 'Strong industry connections and a powerful alumni network opening doors to career opportunities.'
  }
];

renderCardGrid('#cards', cards);

// ========================================
// 6. Content Block #2 - Image Right
// ========================================
renderContentBlock('#content-block-2', {
  image: 'https://placehold.co/600x400/500000/FFFFFF?text=Student+Life',
  imageAlt: 'Texas A&M Student Life',
  title: 'Experience the Aggie Spirit',
  description: `
    <p>Life at Texas A&M extends far beyond the classroom. Our vibrant campus community offers countless opportunities for personal growth, leadership development, and lifelong friendships.</p>
    <p>With over 1,000 student organizations, traditions dating back generations, and a campus culture built on respect and service, Aggies experience a college journey unlike any other.</p>
  `,
  imagePosition: 'right',
  background: 'white',
  button: {
    text: 'Discover Student Life',
    href: '#',
    type: 'secondary'
  }
});

// ========================================
// 7. Text Content Area Component
// ========================================
renderTextContent('#text-content', {
  title: 'About the Component Library',
  subtitle: 'Building beautiful Texas A&M themed pages made simple',
  content: `
    <p>The Aggie Theme Component Library provides a comprehensive set of reusable components designed specifically for Texas A&M University web projects. Each component follows university brand guidelines while offering flexibility for customization.</p>

    <h2>Key Features</h2>
    <p>Our component library is built with modern web standards and best practices, ensuring your pages are fast, accessible, and maintainable.</p>

    <h3>Easy to Use</h3>
    <p>Simply import the components you need and configure them with JavaScript objects. No complex setup or configuration required.</p>

    <ul>
      <li>Modular ES6 JavaScript components</li>
      <li>Single CSS file with all component styles</li>
      <li>Comprehensive documentation with examples</li>
      <li>Fully responsive and mobile-friendly</li>
    </ul>

    <h3>Customizable Design</h3>
    <p>All components use CSS custom properties (variables) for easy theming:</p>

    <ul>
      <li>Consistent Texas A&M maroon color scheme</li>
      <li>Flexible layouts that adapt to your content</li>
      <li>Multiple component variants and options</li>
      <li>Override styles without modifying core CSS</li>
    </ul>

    <blockquote>
      "These components have made building our 150th anniversary website a breeze. The consistent design and easy integration saved us countless hours."
      <br>— Development Team
    </blockquote>

    <h2>Getting Started</h2>
    <p>Check out the <code>COMPONENTS.md</code> file for complete documentation, or explore the <code>example.html</code> and <code>sample.html</code> pages to see components in action.</p>
  `,
  width: 'medium',
  centerTitle: false
});

// ========================================
// 8. Highlight Component #2 - Success Type
// ========================================
renderHighlight('#highlight-2', {
  icon: '✅',
  title: 'Component Library Status',
  content: `
    <p><strong>All 10 components are production-ready:</strong></p>
    <ul style="margin-top: 1rem; margin-bottom: 0;">
      <li>Navbar, Hero, Footer</li>
      <li>Card, Card Grid, Section</li>
      <li>Content Block, CTA Section</li>
      <li>Highlight, Text Content Area</li>
    </ul>
  `,
  type: 'success'
});

// ========================================
// 9. CTA Section Component
// ========================================
renderCTASection('#cta', {
  title: 'Ready to Build Your Own Page?',
  description: 'Use these components to create beautiful Texas A&M themed pages in minutes. All components are documented and ready to use right now.',
  button: {
    text: 'View Documentation',
    href: 'COMPONENTS.md',
    target: '_blank'
  },
  background: 'gradient',
  size: 'large'
});

// ========================================
// 10. Footer Component
// ========================================
renderFooter('#footer', {
  text: '© Texas A&M University Libraries',
  links: [
    { text: 'Documentation', href: 'COMPONENTS.md' },
    { text: 'Example Page', href: 'example.html' },
    { text: 'GitHub', href: '#' }
  ]
});
