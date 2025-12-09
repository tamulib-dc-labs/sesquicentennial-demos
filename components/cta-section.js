/**
 * Creates a Call-to-Action (CTA) section component
 * @param {Object} options - Configuration options
 * @param {string} options.title - CTA title
 * @param {string} options.description - CTA description
 * @param {Object} options.button - Button config {text: string, href: string, target: string}
 * @param {string} options.background - 'gradient' (default) or 'solid'
 * @param {string} options.size - 'default' or 'large'
 * @returns {string} HTML string for the CTA section
 */
export function createCTASection({
  title = 'Ready to Get Started?',
  description = '',
  button = { text: 'Get Started', href: '#' },
  background = 'gradient',
  size = 'default'
} = {}) {
  const backgroundClass = background === 'gradient' ? 'cta-section' : 'cta-section cta-section-solid';
  const sizeClass = size === 'large' ? 'cta-section-large' : '';
  const target = button.target ? `target="${button.target}"` : '';

  return `
    <section class="${backgroundClass} ${sizeClass}">
      <div class="cta-content">
        <h2 class="cta-title">${title}</h2>
        ${description ? `<p class="cta-description">${description}</p>` : ''}
        <a href="${button.href}" class="btn btn-primary btn-large" ${target}>${button.text}</a>
      </div>
    </section>
  `;
}

/**
 * Renders CTA section into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - CTA section configuration options
 */
export function renderCTASection(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createCTASection(options);
  }
}
