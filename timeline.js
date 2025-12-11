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
  renderTimeline
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
  subtitle: 'An interactive collection highlighting the custom-designed UI elements powering Texas A&M’s 150th anniversary web presence.',
  button: {
    text: 'Scroll to Explore',
    href: '#feature-cards',
    large: true
  }
});

renderTimeline('#timelines', `${import.meta.env.BASE_URL}data/timeline_data.json`);

renderCardGrid('#feature-cards', featureCards);

