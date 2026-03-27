# 🎬 Netflix GPT

A production-ready Netflix clone featuring Firebase authentication, Redux state management, and real-time movie data from TMDB API. Built with React 19, Vite, and Tailwind CSS.

## 🚀 Live Demo

**[View Live App](https://netflix-gpt-pi-orpin.vercel.app)**

---

## ✨ Features

### 🔐 Authentication & Security

- Firebase Authentication with email/password
- Session persistence using `onAuthStateChanged` listener
- Protected routes with automatic redirects
- User profile with photo and display name
- Secure sign up/sign in/sign out flow
- Image fallback for broken profile photos

### 🎬 Movie Browsing

- Hero section with auto-playing YouTube trailers
- Mute/unmute controls for background video
- Four movie categories: Now Playing, Popular, Top Rated, Upcoming
- Horizontal scrolling movie lists
- Movie cards with poster images from TMDB
- Gradient overlay for better text readability
- Responsive video player (aspect-ratio based)

### 🛠️ Technical Implementation

- Custom React hooks for data fetching
- Redux Toolkit for centralized state management
- React Router v7 with Layout/Outlet pattern
- Memory leak prevention with proper cleanup functions
- Optimized re-renders using Layout pattern
- SPA routing configuration for deployment
- Tailwind CSS for responsive design
- Vite for fast development and optimized builds

---

## 🛠️ Tech Stack

| Category             | Technology                |
| -------------------- | ------------------------- |
| **Frontend**         | React 19 + Vite 7.3       |
| **Styling**          | Tailwind CSS 3.4          |
| **State Management** | Redux Toolkit 2.11        |
| **Authentication**   | Firebase Auth 12.10       |
| **Routing**          | React Router DOM 7.13     |
| **API**              | TMDB (The Movie Database) |
| **Deployment**       | Vercel + Firebase Hosting |

---

## 🏗️ Project Architecture

### Component Structure

```
src/
├── Components/
│   ├── Body.jsx              # Router setup + Auth listener
│   ├── Header.jsx            # Navigation bar with user profile
│   ├── Login.jsx             # Authentication forms
│   ├── Browse.jsx            # Main browse page
│   ├── MainContainer.jsx     # Hero section wrapper
│   ├── VideoBackground.jsx   # YouTube trailer embed
│   ├── VideoTitle.jsx        # Movie title overlay
│   ├── SecondaryContainer.jsx # Movie lists container
│   ├── MovieList.jsx         # Horizontal scrolling list
│   └── MovieCard.jsx         # Individual movie poster
├── hooks/
│   ├── useNowPlayingMovies.jsx
│   ├── usePopularMovies.jsx
│   ├── useTopRatedMovies.jsx
│   ├── useUpcomingMovies.jsx
│   └── useMovieTrailer.jsx
├── utils/
│   ├── appStore.js           # Redux store configuration
│   ├── userSlice.js          # User authentication state
│   ├── movieSlice.js         # Movie data state
│   ├── firebase.js           # Firebase configuration
│   ├── constants.js          # API keys and URLs
│   └── Validate.js           # Form validation logic
├── App.jsx                   # Redux Provider wrapper
└── main.jsx                  # Application entry point
```

### Data Flow

```
1. User Authentication
   Firebase Auth → onAuthStateChanged → Redux (userSlice) → UI Updates

2. Movie Data
   TMDB API → Custom Hooks → Redux (movieSlice) → Components

3. Routing
   User Action → React Router → Layout (Auth Check) → Route Component
```

### Redux State Structure

```javascript
{
  user: {
    uid: string,
    email: string,
    displayName: string,
    photoURL: string
  },
  movies: {
    nowPlayingMovies: Array<Movie>,
    popularMovies: Array<Movie>,
    topRatedMovies: Array<Movie>,
    upcomingMovies: Array<Movie>,
    trailerVideo: {
      key: string,      // YouTube video ID
      type: string,     // "Trailer"
      site: string      // "YouTube"
    }
  }
}
```

---

## 📋 Prerequisites

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **TMDB API Key** ([Get it here](https://www.themoviedb.org/settings/api))
- **Firebase Project** ([Create one](https://console.firebase.google.com/))

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Manikanta41913/netflix-gpt.git
cd netflix-gpt
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# TMDB API
VITE_TMDB_BEARER_TOKEN=your_tmdb_bearer_token_here

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**⚠️ Important:** Never commit `.env.local` to version control. Add it to `.gitignore`.

### 4. Update Configuration Files

**src/utils/constants.js:**

```javascript
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`,
  },
};
```

**src/utils/firebase.js:**

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 6. Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🚀 Deployment

### Vercel Deployment

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

The `vercel.json` file is already configured for SPA routing:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Firebase Hosting (Alternative)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

---

## 🎓 Key Concepts & Patterns

### Custom Hooks Pattern

```javascript
// Reusable data fetching logic
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(API_URL, API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
    fetchMovies();
  }, []);
};

// Clean component usage
const Browse = () => {
  useNowPlayingMovies(); // Just call the hook!
  return <div>...</div>;
};
```

### Layout/Outlet Pattern

```javascript
// Layout stays mounted, only Outlet content changes
const Layout = () => {
  return (
    <>
      <Header /> {/* Stays mounted */}
      <Outlet /> {/* Changes based on route */}
    </>
  );
};
```

### Memory Leak Prevention

```javascript
// Always cleanup listeners
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, callback);
  return () => unsubscribe(); // Cleanup on unmount
}, []);
```

### Protected Routes

```javascript
// Automatic redirects based on auth state
useEffect(() => {
  if (user && path === "/") navigate("/browse");
  if (!user && path === "/browse") navigate("/");
}, [user, navigate]);
```

---

## 🐛 Known Issues & Solutions

### ✅ Vercel Deployment

- Fixed: Added `vercel.json` with SPA routing configuration
- All routes now work correctly (direct access, refresh, navigation)

### ✅ Profile Photos

- Fixed: Added image fallback in Header component
- Broken photoURLs automatically show default avatar

### ⚠️ Security Note

- Current code has hardcoded API keys in `constants.js` and `firebase.js`
- For production, move all secrets to environment variables
- Rotate any exposed keys immediately

---

## 📚 What You'll Learn

- **React 19**: Hooks, custom hooks, component composition
- **Redux Toolkit**: State management, slices, actions, reducers
- **Firebase Auth**: Authentication, session persistence, protected routes
- **React Router v7**: Nested routes, Layout pattern, programmatic navigation
- **TMDB API**: Fetching movie data, handling async operations
- **Tailwind CSS**: Utility-first styling, responsive design
- **Vite**: Fast development, optimized builds
- **Deployment**: Vercel, Firebase Hosting, SPA routing

---

## ✅ Development Progress

### Phase 1: Setup & Authentication ✅

- [x] Vite + React project setup
- [x] Tailwind CSS integration
- [x] Firebase Authentication
- [x] Redux Toolkit setup
- [x] React Router configuration
- [x] Sign Up/Sign In/Sign Out
- [x] Route protection
- [x] Session persistence

### Phase 2: Movie Data Integration ✅

- [x] TMDB API integration
- [x] Custom hooks (useNowPlayingMovies, useMovieTrailer, etc.)
- [x] Redux movie slice
- [x] Browse page structure
- [x] MainContainer component
- [x] Video background with trailers
- [x] Video title overlay
- [x] SecondaryContainer with movie lists
- [x] MovieCard component
- [x] Horizontal scrolling

### Phase 3: GPT Integration 🔜

- [ ] OpenAI API integration
- [ ] GPT-powered search
- [ ] Movie recommendations
- [ ] Natural language queries

### Phase 4: Enhanced Features 🔜

- [ ] Movie details modal
- [ ] Cast and crew information
- [ ] User watchlist
- [ ] Search functionality
- [ ] Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Please ensure:**

- No secrets or API keys are committed
- Code follows existing patterns
- ESLint passes without errors

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Manikanta**

- GitHub: [@Manikanta41913](https://github.com/Manikanta41913)
- Project: [Netflix GPT](https://github.com/Manikanta41913/netflix-gpt)

---

## 🙏 Acknowledgments

- [Netflix](https://www.netflix.com/) for design inspiration
- [TMDB](https://www.themoviedb.org/) for movie data API
- [Firebase](https://firebase.google.com/) for authentication services
- [Vercel](https://vercel.com/) for hosting platform
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Tailwind CSS](https://tailwindcss.com/) for styling framework

---

## 📞 Support

If you have any questions or run into issues:

- Open an [issue](https://github.com/Manikanta41913/netflix-gpt/issues)
- Check existing issues for solutions
- Review the PROJECT_NOTES.md for detailed implementation notes

---

**⭐ If you found this project helpful, please give it a star!**
