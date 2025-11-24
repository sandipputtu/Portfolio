import { useState, useEffect } from "react";
import { BREAKPOINTS, MEDIA_QUERIES } from "../styles/breakpoints";
import { useMediaQuery } from "./useMediaQuery";

/**
 * Custom hook to get current viewport information
 * @returns {Object} Viewport information including breakpoint flags and dimensions
 */
export const useViewport = () => {
  const [dimensions, setDimensions] = useState(() => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return { width: 0, height: 0 };
  });

  // Use media queries to determine breakpoints
  const isMobileSmall = useMediaQuery(MEDIA_QUERIES.mobileOnly);
  const isTablet = useMediaQuery(MEDIA_QUERIES.tabletOnly);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);
  const isLargeDesktop = useMediaQuery(MEDIA_QUERIES.largeDesktop);

  // Derived flags
  const isMobile = dimensions.width < BREAKPOINTS.tablet;
  const isTouch = useMediaQuery(MEDIA_QUERIES.touch);
  const isPortrait = useMediaQuery(MEDIA_QUERIES.portrait);
  const isLandscape = useMediaQuery(MEDIA_QUERIES.landscape);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Add orientation change listener for mobile devices
    window.addEventListener("orientationchange", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return {
    // Dimensions
    width: dimensions.width,
    height: dimensions.height,

    // Breakpoint flags
    isMobileSmall,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,

    // Device characteristics
    isTouch,
    isPortrait,
    isLandscape,

    // Utility function to check if width is within range
    isWithinRange: (min, max) => {
      return dimensions.width >= min && dimensions.width <= max;
    },

    // Get current breakpoint name
    breakpoint: (() => {
      if (dimensions.width < BREAKPOINTS.mobileLarge) return "mobile-small";
      if (dimensions.width < BREAKPOINTS.tablet) return "mobile-large";
      if (dimensions.width < BREAKPOINTS.desktop) return "tablet";
      if (dimensions.width < BREAKPOINTS.largeDesktop) return "desktop";
      return "large-desktop";
    })(),
  };
};

export default useViewport;
