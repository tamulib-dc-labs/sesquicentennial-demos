
import './components/components.css';
import {
    renderNavbar,
    renderFooter,
    renderAggieViewer, renderCardGrid,
    renderModal
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

renderAggieViewer('#ted-franklin',
    'https://avalon-pre.library.tamu.edu/media_objects/bz60cw37t/manifest',
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

const featureCards = [
  {
    icon: '🧠',
    title: 'WhisperX on GRACE',
    description: 'Explore the open-source workflows we use to generate captions, subtitles, and transcripts at scale using high-performance computing.',
    button: {
      text: 'View the Code',
      href: 'https://github.com/tamulib-dc-labs/WhisperX-transcribe-automation'
    }
  },
  {
    icon: '🎛️',
    title: 'Edge Grant Reviewer',
    description: 'See how we review, evaluate, and clean up transcription output produced on GRACE and other HPRC systems.',
    button: {
      text: 'Explore the Reviewer',
      href: 'https://tamulib-dc-labs.github.io/edge-grant-reviewer/'
    }
  },
  {
    icon: '🚀',
    title: 'About the GRACE Cluster',
    description: 'Learn more about the GRACE high-performance computing cluster and how Texas A&M researchers can access it.',
    button: {
      text: 'Learn About GRACE',
      href: 'https://hprc.tamu.edu/kb/User-Guides/Grace/Access/'
    }
  },
]

renderCardGrid('#feature-cards', featureCards);

renderModal('#ramp-external', {
    image: 'images/avalon-example.png',
    imageAlt: 'View An Oral History',
    iframeUrl: 'https://avalon-pre.library.tamu.edu/media_objects/bz60cw37t',
    title: 'View a Completed Oral History',
    size: 'fullscreen'
  });