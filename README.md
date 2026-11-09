# ComponentKit — React Component Library

A reusable UI component library built with **React and Vite**, featuring a clean, responsive component showcase for buttons, cards, and modal dialogs.

## ✨ Features

- Reusable React components
- Multiple Button variants and sizes
- Flexible Card component
- Interactive Modal component
- ESC-key modal closing
- Responsive layout for desktop, tablet, and mobile
- Component usage examples
- Clean and consistent UI design
- Component-focused documentation
- Semantic HTML structure
- CSS variables for consistent styling

## 🧩 Components

### Button

The Button component supports different visual variants and sizes.

**Variants:**

- Primary
- Secondary
- Outline
- Danger

**Sizes:**

- Small
- Medium
- Large

**Example:**

```jsx
import Button from "./components/Button";

<Button variant="primary" size="medium">
  Get Started
</Button>
```

### Card

The Card component provides a reusable content container.

**Supported props:**

- `title`
- `description`
- `icon`
- `children`
- `action`

**Example:**

```jsx
import Card from "./components/Card";

<Card
  icon="✦"
  title="Reusable"
  description="Build once and reuse across different screens."
  action={
    <Button variant="outline" size="small">
      Learn more
    </Button>
  }
/>
```

### Modal

The Modal component provides an interactive dialog for focused user actions.

**Supported props:**

- `isOpen`
- `title`
- `children`
- `onClose`
- `footer`

**Example:**

```jsx
import Modal from "./components/Modal";

<Modal
  isOpen={isOpen}
  title="Confirm Action"
  onClose={() => setIsOpen(false)}
>
  Are you sure you want to continue?
</Modal>
```

## 📁 Project Structure

```text
component-library-ui/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Modal.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── eslint.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd component-library-ui
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173/
```

## 🛠️ Technology Stack

- **React** — Component-based UI development
- **Vite** — Fast development and build tooling
- **JavaScript (ES6+)** — Application logic
- **CSS3** — Responsive styling and layout
- **ESLint** — Code quality and consistency

## 📱 Responsive Design

The interface is designed to adapt to different screen sizes.

Responsive behavior includes:

- Desktop sidebar navigation
- Mobile-friendly navigation
- Responsive component grids
- Flexible button layouts
- Mobile modal sizing
- Responsive typography and spacing

## 🎯 Learning Outcomes

This project helped demonstrate:

- How to create reusable React components
- Passing data through component props
- Managing UI state with `useState`
- Handling component lifecycle behavior with `useEffect`
- Building reusable modal interactions
- Creating responsive layouts with CSS
- Organizing a React project into reusable component files
- Documenting component usage for future developers

## 📸 Screenshots

Add screenshots of the completed application here after capturing the final UI.

Recommended screenshots:

1. Component library overview
2. Button component showcase
3. Card component showcase
4. Modal interaction

## 👤 Author

**Lalit Kumar Sah**

Built as part of a Week 3 component library UI development task.

## 📄 License

This project is created for educational and portfolio purposes.