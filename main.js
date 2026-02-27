import './components/components.css';
import {
  renderNavbar,
  renderHero,
  renderContentBlock,
  renderCardGrid,
  renderTextContent,
  renderFooter,
  renderTimeline,
  renderModal,
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
        <img src="images/share.png" alt="An Image Showcasing the Share Feature">
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
       before="https://iiif.archive.org/image/iiif/3/glasscock-old%2Fglasscock-OLD.jpg/full/max/0/default.jpg"
       after="https://iiif.archive.org/image/iiif/3/glasscock-new%2Fglasscock-NEW.jpg/full/max/0/default.jpg"
       before-label="Glasscock - Old"
       after-label="Glasscock - New"
       start-position="30"
       link-url="https://library.tamu.edu"
       link-text="Cushing Memorial Library"
       favicon-url="https://library.tamu.edu/favicon.ico"
       style="height: 400px;"
    >
    </before-after>
    
    <br/>
    
    <before-after
       before="https://iiif.archive.org/image/iiif/3/monumenton-new-main%2FMonumentonNewMain-After.jpg/full/max/0/default.jpg"
       after="https://iiif.archive.org/image/iiif/3/monumenton-new-main%2FMonumentonNewMain-Before.jpg/full/max/0/default.jpg"
       before-label="Old Main"
       after-label="New Main"
       start-position="50"
       link-url="https://library.tamu.edu"
       link-text="Cushing Memorial Library"
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
       before="https://iiif.archive.org/image/iiif/3/halbouty-NEW%2Fhalbouty-OLD.jpg/full/max/0/default.jpg"
       after="https://iiif.archive.org/image/iiif/3/halbouty-NEW%2Fhalbouty-NEW.jpg/full/max/0/default.jpg"
       before-label="Halbouty - Old"
       after-label="Halbouty - New"
       start-position="30"
       link-url="https://library.tamu.edu"
       link-text="Cushing Memorial Library"
       favicon-url="https://library.tamu.edu/favicon.ico"
       style="height: 700px;"
      >
      </before-after>
    
    <h3> 
        Opacity Slider
    </h3>
      <p>Drag the bar at the bottom to blend between the two stacked images.</p>
      <opacity-compare
       before="https://iiif.archive.org/image/iiif/3/glasscock-old%2Fglasscock-OLD.jpg/full/max/0/default.jpg"
       after="https://iiif.archive.org/image/iiif/3/glasscock-new%2Fglasscock-NEW.jpg/full/max/0/default.jpg"
       before-label="Before"
       after-label="After"
       start-opacity="0"
       style="height: 400px; display: block; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 3rem;"
      >
      </opacity-compare>
      
    <h3> 
        Opacity Slider with Auto Play
    </h3>
      <p>If autoplay is enabled, we can pass a time and autoplay the slider.</p>
      <opacity-compare
       before="https://iiif.archive.org/image/iiif/3/glasscock-old%2Fglasscock-OLD.jpg/full/max/0/default.jpg"
       after="https://iiif.archive.org/image/iiif/3/glasscock-new%2Fglasscock-NEW.jpg/full/max/0/default.jpg"
       before-label="Before"
       after-label="After"
       start-opacity="0"
       style="height: 400px; display: block; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 3rem;"
       auto-play
       auto-play-stop-on-interact="true"
       auto-play
       auto-play-speed="10000"
      >
      
  `,
    width: 'medium',
    centerTitle: false
});

renderTimeline('#timelines', "timeline_data.json");

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

renderContentBlock('#oralhistories', {
  image: 'images/open-avalon.png',
  imageAlt: 'A screenshot of an OralHistory',
  title: 'Unlocking Oral Histories at Scale',
  description: `
    <p>Texas A&M University Libraries is committed to making our rich collections of oral histories and audiovisual materials more accessible to everyone. A key part of this work is creating captions, subtitles, and transcripts so that audio and video content can be searched, read, and used by a wider audience. Learn how we are using HPRC and Whisper X to generate these at scale.</p>
  `,
  imagePosition: 'left',
  background: 'white',
  button: {
    text: 'Learn More about our AV Work Using AI',
    href: 'oralhistories',
    type: 'secondary'
  }
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

// Show content once everything is loaded
document.body.classList.add('loaded');
