/**
 * Aggie Theme Components
 * Reusable components for building Texas A&M themed pages
 */

export { createNavbar, renderNavbar } from './navbar.js';
export { createHero, renderHero } from './hero.js';
export { createCard, createCardGrid, renderCardGrid } from './card.js';
export { createSection, renderSection } from './section.js';
export { createButton } from './button.js';
export { createFooter, renderFooter } from './footer.js';
export { createContentBlock, renderContentBlock } from './content-block.js';
export { createCTASection, renderCTASection } from './cta-section.js';
export { createHighlight, renderHighlight } from './highlight.js';
export { createTextContent, renderTextContent } from './text-content.js';
export { createTimeline, renderTimeline } from './timeline.js';
export { createModal, renderModal, createModalGrid, renderModalGrid } from './modal.js';
export {
  renderCloverViewer,
  renderCloverScroll,
  renderAggieViewer,
  renderAggieScroll,
  getAggieTheme
} from './clover.js';

/**
 * Import all components and styles in one line:
 * import * as AggieComponents from './components/index.js';
 * import './components/components.css';
 */
