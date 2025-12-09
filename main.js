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


renderNavbar('#navbar', {
  title: 'Sesquicentennial Planning Demos',
  links: [
    { text: 'Home', href: 'index.html' },
    { text: 'Map', href: '#aggieland' },
    { text: 'Sliders', href: '#before-after' },
    { text: 'Timeline', href: '#timelines' }
  ]
});


renderHero('#hero', {
  title: 'Welcome to Our Sesquicentennial Planning Demos',
  subtitle: 'An interactive collection highlighting the custom-designed UI elements powering Texas A&M’s 150th anniversary web presence.',
  button: {
    text: 'Scroll to Explore',
    href: '#feature-cards',
    large: true
  }
});

const featureCards = [
  {
    icon: '🗺',
    title: 'Aggieland Through Time',
    description: 'A vivid, campus-wide map uncovering buildings and places that shaped Texas A&M\'s first 150 years',
    button: {
        text: 'Explore',
        href: '#aggieland'
    }
  },
  {
    icon: '🎚️',
    title: 'Before and After Sliders',
    description: 'Simple interactive sliders that lets you compare historic and modern views of campus buildings and landmarks and other images',
    button: {
      text: 'Explore',
      href: '#before-after'
    }
  },
  {
    icon: '⏳',
    title: 'Timelines',
    description: 'A collection of interactive timeline components designed to showcase key milestones, events, and stories from Texas A&M’s 150-year history',
    button: {
      text: 'Explore',
      href: '#timelines'
    }
  },
]

renderCardGrid('#feature-cards', featureCards);


renderContentBlock('#aggieland', {
  image: './images/aggieland.png',
  imageAlt: 'A screenshot of the Aggieland Map',
  title: 'Explore Our Building History',
  description: `
    <p>An interactive timeline-based map invites users to discover the rich history of Texas A&M University’s campus. The component reveals how the campus has transformed over time, connecting past and present through dynamic visual storytelling.</p>
  `,
  imagePosition: 'right',
  background: 'white',
  button: {
    text: 'Visit Aggieland Through Time',
    href: 'https://tamulib-dc-labs.github.io/150th-rewrite/',
    type: 'secondary'
  }
});


renderTextContent('#using-map', {
  title: 'Using Aggieland Through Time',
  subtitle: 'Existing Features and Future Elements',
  content: `
    <p>The <a href="https://tamulib-dc-labs.github.io/150th-rewrite" target="_blank">Aggieland Through Time</a> 
    component lets users explore the history of the buildings across campus using either an interactive map or a 
    traditional text search.</p>

    <h2>Key Features</h2>
    <p>Each historic building is represented by many images taken over time. Users can view all historic images and even share
    there favorite images through persistent linking with the <em>Share</em> button.</p>
    
    <a href="https://tamulib-dc-labs.github.io/150th-rewrite/works/academic-building?iiif-content=JTdCJTIyJTQwY29udGV4dCUyMiUzQSUyMmh0dHAlM0ElMkYlMkZpaWlmLmlvJTJGYXBpJTJGcHJlc2VudGF0aW9uJTJGMyUyRmNvbnRleHQuanNvbiUyMiUyQyUyMmlkJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZ0YW11bGliLWRjLWxhYnMuZ2l0aHViLmlvJTJGMTUwdGgtcmV3cml0ZSUyRndvcmtzJTJGYWNhZGVtaWMtYnVpbGRpbmclMkZjb250ZW50LXN0YXRlJTIyJTJDJTIydHlwZSUyMiUzQSUyMkFubm90YXRpb24lMjIlMkMlMjJtb3RpdmF0aW9uJTIyJTNBJTVCJTIyY29udGVudFN0YXRlJTIyJTVEJTJDJTIydGFyZ2V0JTIyJTNBJTdCJTIyaWQlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnRhbXVsaWItZGMtbGFicy5naXRodWIuaW8lMkZzZXNxdWljZW50ZW5uaWFsLW1hbmlmZXN0cyUyRmJ1aWxkaW5nX2hpc3RvcnklMkZBY2FkZW1pY19CdWlsZGluZyUyRmNhbnZhcyUyRjMwJTIyJTJDJTIydHlwZSUyMiUzQSUyMkNhbnZhcyUyMiUyQyUyMnBhcnRPZiUyMiUzQSU1QiU3QiUyMmlkJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZ0YW11bGliLWRjLWxhYnMuZ2l0aHViLmlvJTJGc2VzcXVpY2VudGVubmlhbC1tYW5pZmVzdHMlMkZidWlsZGluZ19oaXN0b3J5JTJGQWNhZGVtaWNfQnVpbGRpbmcuanNvbiUyMiUyQyUyMnR5cGUlMjIlM0ElMjJNYW5pZmVzdCUyMiU3RCU1RCU3RCU3RA" target="_blank">
    <figure>
        <img src="./images/share.png">
        <figcaption>An example of the Share Feature</figcaption>
    </figure>
    </a>
    
    <h3>Map Interface</h3>
    <p>The map interface:</p>

    <ul>
      <li>Zooms in on only markers available in the set</li>
      <li>Provides a way to dynamically switch layer</li>
      <li>Allows users to limit the markers by date range</li>
      <li>Displays thumbnails of each work as the marker</li>
      <li>Clusters elements appropriately based on Zoom level</li>
      <li>Displays all images of a building with a slider by default</li>
    </ul>

    <h3>Traditional Search</h3>
    <p>The traditional search allows users to:</p>

    <ul>
      <li>Search by keyword or for specific metadata elements</li>
      <li>Use facets to limit results</li>
    </ul>
  `,
  width: 'medium',
  centerTitle: false
});

