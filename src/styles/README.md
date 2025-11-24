# Responsive Infrastructure

This directory contains the responsive design utilities and configuration for the portfolio application.

## Files

### `breakpoints.js`

Defines breakpoint constants and media query strings for responsive design.

**Usage:**

```javascript
import { BREAKPOINTS, MEDIA_QUERIES } from "./styles/breakpoints";

// Use in JavaScript
if (window.innerWidth >= BREAKPOINTS.tablet) {
  // Tablet or larger
}

// Use with window.matchMedia
const isDesktop = window.matchMedia(MEDIA_QUERIES.desktop).matches;
```

### `mixins.js`

Styled-components mixins for responsive styling.

**Usage:**

```javascript
import styled from "styled-components";
import { media, container, touchTarget } from "./styles/mixins";

const Container = styled.div`
  ${container()}

  ${media.tablet`
    padding: 2rem;
  `}
`;

const Button = styled.button`
  ${touchTarget}
`;
```

### `utilities.css`

Utility CSS classes for common responsive patterns.

**Usage:**

```jsx
<div className="container container-lg">
  <div className="grid-responsive">
    <div className="hide-mobile">Desktop only content</div>
    <img src="..." className="img-responsive" alt="..." />
  </div>
</div>
```

### `variables.css`

CSS custom properties for consistent responsive values.

**Usage:**

```css
.my-component {
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  border-radius: var(--radius-md);
}
```

## Hooks

### `useMediaQuery(query)`

Hook to detect if a media query matches.

**Usage:**

```javascript
import { useMediaQuery } from "./hooks/useMediaQuery";

function MyComponent() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return <div>{isDesktop ? "Desktop view" : "Mobile view"}</div>;
}
```

### `useViewport()`

Hook to get current viewport information.

**Usage:**

```javascript
import { useViewport } from "./hooks/useViewport";

function MyComponent() {
  const { width, isMobile, isTablet, isDesktop, breakpoint } = useViewport();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Breakpoint: {breakpoint}</p>
      {isMobile && <MobileMenu />}
      {isDesktop && <DesktopMenu />}
    </div>
  );
}
```

## Breakpoints

- **Mobile Small**: 320px - 480px
- **Mobile Large**: 481px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px - 1440px
- **Large Desktop**: 1441px+

## Best Practices

1. **Mobile-First**: Always write styles for mobile first, then add media queries for larger screens
2. **Touch Targets**: Ensure interactive elements are at least 44x44px on mobile
3. **Fluid Typography**: Use `clamp()` or the `fluidType` mixin for responsive text
4. **Responsive Images**: Always use `max-width: 100%` and `height: auto`
5. **Container Max-Width**: Limit content width on large screens (1200px default)
6. **Accessibility**: Always include focus styles and respect `prefers-reduced-motion`

## Examples

### Responsive Container

```javascript
import styled from "styled-components";
import { container, media } from "./styles/mixins";

const PageContainer = styled.div`
  ${container()}
  
  ${media.tablet`
    padding-top: 2rem;
  `}
  
  ${media.desktop`
    padding-top: 3rem;
  `}
`;
```

### Responsive Grid

```javascript
import styled from "styled-components";
import { responsiveGrid } from "./styles/mixins";

const Grid = styled.div`
  ${responsiveGrid(1, 2, 3)}
`;
```

### Conditional Rendering

```javascript
import { useViewport } from "./hooks/useViewport";

function Navigation() {
  const { isMobile } = useViewport();

  return isMobile ? <MobileNav /> : <DesktopNav />;
}
```
