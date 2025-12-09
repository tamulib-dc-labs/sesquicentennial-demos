/**
 * Creates a content block component with image and text side-by-side
 * @param {Object} options - Configuration options
 * @param {string} options.image - Image URL or path
 * @param {string} options.imageAlt - Alt text for the image
 * @param {string} options.title - Content block title
 * @param {string} options.description - Content description (supports HTML)
 * @param {string} options.imagePosition - 'left' or 'right' (default: 'left')
 * @param {Object} options.button - Optional button config {text: string, href: string, type: string}
 * @param {string} options.background - Background style ('white', 'light', 'maroon')
 * @returns {string} HTML string for the content block
 */
export function createContentBlock({
  image = '',
  imageAlt = '',
  title = '',
  description = '',
  imagePosition = 'left',
  button = null,
  background = 'white'
} = {}) {
  const buttonHTML = button ?
    `<a href="${button.href}" class="btn btn-${button.type || 'primary'}" style="margin-top: 1.5rem;">${button.text}</a>`
    : '';

  const imageHTML = image ?
    `<div class="content-block-image">
      <img src="${image}" alt="${imageAlt}" />
    </div>`
    : '';

  const textHTML = `
    <div class="content-block-text">
      ${title ? `<h2 class="content-block-title">${title}</h2>` : ''}
      <div class="content-block-description">${description}</div>
      ${buttonHTML}
    </div>
  `;

  const contentOrder = imagePosition === 'right'
    ? `${textHTML}${imageHTML}`
    : `${imageHTML}${textHTML}`;

  return `
    <div class="content-block content-block-${background} content-block-image-${imagePosition}">
      <div class="content-block-inner">
        ${contentOrder}
      </div>
    </div>
  `;
}

/**
 * Renders content block into a DOM element
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Content block configuration options
 */
export function renderContentBlock(selector, options) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = createContentBlock(options);
  }
}
