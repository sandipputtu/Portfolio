/**
 * Responsive CSS Mixins for styled-components
 * These can be used with styled-components' css helper
 */

import { css } from "styled-components";
import { BREAKPOINTS } from "./breakpoints";

/**
 * Media query mixins for styled-components
 */
export const media = {
  mobileSmall: (...args) => css`
    @media (min-width: ${BREAKPOINTS.mobileSmall}px) {
      ${css(...args)}
    }
  `,

  mobileLarge: (...args) => css`
    @media (min-width: ${BREAKPOINTS.mobileLarge}px) {
      ${css(...args)}
    }
  `,

  tablet: (...args) => css`
    @media (min-width: ${BREAKPOINTS.tablet}px) {
      ${css(...args)}
    }
  `,

  desktop: (...args) => css`
    @media (min-width: ${BREAKPOINTS.desktop}px) {
      ${css(...args)}
    }
  `,

  largeDesktop: (...args) => css`
    @media (min-width: ${BREAKPOINTS.largeDesktop}px) {
      ${css(...args)}
    }
  `,

  // Max-width queries
  mobileOnly: (...args) => css`
    @media (max-width: ${BREAKPOINTS.mobileLarge - 1}px) {
      ${css(...args)}
    }
  `,

  tabletOnly: (...args) => css`
    @media (min-width: ${BREAKPOINTS.mobileLarge}px) and (max-width: ${BREAKPOINTS.desktop -
      1}px) {
      ${css(...args)}
    }
  `,

  desktopUp: (...args) => css`
    @media (min-width: ${BREAKPOINTS.desktop}px) {
      ${css(...args)}
    }
  `,

  // Custom range
  between: (min, max) => (...args) => css`
    @media (min-width: ${min}px) and (max-width: ${max}px) {
      ${css(...args)}
    }
  `,

  // Orientation
  portrait: (...args) => css`
    @media (orientation: portrait) {
      ${css(...args)}
    }
  `,

  landscape: (...args) => css`
    @media (orientation: landscape) {
      ${css(...args)}
    }
  `,

  // Touch devices
  touch: (...args) => css`
    @media (hover: none) and (pointer: coarse) {
      ${css(...args)}
    }
  `,

  // Hover-capable devices
  hover: (...args) => css`
    @media (hover: hover) and (pointer: fine) {
      ${css(...args)}
    }
  `,
};

/**
 * Responsive container mixin
 */
export const container = (maxWidth = BREAKPOINTS.maxContent) => css`
  width: 100%;
  max-width: ${maxWidth}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.tablet`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  `}

  ${media.desktop`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`;

/**
 * Fluid typography mixin
 */
export const fluidType = (minSize, maxSize, minVw = 320, maxVw = 1200) => css`
  font-size: clamp(
    ${minSize}rem,
    ${minSize}rem + (${maxSize} - ${minSize}) *
      ((100vw - ${minVw}px) / (${maxVw} - ${minVw})),
    ${maxSize}rem
  );
`;

/**
 * Touch target mixin - ensures minimum 44x44px touch targets
 */
export const touchTarget = css`
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Responsive image mixin
 */
export const responsiveImage = css`
  max-width: 100%;
  height: auto;
  display: block;
`;

/**
 * Focus visible mixin for accessibility
 */
export const focusVisible = (color = "currentColor") => css`
  &:focus {
    outline: 2px solid ${color};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${color};
    outline-offset: 2px;
  }
`;

/**
 * Visually hidden but accessible to screen readers
 */
export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

/**
 * Responsive grid mixin
 */
export const responsiveGrid = (
  mobileColumns = 1,
  tabletColumns = 2,
  desktopColumns = 3
) => css`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(${mobileColumns}, 1fr);

  ${media.tablet`
    grid-template-columns: repeat(${tabletColumns}, 1fr);
    gap: 1.5rem;
  `}

  ${media.desktop`
    grid-template-columns: repeat(${desktopColumns}, 1fr);
    gap: 2rem;
  `}
`;

/**
 * Responsive spacing mixin
 */
export const responsiveSpacing = (
  property = "padding",
  mobile = 1,
  tablet = 1.5,
  desktop = 2
) => css`
  ${property}: ${mobile}rem;

  ${media.tablet`
    ${property}: ${tablet}rem;
  `}

  ${media.desktop`
    ${property}: ${desktop}rem;
  `}
`;

/**
 * Truncate text with ellipsis
 */
export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/**
 * Line clamp mixin
 */
export const lineClamp = (lines = 2) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
