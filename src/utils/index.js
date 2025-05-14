// src/utils/index.js

/**
 * Utility functions for the application
 */

/**
 * Formats a date to a human-readable string
 * @param {Date|string} date - The date to format
 * @param {Object} options - Formatting options
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };
  
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat('en-CA', defaultOptions).format(dateObj);
};

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param {string} str - The string to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated string
 */
export const truncateString = (str, length = 100) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length).trim()}...`;
};

/**
 * Generates a unique ID
 * @returns {string} - A unique ID
 */
export const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

/**
 * Debounces a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Formats a number as currency
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: 'CAD')
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount, currency = 'CAD') => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency,
  }).format(amount);
};