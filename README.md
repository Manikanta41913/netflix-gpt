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
│   │   ├── Browse.jsx       # Main browse page
│   │   └── Body.jsx         # Router + Layout + Auth listener
│   ├── utils/
│   │   ├── firebase.js      # Firebase configuration
│   │   ├── Validate.js      # Form validation
│   │   ├── appStore.js      # Redux store
│   │   └── userSlice.js     # User state slice
│   ├── App.jsx              # Redux Provider wrapper
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind imports
├── public/
├── package.json
└── README.md
```

## 🎯 Key Features Explained

### Authentication Flow

1. User signs up/signs in via Firebase
2. `onAuthStateChanged` listener detects auth changes
3. User data stored in Redux for global access
4. Automatic redirect based on auth state
5. Session persists across page refreshes

### Route Protection

- Logged-in users accessing `/` → Redirected to `/browse`
- Non-logged-in users accessing `/browse` → Redirected to `/`
- Direct URL access is protected
- Works on page refresh

### State Management

- Redux Toolkit for global state
- User slice manages authentication state
- `onAuthStateChanged` keeps Redux in sync with Firebase
- Single source of truth for user data

### Performance Optimizations

- Header component mounts once using Outlet pattern
- Proper useEffect cleanup prevents memory leaks
- Conditional rendering based on auth state
- Optimized re-renders

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

- React Hooks (useState, useRef, useEffect, useSelector, useDispatch)
- Redux Toolkit state management
- Firebase Authentication
- React Router v6 with nested routes
- Protected routes implementation
- Memory leak prevention with cleanup functions
- Conditional rendering
- Form validation with regex
- Tailwind CSS styling
- Vite build tool

## 🐛 Known Issues

- Firebase Hosting deployment not working (using Vercel instead)
- Old users created before photoURL implementation won't have profile pictures

## 🔜 Upcoming Features

- [ ] TMDB API integration for movie data
- [ ] GPT-powered movie recommendations
- [ ] Movie trailers and details
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
