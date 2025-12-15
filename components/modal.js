/**
 * Creates an image modal component that opens an iframe or custom content
 * @param {Object} options - Configuration options
 * @param {string} options.image - The thumbnail image URL
 * @param {string} options.imageAlt - Alt text for the thumbnail image
 * @param {string} options.iframeUrl - URL for the iframe content (optional)
 * @param {string} options.content - Custom HTML content instead of iframe (optional)
 * @param {string} options.title - Modal title (optional)
 * @param {string} options.size - Modal size: 'small', 'medium', 'large', 'fullscreen' (default: 'large')
 * @param {string} options.imageClass - Additional CSS classes for the thumbnail image (optional)
 * @returns {string} HTML string for the modal trigger
 */
export function createModal({
  image,
  imageAlt = 'Click to open',
  iframeUrl = '',
  content = '',
  title = '',
  size = 'large',
  imageClass = ''
} = {}) {
  const modalId = `modal-${Math.random().toString(36).substr(2, 9)}`;

  const modalContent = iframeUrl
    ? `<iframe src="${iframeUrl}" class="modal-iframe" allowfullscreen></iframe>`
    : content;

  return `
    <div class="modal-container">
      <img
        src="${image}"
        alt="${imageAlt}"
        class="modal-trigger-image ${imageClass}"
        data-modal-id="${modalId}"
        role="button"
        tabindex="0"
        aria-label="Open modal: ${imageAlt}"
      />

      <div class="modal-overlay" id="${modalId}" aria-hidden="true">
        <div class="modal-dialog modal-${size}" role="dialog" aria-modal="true" aria-labelledby="${modalId}-title">
          <button class="modal-close" aria-label="Close modal">×</button>
          ${title ? `<h2 class="modal-title" id="${modalId}-title">${title}</h2>` : ''}
          <div class="modal-content">
            ${modalContent}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders modal into a DOM element and attaches event listeners
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Modal configuration options
 */
export function renderModal(selector, options) {
  const element = document.querySelector(selector);
  if (!element) return;

  element.innerHTML = createModal(options);
  attachModalListeners(element);
}

/**
 * Attaches event listeners to modal triggers and controls
 * @param {Element} container - The container element
 */
function attachModalListeners(container) {
  const trigger = container.querySelector('.modal-trigger-image');
  const modal = container.querySelector('.modal-overlay');
  const closeBtn = container.querySelector('.modal-close');
  const dialog = container.querySelector('.modal-dialog');

  if (!trigger || !modal) return;

  // Open modal on image click
  trigger.addEventListener('click', () => openModal(modal));

  // Open modal on Enter/Space key
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(modal);
    }
  });

  // Close modal on close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(modal));
  }

  // Close modal on overlay click (but not dialog click)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  // Prevent dialog clicks from closing modal
  if (dialog) {
    dialog.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal-active')) {
      closeModal(modal);
    }
  });
}

/**
 * Opens a modal
 * @param {Element} modal - The modal overlay element
 */
function openModal(modal) {
  modal.classList.add('modal-active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus the close button for accessibility
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    setTimeout(() => closeBtn.focus(), 100);
  }
}

/**
 * Closes a modal
 * @param {Element} modal - The modal overlay element
 */
function closeModal(modal) {
  modal.classList.remove('modal-active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Return focus to trigger
  const modalId = modal.id;
  const trigger = document.querySelector(`[data-modal-id="${modalId}"]`);
  if (trigger) {
    trigger.focus();
  }
}

/**
 * Creates multiple modals in a grid layout
 * @param {Array} modals - Array of modal configuration objects
 * @param {number} columns - Number of columns in grid (default: 3)
 * @returns {string} HTML string for modal grid
 */
export function createModalGrid(modals = [], columns = 3) {
  const modalsHTML = modals.map(modalConfig => createModal(modalConfig)).join('');

  return `
    <div class="modal-grid modal-grid-${columns}">
      ${modalsHTML}
    </div>
  `;
}

/**
 * Renders a grid of modals
 * @param {string} selector - CSS selector for the container element
 * @param {Array} modals - Array of modal configuration objects
 * @param {number} columns - Number of columns in grid
 */
export function renderModalGrid(selector, modals, columns = 3) {
  const element = document.querySelector(selector);
  if (!element) return;

  element.innerHTML = createModalGrid(modals, columns);

  // Attach listeners to all modals in the grid
  const containers = element.querySelectorAll('.modal-container');
  containers.forEach(container => attachModalListeners(container));
}
