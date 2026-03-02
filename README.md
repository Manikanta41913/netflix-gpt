# 🎬 Netflix GPT

A modern React application built with Vite and styled with Tailwind CSS. This project serves as a foundation for building Netflix-inspired applications with future AI/GPT integrations.

## ✨ Features

- ⚡ **Fast Development**: Built with Vite for lightning-fast development and hot module replacement
- 🎨 **Modern UI**: Styled with Tailwind CSS v4 for beautiful, responsive designs
- ⚛️ **React 19**: Latest React features with modern hooks and components
- 🔧 **ESLint**: Code quality and consistency with ESLint configuration
- 📱 **Responsive**: Mobile-first design approach

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Manikanta41913/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your app running!

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Language**: JavaScript (ES6+) with JSX
- **Code Quality**: ESLint

## 📁 Project Structure

```
netflix-gpt/
├── public/                 # Static assets (currently empty)
├── src/
│   ├── assets/            # Images and other assets
│   ├── App.jsx            # Main App component
│   ├── App.css            # App-specific styles (currently unused)
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── TAILWIND_SETUP_GUIDE.md # Tailwind setup reference
└── README.md              # Project documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Manikanta**

- GitHub: [@Manikanta41913](https://github.com/Manikanta41913)

---

⭐ **Star this repo** if you found it helpful!

# Nerflix GPT

-- configured Tailwind

#Features
-Login/Sign UP page

- Redirect to Browse Page
- Browse
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestion
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

---

## 📚 React Concepts Used in This Project

Quick reference guide for React concepts implemented in Netflix GPT.

### 1. **useState Hook**

```jsx
const [isSignInForm, setIsSignInForm] = useState(true);
```

- Creates state variables that trigger re-renders when changed
- Returns: `[currentValue, setterFunction]`
- **When to use**: For data that affects the UI (form mode, error messages, etc.)
- **Re-render behavior**: Component re-renders every time state changes

### 2. **useRef Hook**

```jsx
const email = useRef(null);
// Access value: email.current.value
```

- Creates a reference to DOM elements or values that persist across renders
- **Does NOT cause re-renders** when value changes
- **When to use**: For input fields (avoid re-render on every keystroke), accessing DOM elements
- **Difference from useState**: useRef doesn't trigger re-renders

### 3. **Conditional Rendering**

```jsx
{
  !isSignInForm && <input placeholder="Full Name" />;
}
{
  isSignInForm ? "Sign In" : "Sign Up";
}
```

- Show/hide elements based on conditions
- `&&` operator: Render if condition is true
- Ternary `? :`: Choose between two options

### 4. **Event Handling**

```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page refresh
  // Handle form logic
};
```

- `e.preventDefault()`: Stops default browser behavior (form submission, link navigation)
- Event object `e` contains info about the event

### 5. **Component Structure**

```jsx
const Login = () => {
  // Logic here
  return <div>JSX here</div>;
};
export default Login;
```

- Functional components (modern React)
- Return JSX (HTML-like syntax)
- Export for use in other files

### 6. **Props**

```jsx
// Parent: <Header />
// Child receives: props
import Header from "./Header";
```

- Pass data from parent to child components
- One-way data flow (parent → child)

### 7. **React Router**

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> },
]);
```

- Navigate between pages without page refresh
- Single Page Application (SPA) routing

### 8. **Form Handling**

```jsx
// Controlled component (useState)
<input value={email} onChange={(e) => setEmail(e.target.value)} />

// Uncontrolled component (useRef)
<input ref={emailRef} />
```

- **Controlled**: React controls the value (uses state)
- **Uncontrolled**: DOM controls the value (uses ref)

### 9. **Validation Pattern**

```jsx
const message = checkValidateData(email, password);
if (message) {
  setErrorMessage(message); // Show error
}
```

- Separate validation logic into utility functions
- Return error message or null

### 10. **Ternary Operator**

```jsx
!isSignInForm ? name.current.value : null;
```

- Shorthand for if-else
- Format: `condition ? valueIfTrue : valueIfFalse`

---

## 🔑 Key Learnings

### useState vs useRef

| Feature              | useState                               | useRef                |
| -------------------- | -------------------------------------- | --------------------- |
| Triggers re-render   | ✅ Yes                                 | ❌ No                 |
| Use for UI updates   | ✅ Yes                                 | ❌ No                 |
| Use for input values | ❌ Causes re-render on every keystroke | ✅ Better performance |
| Access value         | `value`                                | `ref.current.value`   |

### When Component Re-renders

1. State changes (`useState`)
2. Props change
3. Parent component re-renders
4. Context value changes

**useRef does NOT cause re-renders!**

### Common Patterns

- **Toggle state**: `setState(!state)`
- **Conditional rendering**: `{condition && <Component />}`
- **Prevent form submit**: `e.preventDefault()`
- **Access input value**: `ref.current.value`

---
