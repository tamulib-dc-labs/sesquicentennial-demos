/**
 * Creates a section component
 * @param {Object} options - Configuration options
 * @param {string} options.id - Section ID
 * @param {string} options.title - Section title
 * @param {string} options.description - Section description
 * @param {string} options.content - HTML content for the section
 * @param {string} options.className - Additional CSS classes
 * @param {string} options.background - Background color (default, light, white)
 * @returns {string} HTML string for the section
 */
export function createSection({
  id = '',
  title = '',
  description = '',
  content = '',
  className = '',
  background = 'default'
} = {}) {
  const backgroundClass = {
    'default': '',
    'light': 'section-light',
    'white': 'section-white'
  }[background] || '';

  return `
    <section id="${id}" class="section ${className} ${backgroundClass}">
      <div class="container">
        ${title ? `
          <div class="section-header">
            <h2 class="section-title">${title}</h2>
            ${description ? `<p class="section-description">${description}</p>` : ''}
          </div>
        ` : ''}
        ${content}
      </div>
    </section>
  `;
}

/**
 * Renders section into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Section configuration options
 */
export function renderSection(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createSection(options);
  }
}
