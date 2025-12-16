import './components/components.css';
import {
  renderNavbar,
  renderHero,
  renderContentBlock,
  renderCardGrid,
  renderHighlight,
  renderTextContent,
  renderCTASection,
  renderFooter,
  renderTimeline,
  renderModalGrid,
    renderModal,
    renderAggieViewer,
    renderAggieScroll
} from './components/index.js';



renderNavbar('#navbar', {
  title: 'Sesquicentennial Planning Demos',
  links: [
    { text: 'Home', href: 'index.html' },
    { text: 'Map', href: 'index.html#aggieland' },
    { text: 'Sliders', href: 'index.html#before-after' },
    { text: 'Timeline', href: 'timeline.html#timelines' }
  ]
});


renderHero('#hero', {
  title: 'Welcome to Our Sesquicentennial Planning Demos',
  subtitle: 'A collection of custom components and other experiments designed for Texas A&M’s 150th anniversary web presence.',
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
    description: 'Explore a map of our campus and uncover buildings and places that shaped Texas A&M\'s first 150 years',
    button: {
        text: 'Explore',
        href: '#aggieland'
    }
  },
  {
    icon: '🎚️',
    title: 'Before and After Sliders',
    description: 'A set of interactive sliders that let you compare historic and modern views of campus buildings, landmarks, and other images',
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
      href: '#timeline-high'
    }
  },
]

renderCardGrid('#feature-cards', featureCards);


renderContentBlock('#aggieland', {
  image: 'images/aggieland.png',
  imageAlt: 'A screenshot of the Aggieland Map',
  title: 'Explore Our Building History',
  description: `
    <p>An interactive timeline-based map invites users to discover the rich history of Texas A&M University’s campus. The component reveals how the campus has transformed over time, connecting past and present through dynamic visual storytelling.</p>
  `,
  imagePosition: 'right',
  background: 'white',
  button: {
    text: 'Visit Aggieland Through Time',
    href: 'https://innovation.library.tamu.edu/aggieland/',
    type: 'secondary'
  }
});


renderTextContent('#using-map', {
  title: 'Using Aggieland Through Time',
  subtitle: 'Existing Features and Future Elements',
  content: `
    <p>The <a href="https://innovation.library.tamu.edu/aggieland" target="_blank">Aggieland Through Time</a> 
    component lets users explore the history of the buildings across campus using either an interactive map or a 
    traditional text search.</p>

    <h2>Key Features</h2>
    <p>Each historic building is represented by many images taken over time. Users can view all historic images and even share
    there favorite images through persistent linking with the <em>Share</em> button.</p>
    
    <a href="https://innovation.library.tamu.edu/aggieland/works/academic-building?iiif-content=JTdCJTIyJTQwY29udGV4dCUyMiUzQSUyMmh0dHAlM0ElMkYlMkZpaWlmLmlvJTJGYXBpJTJGcHJlc2VudGF0aW9uJTJGMyUyRmNvbnRleHQuanNvbiUyMiUyQyUyMmlkJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZ0YW11bGliLWRjLWxhYnMuZ2l0aHViLmlvJTJGMTUwdGgtcmV3cml0ZSUyRndvcmtzJTJGYWNhZGVtaWMtYnVpbGRpbmclMkZjb250ZW50LXN0YXRlJTIyJTJDJTIydHlwZSUyMiUzQSUyMkFubm90YXRpb24lMjIlMkMlMjJtb3RpdmF0aW9uJTIyJTNBJTVCJTIyY29udGVudFN0YXRlJTIyJTVEJTJDJTIydGFyZ2V0JTIyJTNBJTdCJTIyaWQlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnRhbXVsaWItZGMtbGFicy5naXRodWIuaW8lMkZzZXNxdWljZW50ZW5uaWFsLW1hbmlmZXN0cyUyRmJ1aWxkaW5nX2hpc3RvcnklMkZBY2FkZW1pY19CdWlsZGluZyUyRmNhbnZhcyUyRjMwJTIyJTJDJTIydHlwZSUyMiUzQSUyMkNhbnZhcyUyMiUyQyUyMnBhcnRPZiUyMiUzQSU1QiU3QiUyMmlkJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZ0YW11bGliLWRjLWxhYnMuZ2l0aHViLmlvJTJGc2VzcXVpY2VudGVubmlhbC1tYW5pZmVzdHMlMkZidWlsZGluZ19oaXN0b3J5JTJGQWNhZGVtaWNfQnVpbGRpbmcuanNvbiUyMiUyQyUyMnR5cGUlMjIlM0ElMjJNYW5pZmVzdCUyMiU3RCU1RCU3RCU3RA" target="_blank">
    <figure>
        <img src="images/share.png">
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
       link-url="https://library.tamu.edu"
       link-text="TAMU Libraries Before and After Slider"
       favicon-url="https://library.tamu.edu/favicon.ico"
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
       link-url="https://library.tamu.edu"
       link-text="TAMU Libraries Before and After Slider"
       favicon-url="https://library.tamu.edu/favicon.ico"
       style="height: 650px;"
      >
      </before-after>
  `,
    width: 'medium',
    centerTitle: false
});

