# 🎬 Netflix GPT

A production-ready Netflix clone featuring Firebase authentication, Redux state management, Groq-powered movie search, and real-time movie data from TMDB API. Built with React 19, Vite, and Tailwind CSS.

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

### 🤖 AI-Powered Search (Groq)

- **FREE AI-powered movie search** using Groq (Llama 3.3 70B)
- Multi-language support (English, Hindi, Spanish, Telugu)
- Language selector in header (visible on GPT Search page)
- Dynamic placeholder and button text based on selected language
- Natural language movie queries
- Intelligent movie recommendations
- Displays recommended movies with posters

### 🛠️ Technical Implementation

- Custom React hooks for data fetching
- Redux Toolkit for centralized state management
- React Router v7 with Layout/Outlet pattern
- Memory leak prevention with proper cleanup functions
- Optimized re-renders using Layout pattern
- SPA routing configuration for deployment
- Tailwind CSS for responsive design
- Vite for fast development and optimized builds
- Multi-language state management with Redux

---

## 🛠️ Tech Stack

| Category             | Technology                  |
| -------------------- | --------------------------- |
| **Frontend**         | React 19 + Vite 7.3         |
| **Styling**          | Tailwind CSS 3.4            |
| **State Management** | Redux Toolkit 2.11          |
| **Authentication**   | Firebase Auth 12.10         |
| **Routing**          | React Router DOM 7.13       |
| **AI Integration**   | Groq (Llama 3.3 70B) - FREE |
| **API**              | TMDB (The Movie Database)   |
| **Deployment**       | Vercel + Firebase Hosting   |

---

## 🏗️ Project Architecture

### Component Structure

```
src/
├── Components/
│   ├── Body.jsx              # Router setup + Auth listener
│   ├── Header.jsx            # Navigation bar with language selector
│   ├── Login.jsx             # Authentication forms
│   ├── Browse.jsx            # Main browse page
│   ├── MainContainer.jsx     # Hero section wrapper
│   ├── VideoBackground.jsx   # YouTube trailer embed
│   ├── VideoTitle.jsx        # Movie title overlay
│   ├── SecondaryContainer.jsx # Movie lists container
│   ├── MovieList.jsx         # Horizontal scrolling list
│   ├── MovieCard.jsx         # Individual movie poster
│   ├── ErrorBoundary.jsx     # Error handling component
│   ├── LoadingSpinner.jsx    # Loading state component
│   ├── GPTSearch.jsx         # GPT search page container
│   ├── GPTSearchBar.jsx      # Search input with multi-language support
│   └── GPTSuggestedMovies.jsx # GPT movie recommendations display
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
│   ├── gptSlice.js           # GPT search & language state
│   ├── apiHelper.js          # TMDB API helper with retry logic
│   ├── gptopenai.js          # Groq client configuration
│   ├── firebase.js           # Firebase configuration
│   ├── constants.js          # API keys, URLs, and translations
│   └── Validate.js           # Form validation logic
├── App.jsx                   # Redux Provider + Error Boundary
└── main.jsx                  # Application entry point
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
  },
  gpt: {
    showGPTsearch: boolean,     // Toggle GPT search view
    selectedLanguage: string,   // Current language (en, hindi, Spanish, Telugu)
    gptMovies: {
      movieNames: Array<string>,
      movieResults: Array<Array<Movie>>
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
- **Groq API Key** ([Get it FREE here](https://console.groq.com))

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

### 3. Configure API Keys

**Update `src/utils/constants.js`:**

Replace with your actual TMDB Bearer token:

```javascript
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer YOUR_ACTUAL_TMDB_BEARER_TOKEN_HERE",
  },
};
```

Replace with your actual Groq API key (FREE):

```javascript
export const GROQ_API_KEY = "your_actual_groq_api_key_here";
```

**Update `src/utils/firebase.js`:**

Replace with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your_firebase_api_key",
  authDomain: "your_project.firebaseapp.com",
  projectId: "your_project_id",
  storageBucket: "your_project.appspot.com",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id",
  measurementId: "your_measurement_id",
};
```

**⚠️ Security Note:** For production, move all API keys to environment variables and add them to `.gitignore`.

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 5. Build for Production

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

## 🌍 Multi-Language Support

The app supports 4 languages for the GPT search interface:

| Language | Code    | Search Button | Placeholder                         |
| -------- | ------- | ------------- | ----------------------------------- |
| English  | en      | Search        | What would you like to watch today? |
| Hindi    | hindi   | खोज           | आज आप क्या देखना चाहेंगे?           |
| Spanish  | Spanish | Buscar        | ¿Qué te gustaría ver hoy?           |
| Telugu   | Telugu  | వెతకండి       | మీరు ఈరోజు ఏమి చూడాలనుకుంటున్నారు?  |

Language selection is available in the header when on the GPT Search page.

---

## 🤖 Why Groq? (FREE AI Alternative)

We use **Groq** instead of OpenAI because:

✅ **Completely FREE** - No credit card required  
✅ **10x FASTER** than OpenAI  
✅ **OpenAI-compatible API** - Easy migration  
✅ **Generous limits** - 30 requests/min, 14,400/day  
✅ **Powerful model** - Llama 3.3 70B

### Get Your FREE Groq API Key:

1. Go to https://console.groq.com
2. Sign up (free, no credit card)
3. Create API key
4. Add to `src/utils/constants.js`

---

## 🚀 Deployment

### Vercel Deployment

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard (if using env vars)
4. Deploy

The `vercel.json` file is already configured for SPA routing.

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

Reusable data fetching logic with proper cleanup

### Multi-Language Implementation

Language state in Redux with dynamic translations

### Layout/Outlet Pattern

Persistent header with changing route content

### Memory Leak Prevention

Proper cleanup of listeners and subscriptions

---

## ✅ Development Progress

### Phase 1: Setup & Authentication ✅

- [x] Vite + React project setup
- [x] Tailwind CSS integration
- [x] Firebase Authentication
- [x] Redux Toolkit setup
- [x] React Router configuration
- [x] Route protection

### Phase 2: Movie Data Integration ✅

- [x] TMDB API integration
- [x] Custom hooks for data fetching
- [x] Redux movie slice
- [x] Browse page with movie lists
- [x] Video background with trailers
- [x] API error handling with retry logic

### Phase 3: AI Integration ✅

- [x] Groq API integration (FREE)
- [x] GPT search page structure
- [x] Multi-language support (4 languages)
- [x] Movie recommendations display
- [x] Redux state for GPT results

### Phase 4: Enhanced Features 🔜

- [ ] Movie details modal
- [ ] Cast and crew information
- [ ] User watchlist
- [ ] Advanced search filters
- [ ] More language options

---

## 🐛 Known Issues & Solutions

### ✅ All React Hook Warnings (Fixed)

- Fixed: Moved async functions inside useEffect
- Added proper dependency arrays

### ✅ GPT Search Integration (Completed)

- Using Groq (FREE alternative to OpenAI)
- Multi-language support fully implemented
- Movie recommendations displaying correctly

### ✅ API Helper (Fixed)

- Automatic retry logic with exponential backoff
- Graceful error handling for TMDB API

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
- [Groq](https://groq.com/) for FREE AI API
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
- Check TMDB_API_SETUP.md for API configuration help

---

**⭐ If you found this project helpful, please give it a star!**
