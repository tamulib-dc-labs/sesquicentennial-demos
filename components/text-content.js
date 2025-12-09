/**
 * Creates a text-heavy content area component with proper typography
 * @param {Object} options - Configuration options
 * @param {string} options.title - Main title
 * @param {string} options.subtitle - Optional subtitle
 * @param {string} options.content - Main content (supports HTML)
 * @param {string} options.width - 'narrow', 'medium' (default), or 'wide'
 * @param {boolean} options.centerTitle - Center the title (default: false)
 * @returns {string} HTML string for the text content area
 */
export function createTextContent({
  title = '',
  subtitle = '',
  content = '',
  width = 'medium',
  centerTitle = false
} = {}) {
  const widthClass = `text-content-${width}`;
  const alignClass = centerTitle ? 'text-content-center' : '';

  return `
    <div class="text-content ${widthClass} ${alignClass}">
      ${title ? `<h1 class="text-content-title">${title}</h1>` : ''}
      ${subtitle ? `<p class="text-content-subtitle">${subtitle}</p>` : ''}
      <div class="text-content-body">
        ${content}
      </div>
    </div>
  `;
}

/**
 * Renders text content area into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Text content configuration options
 */
export function renderTextContent(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createTextContent(options);
  }
}