// Link to unused timeline -- clean
renderTimeline('#timelines', "timeline_data.json");

// Link to Timeline as a Content Block
renderContentBlock('#timeline-high', {
  image: 'images/timeline.png',
  imageAlt: 'A screenshot of our Sample Timeline',
  title: 'Explore our Timeline Component',
  description: `
    <p>Explore 150 years of Texas A&M history through this interactive timeline, highlighting the milestones, achievements, and stories that shaped the university. Journey through key moments and discover how Aggie traditions and innovations evolved over time.</p>
  `,
  imagePosition: 'left',
  background: 'gray',
  button: {
    text: 'Visit Aggieland Through Time',
    href: 'timeline.html',
    type: 'secondary'
  }
});

renderContentBlock('#handwritten', {
  image: 'images/handwritten-text.png',
  imageAlt: 'A screenshot of our Hand Written Text Recognition',
  title: 'Performing Handwritten Text Recognition',
  description: `
    <p>
    As part of Texas A&M’s 150th anniversary, discover how we are leveraging emerging AI transcription methods to make handwritten documents more accessible and searchable.</p>
  `,
  imagePosition: 'right',
  background: 'white',
  button: {
    text: 'Explore our Use of Handwritten Text Recognition',
    href: 'handwritten.html',
    type: 'secondary'
  }
});

renderCTASection('#cta', {
  title: '',
  description: '',
  button: {
    text: 'View Documentation',
    href: '#',
    target: '_blank'
  },
  background: 'gradient',
  size: 'large'
});


renderTextContent('#graveyard', {
  title: '🪦 Graveyard',
  subtitle: 'This section contains components that were explored but ultimately discontinued.',
  content: `
    <h3>Building History Timeline</h3>
    <p>The building history timeline allows users to view images of campus in chronological order.</p>
  `,
  width: 'medium',
  centerTitle: false
});


renderFooter('#footer', {
  text: '© Texas A&M University Libraries',
  links: [
    { text: 'Documentation', href: 'COMPONENTS.md' },
    { text: 'Example Page', href: 'index.html' },
    { text: 'GitHub', href: '#' }
  ]
});

renderModal('#building-timeline', {
    image: 'images/building-history.png',
    imageAlt: 'Click to view Building History Timeline',
    iframeUrl: 'https://jamesmisson.github.io/iiif-timeline/?c=https://tamulib-dc-labs.github.io/sesquicentennial-manifests/collections.json',
    title: 'Building History Timeline',
    size: 'fullscreen'
  });

renderAggieViewer('#display-cole4',
    'https://api-pre.library.tamu.edu/iiif-service/fedora/presentation/bb/97/f2/3e/bb97f23e-803a-4bd6-8406-06802623554c/cole-papers_objects/4',
    { showTitle: true }
  );

renderAggieScroll('#scroll',
    'https://api-pre.library.tamu.edu/iiif-service/fedora/presentation/bb/97/f2/3e/bb97f23e-803a-4bd6-8406-06802623554c/cole-papers_objects/4',
    { showTitle: true }
  );
