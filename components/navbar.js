/**
 * Creates a navigation bar component
 * @param {Object} options - Configuration options
 * @param {string} options.title - The brand title
 * @param {Array} options.links - Array of link objects [{text: string, href: string}]
 * @returns {string} HTML string for the navbar
 */
export function createNavbar({ title = 'Sesquicentennial Planning Demos', links = [] } = {}) {
  const linksHTML = links.map(link =>
    `<li><a href="${link.href}">${link.text}</a></li>`
  ).join('');

  return `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <h1>${title}</h1>
        </div>
        <ul class="nav-menu">
          ${linksHTML}
        </ul>
      </div>
    </nav>
  `;
}

/**
 * Renders navbar into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Navbar configuration options
 */
export function renderNavbar(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createNavbar(options);
  }
}
