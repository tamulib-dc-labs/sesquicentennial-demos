import FlexSearch from 'flexsearch';

/**
 * Creates a timeline component with decade-based navigation and search
 * @param {Object} options - Configuration options
 * @param {string} options.title - The timeline title
 * @param {string} options.subtitle - Optional subtitle
 * @param {Array} options.decades - Array of decade objects
 * @param {boolean} options.enableSearch - Enable search functionality (default: true)
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
export function createTimeline({ title = 'Timeline', subtitle = '', decades = [], enableSearch = true } = {}) {
  const timelineId = `timeline-${Math.random().toString(36).substr(2, 9)}`;

  // Search box HTML
  const searchHTML = enableSearch ? `
    <div class="timeline-search">
      <input
        type="text"
        class="timeline-search-input"
        placeholder="Search timeline events..."
        aria-label="Search timeline events"
      />
      <button class="timeline-search-clear" aria-label="Clear search" style="display: none;">✕</button>
    </div>
  ` : '';

  // Generate decade tabs with "All" tab for search results
  const allTabHTML = enableSearch ? `
    <button
      class="timeline-tab timeline-tab-all"
      data-decade="all"
      aria-selected="false"
      role="tab"
      style="display: none;"
    >
      Search Results
    </button>
  ` : '';

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
    const eventsHTML = decade.events.map((event, eventIndex) => {
      const eventId = `event-${decade.year}-${eventIndex}`;
      const imageHTML = event.image ? `
        <div class="timeline-card-image">
          ${event.link ? `<a href="${event.link}" target="_blank" rel="noopener noreferrer">` : ''}
            <img src="${event.image}" alt="${event.imageAlt || event.title}" />
          ${event.link ? `</a>` : ''}
        </div>
      ` : '';

      return `
        <div class="timeline-card" data-event-id="${eventId}" data-decade="${decade.year}">
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

  // Search results section
  const searchResultsHTML = enableSearch ? `
    <div
      class="timeline-section timeline-search-results"
      data-decade="all"
      role="tabpanel"
      style="display: none;"
    >
      <div class="timeline-cards"></div>
      <div class="timeline-no-results" style="display: none;">
        <p>No events found matching your search.</p>
      </div>
    </div>
  ` : '';

  return `
    <div class="timeline" id="${timelineId}">
      <div class="timeline-header">
        <h2 class="timeline-title">${title}</h2>
        ${subtitle ? `<p class="timeline-subtitle">${subtitle}</p>` : ''}
      </div>

      ${searchHTML}

      <div class="timeline-tabs" role="tablist">
        ${allTabHTML}
        ${tabsHTML}
      </div>

      <div class="timeline-content">
        ${searchResultsHTML}
        ${sectionsHTML}
      </div>
    </div>
  `;
}

/**
 * Creates a search index from timeline data
 * @param {Array} decades - Array of decade objects
 * @returns {Object} FlexSearch index and event mapping
 */
function createSearchIndex(decades) {
  const index = new FlexSearch.Document({
    document: {
      id: 'id',
      index: ['title', 'description', 'date'],
      store: ['title', 'description', 'date', 'decadeYear', 'eventIndex', 'image', 'imageAlt', 'link']
    },
    tokenize: 'forward',
    cache: true
  });

  const events = [];
  let eventId = 0;

  decades.forEach(decade => {
    decade.events.forEach((event, eventIndex) => {
      const doc = {
        id: eventId++,
        title: event.title,
        description: event.description,
        date: event.date,
        decadeYear: decade.year,
        eventIndex: eventIndex,
        image: event.image || '',
        imageAlt: event.imageAlt || '',
        link: event.link || ''
      };
      index.add(doc);
      events.push(doc);
    });
  });

  return { index, events };
}

/**
 * Attaches event listeners to timeline tabs and search
 * @param {Element} element - The timeline container element
 * @param {Object} searchData - Search index and events (optional)
 */
