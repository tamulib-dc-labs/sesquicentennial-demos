import './components/components.css';
import {
  renderNavbar,
  renderHero,
  renderCardGrid,
  renderFooter,
  renderTimeline
} from './components/index.js';
import timelineData from './data/timeline_data.json';


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

renderTimeline('#timelines', timelineData);

renderCardGrid('#feature-cards', featureCards);

renderFooter('#footer', {
  text: '© Texas A&M University Libraries',
  links: [
    { text: 'Documentation', href: 'COMPONENTS.md' },
    { text: 'Example Page', href: 'index.html' },
    { text: 'GitHub', href: '#' }
  ]
});