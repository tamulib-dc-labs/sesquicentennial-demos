/**
 * Creates a button component
 * @param {Object} options - Configuration options
 * @param {string} options.text - Button text
 * @param {string} options.href - Button link (creates <a> tag)
 * @param {string} options.onClick - onclick handler
 * @param {string} options.type - Button type (primary, secondary)
 * @param {boolean} options.large - Large button size
 * @param {string} options.className - Additional CSS classes
 * @returns {string} HTML string for the button
 */
export function createButton({
  text = 'Button',
  href = null,
  onClick = null,
  type = 'primary',
  large = false,
  className = ''
} = {}) {
  const classes = `btn btn-${type} ${large ? 'btn-large' : ''} ${className}`.trim();
  const onClickAttr = onClick ? `onclick="${onClick}"` : '';

  if (href) {
    return `<a href="${href}" class="${classes}" ${onClickAttr}>${text}</a>`;
  } else {
    return `<button class="${classes}" ${onClickAttr}>${text}</button>`;
  }
}
