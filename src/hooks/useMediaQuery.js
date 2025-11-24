import { useState, useEffect } from "react";

/**
 * Custom hook to detect if a media query matches
 * @param {string} query - Media query string (e.g., "(min-width: 768px)")
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    // Check if window is available (SSR safety)
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    // Check if window is available
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(query);

    // Update state if initial value is different
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }

    // Create event listener
    const handler = (event) => setMatches(event.matches);

    // Add listener (using deprecated addListener for older browser support)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handler);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handler);
      }
    };
  }, [query, matches]);

  return matches;
};

export default useMediaQuery;
