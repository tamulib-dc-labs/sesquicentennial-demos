/**
 * Clover IIIF wrapper components
 * Provides easy integration of Samvera's Clover IIIF Viewer and Scroll components
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Viewer from '@samvera/clover-iiif/viewer';
import Scroll from '@samvera/clover-iiif/scroll';

/**
 * Renders Clover IIIF Viewer component
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Clover Viewer configuration options
 * @param {string} options.iiifContent - IIIF Manifest URL or object
 * @param {Object} options.customTheme - Custom theme configuration (optional)
 * @param {boolean} options.showTitle - Show manifest title (default: true)
 * @param {boolean} options.showIIIFBadge - Show IIIF badge (default: true)
 * @param {boolean} options.showInformationToggle - Show information panel toggle (default: true)
 * @param {string} options.canvasIdCallback - Callback for canvas changes (optional)
 *
 * @example
 * renderCloverViewer('#viewer', {
 *   iiifContent: 'https://example.com/manifest.json',
 *   showTitle: true,
 *   customTheme: {
 *     colors: {
 *       primary: '#500000'
 *     }
 *   }
 * });
 */
export function renderCloverViewer(selector, options = {}) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`Clover Viewer: Container not found: ${selector}`);
    return;
  }

  const {
    iiifContent,
    customTheme = {},
    showTitle = true,
    showIIIFBadge = true,
    showInformationToggle = true,
    canvasIdCallback,
    ...otherProps
  } = options;

  if (!iiifContent) {
    console.error('Clover Viewer: iiifContent is required');
    container.innerHTML = '<div style="padding: 2rem; text-align: center; color: #666;">Error: IIIF content URL is required</div>';
    return;
  }

  // Clear container
  container.innerHTML = '';

  // Create React root and render
  const root = createRoot(container);

  root.render(
    React.createElement(Viewer, {
      iiifContent,
      customTheme,
      options: {
        showTitle,
        showIIIFBadge,
        showInformationToggle,
        canvasIdCallback,
        ...otherProps
      }
    })
  );

  // Return cleanup function
  return () => root.unmount();
}

/**
 * Renders Clover IIIF Scroll component
 * @param {string} selector - CSS selector for the container element
 * @param {Object} options - Clover Scroll configuration options
 * @param {string} options.iiifContent - IIIF Manifest URL or object
 * @param {Object} options.customTheme - Custom theme configuration (optional)
 * @param {string} options.backgroundColor - Background color (optional)
 * @param {number} options.height - Height in pixels (default: 600)
 * @param {boolean} options.showTitle - Show manifest title (default: true)
 * @param {boolean} options.showIIIFBadge - Show IIIF badge (default: true)
 * @param {string} options.canvasIdCallback - Callback for canvas changes (optional)
 *
 * @example
 * renderCloverScroll('#scroll', {
 *   iiifContent: 'https://example.com/manifest.json',
 *   height: 800,
 *   showTitle: true,
 *   customTheme: {
 *     colors: {
 *       primary: '#500000'
 *     }
 *   }
 * });
 */
export function renderCloverScroll(selector, options = {}) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`Clover Scroll: Container not found: ${selector}`);
    return;
  }

  const {
    iiifContent,
    customTheme = {},
    backgroundColor,
    height = 600,
    showTitle = true,
    showIIIFBadge = true,
    canvasIdCallback,
    ...otherProps
  } = options;

  if (!iiifContent) {
    console.error('Clover Scroll: iiifContent is required');
    container.innerHTML = '<div style="padding: 2rem; text-align: center; color: #666;">Error: IIIF content URL is required</div>';
    return;
  }

  // Clear container and set height
  container.innerHTML = '';
  container.style.height = `${height}px`;

  // Create React root and render
  const root = createRoot(container);

  root.render(
    React.createElement(Scroll, {
      iiifContent,
      customTheme,
      options: {
        backgroundColor,
        showTitle,
        showIIIFBadge,
        canvasIdCallback,
        ...otherProps
      }
    })
  );

  // Return cleanup function
  return () => root.unmount();
}

/**
 * Creates a default Aggie-themed configuration for Clover components
 * @returns {Object} Custom theme object with Texas A&M colors
 */
export function getAggieTheme() {
  return {
    colors: {
      primary: '#500000',        // Texas A&M Maroon
      primaryMuted: '#651414',   // Lighter maroon
      secondary: '#ffffff',
      accent: '#500000',
      accentMuted: '#651414'
    },
    fonts: {
      display: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }
  };
}

/**
 * Convenience function to render Clover Viewer with Aggie theme
 * @param {string} selector - CSS selector for the container element
 * @param {string} iiifContent - IIIF Manifest URL or object
 * @param {Object} additionalOptions - Additional Clover options (optional)
 */
export function renderAggieViewer(selector, iiifContent, additionalOptions = {}) {
  return renderCloverViewer(selector, {
    iiifContent,
    customTheme: getAggieTheme(),
    ...additionalOptions
  });
}

/**
 * Convenience function to render Clover Scroll with Aggie theme
 * @param {string} selector - CSS selector for the container element
 * @param {string} iiifContent - IIIF Manifest URL or object
 * @param {Object} additionalOptions - Additional Clover options (optional)
 */
export function renderAggieScroll(selector, iiifContent, additionalOptions = {}) {
  return renderCloverScroll(selector, {
    iiifContent,
    customTheme: getAggieTheme(),
    ...additionalOptions
  });
}
