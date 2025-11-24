/**
 * Breakpoint configuration for responsive design
 * Following mobile-first approach
 */

export const BREAKPOINTS = {
  mobileSmall: 320,
  mobileLarge: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
  maxContent: 1200,
};

export const TOUCH_TARGET_MIN = 44; // pixels
export const BASE_FONT_SIZE_MOBILE = 14; // pixels
export const MIN_CONTRAST_RATIO = 4.5;

/**
 * Media query strings for use in styled-components or CSS
 */
export const MEDIA_QUERIES = {
  mobileSmall: `(min-width: ${BREAKPOINTS.mobileSmall}px)`,
  mobileLarge: `(min-width: ${BREAKPOINTS.mobileLarge}px)`,
  tablet: `(min-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
  largeDesktop: `(min-width: ${BREAKPOINTS.largeDesktop}px)`,

  // Max-width queries for specific ranges
  mobileOnly: `(max-width: ${BREAKPOINTS.mobileLarge - 1}px)`,
  tabletOnly: `(min-width: ${BREAKPOINTS.mobileLarge}px) and (max-width: ${
    BREAKPOINTS.desktop - 1
  }px)`,
  desktopOnly: `(min-width: ${BREAKPOINTS.desktop}px)`,

  // Orientation queries
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)",

  // Touch device detection
  touch: "(hover: none) and (pointer: coarse)",
  mouse: "(hover: hover) and (pointer: fine)",
};

/**
 * Helper function to create min-width media queries
 */
export const minWidth = (px) => `(min-width: ${px}px)`;

/**
 * Helper function to create max-width media queries
 */
export const maxWidth = (px) => `(max-width: ${px}px)`;

/**
 * Helper function to create range media queries
 */
export const between = (minPx, maxPx) =>
  `(min-width: ${minPx}px) and (max-width: ${maxPx}px)`;