renderTextContent('#before-after', {
  title: 'Before and After Sliders',
  subtitle: 'Drag the Slider to Compare Two Images',
  content: `
    <h3>
        Horizontal Slider
    </h3>
    <p>Our horizontal slider can be used when the images naturally progress from left to right</p>
    
    <before-after
       before="https://www.aggienetwork.com/images/thenandnow/fullpano1.jpg"
       after="https://www.aggienetwork.com/images/thenandnow/fullpano2.jpg"
       before-label="Before"
       after-label="After"
       start-position="30"
       style="height: 400px;"
    >
    </before-after>
    
    <h3>
        Vertical Slider
    </h3>
    <p>Conversely, our vertical slider allows you to compare two images that are </p>
      <before-after
       orientation="vertical"
       before="https://api-pre.library.tamu.edu/iiif/2/aHR0cHM6Ly9hcGktcHJlLmxpYnJhcnkudGFtdS5lZHUvZmNyZXBvL3Jlc3QvYmIvOTcvZjIvM2UvYmI5N2YyM2UtODAzYS00YmQ2LTg0MDYtMDY4MDI2MjM1NTRjL2F1ZHJleS1pbXBvcnRfb2JqZWN0cy8xMS9wYWdlcy9wYWdlXzAvZmlsZXMvMzUzNDA0MjI4Ml8yZGVkMGNmYjY5X28uanBn/full/full/0/default.jpg"
       after="https://api-pre.library.tamu.edu/iiif/2/aHR0cHM6Ly9hcGktcHJlLmxpYnJhcnkudGFtdS5lZHUvZmNyZXBvL3Jlc3QvYmIvOTcvZjIvM2UvYmI5N2YyM2UtODAzYS00YmQ2LTg0MDYtMDY4MDI2MjM1NTRjL2F1ZHJleS1pbXBvcnRfb2JqZWN0cy80My9wYWdlcy9wYWdlXzAvZmlsZXMvQWNhZGVtaWMlMjBCdWlsZGluZyUyMDc4LnRpZg==/full/full/0/default.jpg"
       before-label="Before"
       after-label="After"
       start-position="30"
       style="height: 800px;"
      >
      </before-after>
  `,
    width: 'medium',
    centerTitle: false
});

renderTextContent('#timelines', {
  title: 'Timelines',
  subtitle: 'placeholder',
  content: `
    <p></p>
  `,
  width: 'medium',
  centerTitle: false
});


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


renderFooter('#footer', {
  text: '© Texas A&M University Libraries',
  links: [
    { text: 'Documentation', href: 'COMPONENTS.md' },
    { text: 'Example Page', href: 'example.html' },
    { text: 'GitHub', href: '#' }
  ]
});
