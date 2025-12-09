/**
 * Creates a hero section component
 * @param {Object} options - Configuration options
 * @param {string} options.title - Hero title
 * @param {string} options.subtitle - Hero subtitle/description
 * @param {Object} options.button - Button config {text: string, href: string, onClick: function}
 * @param {string} options.background - Optional background style (gradient, solid, or custom CSS)
 * @returns {string} HTML string for the hero section
 */
export function createHero({
  title = 'Welcome',
  subtitle = '',
  button = null,
  background = 'gradient'
} = {}) {
  const backgroundClass = background === 'gradient' ? 'hero' : 'hero hero-solid';
  const buttonHTML = button ?
    `<a href="${button.href || '#'}" class="btn btn-primary ${button.large ? 'btn-large' : ''}" ${button.onClick ? `onclick="${button.onClick}"` : ''}>${button.text}</a>`
    : '';

  return `
    <header class="${backgroundClass}">
      <div class="hero-content">
        <h1 class="hero-title">${title}</h1>
        ${subtitle ? `<p class="hero-subtitle">${subtitle}</p>` : ''}
        ${buttonHTML}
      </div>
    </header>
  `;
}

/**
 * Renders hero section into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Hero configuration options
 */
export function renderHero(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createHero(options);
  }
}
