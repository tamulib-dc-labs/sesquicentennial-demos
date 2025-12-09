/**
 * Creates a highlight/callout component for emphasizing content
 * @param {Object} options - Configuration options
 * @param {string} options.title - Highlight title
 * @param {string} options.content - Highlight content (supports HTML)
 * @param {string} options.icon - Optional icon/emoji
 * @param {string} options.type - 'info' (blue accent), 'success' (green), 'warning' (yellow), 'maroon' (default)
 * @param {Object} options.button - Optional button {text: string, href: string}
 * @returns {string} HTML string for the highlight
 */
export function createHighlight({
  title = '',
  content = '',
  icon = '',
  type = 'maroon',
  button = null
} = {}) {
  const buttonHTML = button ?
    `<a href="${button.href}" class="btn btn-primary" style="margin-top: 1rem;">${button.text}</a>`
    : '';

  return `
    <div class="highlight highlight-${type}">
      ${icon ? `<div class="highlight-icon">${icon}</div>` : ''}
      <div class="highlight-content">
        ${title ? `<h3 class="highlight-title">${title}</h3>` : ''}
        <div class="highlight-text">${content}</div>
        ${buttonHTML}
      </div>
    </div>
  `;
}

/**
 * Renders highlight into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Highlight configuration options
 */
export function renderHighlight(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createHighlight(options);
  }
}
