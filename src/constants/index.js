// src/constants/index.js

/**
 * Application-wide constants
 */

// App information
export const APP_NAME = 'HLVC Care';
export const APP_DESCRIPTION = 'Wellness, Fitness, and Transformation Tracking Platform';
export const APP_VERSION = '0.1.0';

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Diet Plans', path: '/diet-plans' },
  { label: 'Smoothies', path: '/smoothies' },
  { label: 'Transformations', path: '/transformations' },
  { label: 'Contact', path: '/contact' },
];

// Breakpoints (matching Tailwind's default breakpoints)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Theme colors (for programmatic access)
export const COLORS = {
  primary: {
    50: 'var(--color-primary-50)',
    100: 'var(--color-primary-100)',
    200: 'var(--color-primary-200)',
    300: 'var(--color-primary-300)',
    400: 'var(--color-primary-400)',
    500: 'var(--color-primary-500)',
    600: 'var(--color-primary-600)',
    700: 'var(--color-primary-700)',
    800: 'var(--color-primary-800)',
    900: 'var(--color-primary-900)',
    950: 'var(--color-primary-950)',
  },
  secondary: {
    50: 'var(--color-secondary-50)',
    100: 'var(--color-secondary-100)',
    200: 'var(--color-secondary-200)',
    300: 'var(--color-secondary-300)',
    400: 'var(--color-secondary-400)',
    500: 'var(--color-secondary-500)',
    600: 'var(--color-secondary-600)',
    700: 'var(--color-secondary-700)',
    800: 'var(--color-secondary-800)',
    900: 'var(--color-secondary-900)',
    950: 'var(--color-secondary-950)',
  },
};