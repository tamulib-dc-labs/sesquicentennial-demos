/**
 * Creates a card component
 * @param {Object} options - Configuration options
 * @param {string} options.icon - Icon/emoji for the card
 * @param {string} options.title - Card title
 * @param {string} options.description - Card description
 * @param {string} options.href - Optional link URL
 * @param {Object} options.button - Optional button {text: string, href: string}
 * @returns {string} HTML string for the card
 */
export function createCard({
  icon = '',
  title = '',
  description = '',
  href = null,
  button = null
} = {}) {
  const buttonHTML = button ?
    `<a href="${button.href}" class="btn btn-primary" style="margin-top: 1rem;">${button.text}</a>`
    : '';

  const cardContent = `
    <div class="card">
      ${icon ? `<div class="card-icon">${icon}</div>` : ''}
      <h3 class="card-title">${title}</h3>
      <p class="card-text">${description}</p>
      ${buttonHTML}
    </div>
  `;

  return href ?
    `<a href="${href}" style="text-decoration: none; color: inherit;">${cardContent}</a>`
    : cardContent;
}

/**
 * Creates a grid of cards
 * @param {Array} cards - Array of card configuration objects
 * @param {Object} options - Grid options
 * @param {string} options.columns - CSS grid columns (default: auto-fit)
 * @returns {string} HTML string for the card grid
 */
export function createCardGrid(cards, { columns = 'repeat(auto-fit, minmax(250px, 1fr))' } = {}) {
  const cardsHTML = cards.map(card => createCard(card)).join('');
  return `
    <div class="card-grid" style="grid-template-columns: ${columns};">
      ${cardsHTML}
    </div>
  `;
}

/**
 * Renders card grid into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Array} cards - Array of card configurations
 * @param {Object} options - Grid options
 */
export function renderCardGrid(selector, cards, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createCardGrid(cards, options);
  }
}
