# React + Vite + Tailwind CSS v4 Setup Guide

## 🚀 Quick Setup (Copy-Paste Commands)

### 1. Create Vite React Project

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

### 2. Install Dependencies

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
```

### 3. Configure Tailwind CSS

Create `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Create `postcss.config.js`:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 4. Add Tailwind to CSS

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Start Development

```bash
npm run dev
```

## ✅ That's it! Your setup is complete.

## 🔍 What Each File Does

- **`vite.config.js`**: Vite configuration (keep default React plugin)
- **`tailwind.config.js`**: Tailwind content scanning paths
- **`postcss.config.js`**: CSS processing with Tailwind
- **`src/index.css`**: Tailwind CSS imports
- **`src/main.jsx`**: Imports your CSS (don't change)

## ⚠️ Common Mistakes to Avoid

1. **Don't use both Vite plugin AND PostCSS** - Choose one approach
2. **Don't forget content paths** in `tailwind.config.js`
3. **Don't import CSS in components** - Import in `main.jsx`
4. **Don't use old v3 syntax** - Stick with `@tailwind` directives

## 🧪 Test It Works

Add this to `src/App.jsx`:

```jsx
function App() {
  return (
    <div className="text-3xl font-bold text-blue-500">Hello Tailwind!</div>
  );
}
```

If you see blue, large, bold text - it's working! 🎉
