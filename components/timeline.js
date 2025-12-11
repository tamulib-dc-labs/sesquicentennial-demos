/**
 * Creates a timeline component with decade-based navigation
 * @param {Object} options - Configuration options
 * @param {string} options.title - The timeline title
 * @param {string} options.subtitle - Optional subtitle
 * @param {Array} options.decades - Array of decade objects
 * @returns {string} HTML string for the timeline
 *
 * Decade object structure:
 * {
 *   label: '1970s',
 *   year: '1970',
 *   events: [
 *     {
 *       date: '1975',
 *       title: 'Event Title',
 *       description: 'Event description',
 *       image: 'path/to/image.jpg', // optional
 *       imageAlt: 'Image description', // optional
 *       link: 'https://example.com' // optional
 *     }
 *   ]
 * }
 */
export function createTimeline({ title = 'Timeline', subtitle = '', decades = [] } = {}) {
  const timelineId = `timeline-${Math.random().toString(36).substr(2, 9)}`;

  // Generate decade tabs
  const tabsHTML = decades.map((decade, index) => `
    <button
      class="timeline-tab ${index === 0 ? 'timeline-tab-active' : ''}"
      data-decade="${decade.year}"
      aria-selected="${index === 0 ? 'true' : 'false'}"
      role="tab"
    >
      ${decade.label}
    </button>
  `).join('');

  // Generate decade sections with event cards
  const sectionsHTML = decades.map((decade, index) => {
    const eventsHTML = decade.events.map(event => {
      const imageHTML = event.image ? `
        <div class="timeline-card-image">
          ${event.link ? `<a href="${event.link}" target="_blank" rel="noopener noreferrer">` : ''}
            <img src="${event.image}" alt="${event.imageAlt || event.title}" />
          ${event.link ? `</a>` : ''}
        </div>
      ` : '';

      return `
        <div class="timeline-card">
          <div class="timeline-card-date">${event.date}</div>
          ${imageHTML}
          <div class="timeline-card-content">
            <h3 class="timeline-card-title">${event.title}</h3>
            <div class="timeline-card-description">${event.description}</div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div
        class="timeline-section ${index === 0 ? 'timeline-section-active' : ''}"
        data-decade="${decade.year}"
        role="tabpanel"
      >
        <div class="timeline-cards">
          ${eventsHTML}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="timeline" id="${timelineId}">
      <div class="timeline-header">
        <h2 class="timeline-title">${title}</h2>
        ${subtitle ? `<p class="timeline-subtitle">${subtitle}</p>` : ''}
      </div>

      <div class="timeline-tabs" role="tablist">
        ${tabsHTML}
      </div>

      <div class="timeline-content">
        ${sectionsHTML}
      </div>
    </div>
  `;
}

/**
 * Attaches event listeners to timeline tabs
 * @param {Element} element - The timeline container element
 */
function attachTimelineListeners(element) {
  const tabs = element.querySelectorAll('.timeline-tab');
  const sections = element.querySelectorAll('.timeline-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const decade = tab.dataset.decade;

      // Update active tab
      tabs.forEach(t => {
        t.classList.remove('timeline-tab-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('timeline-tab-active');
      tab.setAttribute('aria-selected', 'true');

      // Update active section
      sections.forEach(section => {
        if (section.dataset.decade === decade) {
          section.classList.add('timeline-section-active');
        } else {
          section.classList.remove('timeline-section-active');
        }
      });
    });
  });
}

/**
 * Renders timeline into a DOM element and attaches event listeners
 * @param {string} selector - CSS selector for the container element
 * @param {Object|string} options - Timeline configuration options or path to JSON file
 * @returns {Promise<void>} Promise that resolves when timeline is rendered
 *
 * Usage with inline data:
 *   renderTimeline('#timeline', { title: 'My Timeline', decades: [...] })
 *
 * Usage with JSON file:
 *   renderTimeline('#timeline', 'data/timeline.json')
 *   or
 *   renderTimeline('#timeline', { dataUrl: 'data/timeline.json' })
 */
export async function renderTimeline(selector, options) {
  const element = document.querySelector(selector);
  if (!element) return;

  let timelineData;

  // Handle different input types
  if (typeof options === 'string') {
    // If options is a string, treat it as a JSON file path
    try {
      const response = await fetch(options);
      if (!response.ok) {
        throw new Error(`Failed to load timeline data: ${response.statusText}`);
      }
      timelineData = await response.json();
    } catch (error) {
      console.error('Error loading timeline JSON:', error);
      element.innerHTML = `<div class="timeline-error">Error loading timeline data</div>`;
      return;
    }
  } else if (options && options.dataUrl) {
    // If options has a dataUrl property, fetch from that URL
    try {
      const response = await fetch(options.dataUrl);
      if (!response.ok) {
        throw new Error(`Failed to load timeline data: ${response.statusText}`);
      }
      timelineData = await response.json();
    } catch (error) {
      console.error('Error loading timeline JSON:', error);
      element.innerHTML = `<div class="timeline-error">Error loading timeline data</div>`;
      return;
    }
  } else {
    // Otherwise use inline data
    timelineData = options;
  }

  element.innerHTML = createTimeline(timelineData);
  attachTimelineListeners(element);
}
