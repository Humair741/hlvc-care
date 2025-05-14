// src/hooks/useMediaQuery.js
import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants';

/**
 * Custom hook for responsive design
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Modern approach - newer browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } 
    // Fallback for older browsers
    else {
      mediaQuery.addListener(handleChange);
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }
  }, [query]);

  return matches;
};

/**
 * Breakpoint-specific media query hooks
 */
export const useIsMobile = () => useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`);
export const useIsTablet = () => useMediaQuery(`(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`);
export const useIsDesktop = () => useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);

export default useMediaQuery;