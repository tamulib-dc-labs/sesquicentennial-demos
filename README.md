# Sesquicentennial Demos Site

An interactive collection highlighting the custom-designed UI elements powering Texas A&M's 150th anniversary web presence.

## Getting Started

### Using Reusable Components

This project includes a complete component system for building Texas A&M themed pages. See [COMPONENTS.md](COMPONENTS.md) for full documentation.

**Quick example:**

```javascript
import './components/components.css';
import { renderNavbar, renderHero, renderFooter } from './components/index.js';

renderNavbar('#navbar', {
  title: 'My Site',
  links: [{ text: 'Home', href: '/' }]
});

renderHero('#hero', {
  title: 'Welcome to Texas A&M',
  subtitle: 'Building the future, one Aggie at a time'
});
```


