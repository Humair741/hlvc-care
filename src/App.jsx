// src/App.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { APP_NAME, APP_DESCRIPTION } from './constants';
import { useIsMobile } from './hooks';
import { Button, ThemeToggle } from './components';

const App = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="py-12 bg-gradient-to-r from-primary-600 to-secondary-600 relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white font-display">
            {APP_NAME}
          </h1>
          <p className="mt-2 text-lg text-white/90">
            {APP_DESCRIPTION}
          </p>
        </div>
      </header>
      
      <main className="container py-8">
        <section className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 animate-fade-in transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Project Setup Complete</h2>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              The HLVC Care project has been scaffolded with industry-standard best practices:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>React with Vite for fast development</li>
              <li>Tailwind CSS v4 for utility-first styling</li>
              <li>ESLint and Prettier for code quality</li>
              <li>Folder structure following domain-driven design</li>
              <li>Git hooks with Husky for pre-commit checks</li>
              <li>Dark mode support with custom theme toggle</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              {isMobile 
                ? 'You are viewing this on a mobile device.' 
                : 'You are viewing this on a desktop or tablet device.'}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>
        </section>
        
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Ready to start building the Header/Navbar component.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
