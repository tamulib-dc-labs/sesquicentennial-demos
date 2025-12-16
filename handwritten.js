import './components/components.css';
import {
  renderNavbar,
  renderFooter,
  renderAggieScroll,
  renderAggieViewer,
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

renderAggieViewer('#cole-papers-4',
    'https://tamulib-dc-labs.github.io/custom-iiif-manifests/manifests/cole-papers-4.json',
    { showTitle: true }
);

renderAggieScroll('#scroll2',
    'https://tamulib-dc-labs.github.io/custom-iiif-manifests/manifests/cole-papers-4.json',
    { showTitle: true }
);

renderFooter('#footer', {
  text: '© Texas A&M University Libraries',
  links: [
    { text: 'Documentation', href: 'COMPONENTS.md' },
    { text: 'Example Page', href: 'index.html' },
    { text: 'GitHub', href: '#' }
  ]
});