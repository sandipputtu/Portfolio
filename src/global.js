import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Import CSS custom properties */
  @import url('./styles/variables.css');
  @import url('./styles/utilities.css');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    /* Enable smooth scrolling */
    scroll-behavior: smooth;
    /* Prevent font size inflation on mobile */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    /* Ensure minimum font size on mobile */
    font-size: clamp(14px, 2vw, 16px);
    /* Improve text rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Prevent horizontal overflow */
    overflow-x: hidden;
    /* Set base line height */
    line-height: 1.5;
  }

  /* Ensure images are responsive by default */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Ensure buttons and inputs have minimum touch target size on mobile */
  @media (max-width: 767px) {
    button,
    input[type="button"],
    input[type="submit"],
    input[type="reset"],
    a {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
