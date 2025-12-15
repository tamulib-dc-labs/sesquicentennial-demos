import './components/components.css';
import {
  renderNavbar,
  renderHero,
  renderCardGrid,
  renderFooter,
  renderTimeline
} from './components/index.js';




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