function attachTimelineListeners(element, searchData = null) {
  const tabs = element.querySelectorAll('.timeline-tab');
  const sections = element.querySelectorAll('.timeline-section');

  // Tab switching
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

  // Search functionality
  if (searchData) {
    const searchInput = element.querySelector('.timeline-search-input');
    const searchClear = element.querySelector('.timeline-search-clear');
    const searchResultsSection = element.querySelector('.timeline-search-results');
    const searchResultsCards = searchResultsSection?.querySelector('.timeline-cards');
    const noResults = searchResultsSection?.querySelector('.timeline-no-results');
    const allTab = element.querySelector('.timeline-tab-all');

    if (searchInput && searchData) {
      let searchTimeout;

      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        // Show/hide clear button
        if (searchClear) {
          searchClear.style.display = query ? 'block' : 'none';
        }

        // Debounce search
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          if (query.length >= 2) {
            performSearch(query, searchData, element, {
              searchResultsSection,
              searchResultsCards,
              noResults,
              allTab,
              tabs,
              sections
            });
          } else if (query.length === 0) {
            clearSearch({ searchResultsSection, allTab, tabs, sections });
          }
        }, 300);
      });

      // Clear button
      if (searchClear) {
        searchClear.addEventListener('click', () => {
          searchInput.value = '';
          searchClear.style.display = 'none';
          clearSearch({ searchResultsSection, allTab, tabs, sections });
          searchInput.focus();
        });
      }
    }
  }
}

/**
 * Performs a search and displays results
 */
function performSearch(query, searchData, element, components) {
  const { searchResultsSection, searchResultsCards, noResults, allTab, tabs, sections } = components;

  // Perform search
  const results = searchData.index.search(query, { limit: 100, enrich: true });

  // Combine results from different fields
  const uniqueResults = new Map();
  results.forEach(fieldResults => {
    fieldResults.result.forEach(item => {
      if (!uniqueResults.has(item.id)) {
        uniqueResults.set(item.id, item.doc);
      }
    });
  });

  const resultDocs = Array.from(uniqueResults.values());

  if (resultDocs.length > 0) {
    // Show results
    const resultsHTML = resultDocs.map(event => {
      const eventId = `event-${event.decadeYear}-${event.eventIndex}`;
      const imageHTML = event.image ? `
        <div class="timeline-card-image">
          ${event.link ? `<a href="${event.link}" target="_blank" rel="noopener noreferrer">` : ''}
            <img src="${event.image}" alt="${event.imageAlt || event.title}" />
          ${event.link ? `</a>` : ''}
        </div>
      ` : '';

      return `
        <div class="timeline-card" data-event-id="${eventId}" data-decade="${event.decadeYear}">
          <div class="timeline-card-date">${event.date}</div>
          ${imageHTML}
          <div class="timeline-card-content">
            <h3 class="timeline-card-title">${event.title}</h3>
            <div class="timeline-card-description">${event.description}</div>
          </div>
        </div>
      `;
    }).join('');

    searchResultsCards.innerHTML = resultsHTML;
    noResults.style.display = 'none';
  } else {
    searchResultsCards.innerHTML = '';
    noResults.style.display = 'block';
  }

  // Switch to search results tab
  if (allTab) {
    allTab.style.display = 'block';
    allTab.textContent = `Search Results (${resultDocs.length})`;

    tabs.forEach(t => {
      t.classList.remove('timeline-tab-active');
      t.setAttribute('aria-selected', 'false');
    });
    allTab.classList.add('timeline-tab-active');
    allTab.setAttribute('aria-selected', 'true');
  }

  sections.forEach(section => {
    section.classList.remove('timeline-section-active');
  });
  searchResultsSection.style.display = 'block';
  searchResultsSection.classList.add('timeline-section-active');
}

/**
 * Clears search and returns to normal view
 */
function clearSearch(components) {
  const { searchResultsSection, allTab, tabs, sections } = components;

  // Hide search results
  if (searchResultsSection) {
    searchResultsSection.style.display = 'none';
    searchResultsSection.classList.remove('timeline-section-active');
  }

  // Hide "All" tab
  if (allTab) {
    allTab.style.display = 'none';
    allTab.classList.remove('timeline-tab-active');
    allTab.setAttribute('aria-selected', 'false');
  }

  // Activate first regular tab
  const firstRegularTab = Array.from(tabs).find(t => !t.classList.contains('timeline-tab-all'));
  if (firstRegularTab) {
    firstRegularTab.classList.add('timeline-tab-active');
    firstRegularTab.setAttribute('aria-selected', 'true');

    const decade = firstRegularTab.dataset.decade;
    sections.forEach(section => {
      if (section.dataset.decade === decade && !section.classList.contains('timeline-search-results')) {
        section.classList.add('timeline-section-active');
      } else {
        section.classList.remove('timeline-section-active');
      }
    });
  }
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

  // Create search index if search is enabled
  const enableSearch = timelineData.enableSearch !== false;
  const searchData = enableSearch ? createSearchIndex(timelineData.decades) : null;

  attachTimelineListeners(element, searchData);
}
