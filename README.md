# Netflix GPT

A Netflix clone with GPT-powered movie recommendations built with React, Firebase, and Redux Toolkit.

## 🚀 Features

- ✅ User Authentication (Sign Up/Sign In/Sign Out)
- ✅ Firebase Authentication Integration
- ✅ Redux Toolkit for State Management
- ✅ React Router with Protected Routes
- ✅ Responsive UI with Tailwind CSS
- ✅ User Profile with Photo
- ✅ Session Persistence with onAuthStateChanged
- ✅ Automatic Route Protection
- ✅ Optimized Header (Single Instance)
- ✅ Memory Leak Prevention
- ✅ TMDB API Integration
- ✅ Custom Hooks Pattern
- ✅ Movie Data Management with Redux
- ✅ Component-Based Architecture (MainContainer, SecondaryContainer)
- ✅ Browse Page Structure

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Authentication:** Firebase Auth
- **Routing:** React Router v6
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Manikanta41913/netflix-gpt.git

# Navigate to project directory
cd netflix-gpt

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Configuration

Create a Firebase project and add your configuration to `src/utils/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};
```

## 📁 Project Structure

```
netflix-gpt/
├── src/
│   ├── Components/
│   │   ├── Header.jsx       # Navigation header with user profile
│   │   ├── Login.jsx        # Authentication form
│   │   ├── Browse.jsx       # Main browse page container
│   │   ├── Body.jsx         # Router + Layout + Auth listener
│   │   ├── MainContainer.jsx    # Main movie display (hero section)
│   │   ├── VideoBackground.jsx  # Video background component
│   │   ├── VideoTitle.jsx       # Video title overlay
│   │   └── SecondaryContainer.jsx  # Movie lists section
│   ├── hooks/
│   │   └── useNowPlayingMovies.js  # Custom hook for fetching movies
│   ├── utils/
│   │   ├── firebase.js      # Firebase configuration
│   │   ├── Validate.js      # Form validation
│   │   ├── constants.js     # App constants (URLs, images, API config)
│   │   ├── appStore.js      # Redux store configuration
│   │   ├── userSlice.js     # User state slice
│   │   └── movieSlice.js    # Movie state slice
│   ├── App.jsx              # Redux Provider wrapper
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind imports
├── public/
├── vercel.json              # Vercel SPA routing config
├── package.json
└── README.md
```

## 🎯 Key Features Explained

### Authentication Flow

1. User signs up/signs in via Firebase
2. `onAuthStateChanged` listener in Layout component detects auth changes
3. User data stored in Redux for global access
4. Automatic redirect based on auth state (logged in → /browse, logged out → /)
5. Session persists across page refreshes

### Route Protection

- Auth listener runs in Layout component (inside RouterProvider)
- Logged-in users accessing `/` → Redirected to `/browse`
- Non-logged-in users accessing `/browse` → Redirected to `/`
- Direct URL access is protected
- Works on page refresh

### Layout Pattern

- Layout component wraps all routes using `<Outlet />`
- Header stays mounted (doesn't re-render on navigation)
- Only page content changes when navigating
- Auth listener and navigation logic centralized in Layout

### State Management

- Redux Toolkit for global state
- User slice manages authentication state
- `onAuthStateChanged` keeps Redux in sync with Firebase
- Single source of truth for user data

### Performance Optimizations

- Header component mounts once using Layout + Outlet pattern
- Proper useEffect cleanup prevents memory leaks
- Conditional rendering based on auth state
- Optimized re-renders
- Image fallback for broken profile photos

## 🚀 Deployment

The app is deployed on Vercel with automatic deployments from the main branch.

**Live Demo:** [https://netflix-gpt-pi-orpin.vercel.app](https://netflix-gpt-pi-orpin.vercel.app)

### Deploy Your Own

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎓 Learning Concepts

This project demonstrates:

- React Hooks (useState, useRef, useEffect, useSelector, useDispatch, useNavigate)
- Custom Hooks pattern for reusable logic
- Redux Toolkit state management with multiple slices
- Firebase Authentication with onAuthStateChanged
- React Router v7 with nested routes and Layout pattern
- Protected routes with automatic redirects
- Memory leak prevention with cleanup functions
- Conditional rendering and image fallback handling
- Form validation with regex
- API integration with TMDB
- Async/await for data fetching
- Tailwind CSS styling
- Vite build tool
- Vercel deployment with SPA routing configuration

## 🐛 Known Issues & Solutions

### Vercel Deployment

- ✅ Fixed: Added `vercel.json` with SPA routing configuration
- All routes now work correctly on Vercel (direct access, refresh, navigation)

### Profile Photos

- ✅ Fixed: Added image fallback in Header component
- Broken photoURLs automatically show default avatar
- New signups use photo from constants.js

## 🔜 Upcoming Features

- [x] TMDB API integration for movie data
- [x] Browse page with movie display structure
- [ ] Display movie trailers as background
- [ ] Movie title and description overlay
- [ ] Multiple movie lists (Popular, Top Rated, Upcoming)
- [ ] GPT-powered movie recommendations
- [ ] Movie details modal
- [ ] User watchlist
- [ ] Search functionality
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Manikanta**

- GitHub: [@Manikanta41913](https://github.com/Manikanta41913)

## 🙏 Acknowledgments

- Netflix for design inspiration
- Firebase for authentication services
- Vercel for hosting
- Redux Toolkit for state management
