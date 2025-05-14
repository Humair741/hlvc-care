# HLVC Care - Wellness & Fitness Tracking Platform

A modern single-page application built with React and Tailwind CSS v4 for tracking wellness, fitness, and personal transformations.

![HLVC Care Banner](https://via.placeholder.com/1200x300/0ea5e9/FFFFFF?text=HLVC+Care)

## 🚀 Features

- **Modern Tech Stack**: React with Vite and Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with custom responsive hooks
- **Dark Mode Support**: System preference detection with manual toggle option
- **Component Library**: Reusable UI components with proper documentation
- **Code Quality**: ESLint and Prettier integration with Git hooks

## 🧰 Tech Stack

- **Frontend Framework**: React.js 18
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS v4
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Type Checking**: PropTypes
- **State Management**: React Context API (for theming)

## 📂 Project Structure

```
hlvc-care/
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/          # Images, icons, etc.
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Shared components (Button, etc.)
│   │   └── layout/      # Layout components
│   ├── constants/       # App constants and configuration
│   ├── features/        # Feature-specific components
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layout templates
│   └── utils/           # Utility functions
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── index.html           # Entry HTML file
└── package.json         # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/hlvc-care.git
   cd hlvc-care
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000`

## 🧪 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Run Prettier formatting

## 🌙 Dark Mode

HLVC Care includes a dark mode implementation using Tailwind CSS v4's custom variants:

- **System Preference**: Automatically uses the system's color scheme preference
- **Manual Toggle**: Allows users to override the system preference
- **Persistent**: Saves the user's preference in localStorage

## 🧩 Components

### Button

A versatile button component with various styles and sizes:

```jsx
<Button variant="primary" size="md">Primary Button</Button>
<Button variant="secondary" size="lg">Secondary Button</Button>
<Button variant="outline" size="sm">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
```

### ThemeToggle

A component for toggling between light and dark mode:

```jsx
<ThemeToggle />
```

## 📱 Responsive Design

The application uses custom hooks for responsive design:

```jsx
const isMobile = useIsMobile();
const isTablet = useIsTablet();
const isDesktop = useIsDesktop();
```

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)

---

