// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

/**
 * Theme options
 * @typedef {('light'|'dark'|'system')} ThemeOption
 */

/**
 * Custom hook for managing theme
 * @returns {{ theme: ThemeOption, setTheme: function, isDarkMode: boolean }}
 */
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage
    return localStorage.getItem('theme') || 'system';
  });
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply theme whenever it changes
  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
    
    // Check if should apply dark mode
    const shouldApplyDark = 
      theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Apply dark class to html element
    if (shouldApplyDark) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, [theme]);
  
  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);
  
  return { theme, setTheme, isDarkMode };
};

export default useTheme;