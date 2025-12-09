/**
 * Creates a footer component
 * @param {Object} options - Configuration options
 * @param {string} options.text - Footer text/copyright
 * @param {Array} options.links - Array of link objects [{text: string, href: string}]
 * @returns {string} HTML string for the footer
 */
export function createFooter({
  text = '© Texas A&M University Libraries',
  links = []
} = {}) {
  const linksHTML = links.length > 0 ? `
    <div class="footer-links">
      ${links.map(link => `<a href="${link.href}">${link.text}</a>`).join(' | ')}
    </div>
  ` : '';

  return `
    <footer class="footer">
      <div class="footer-content">
        ${linksHTML}
        <p>${text}</p>
      </div>
    </footer>
  `;
}

/**
 * Renders footer into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Footer configuration options
 */
export function renderFooter(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createFooter(options);
  }
}
