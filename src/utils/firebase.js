// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5L79F7hRjnaZc-koVacj8NJkNRLkQsi4",
  authDomain: "netflixgpt-b876f.firebaseapp.com",
  projectId: "netflixgpt-b876f",
  storageBucket: "netflixgpt-b876f.firebasestorage.app",
  messagingSenderId: "980455721137",
  appId: "1:980455721137:web:59c54bf99b781fb1b8ba90",
  measurementId: "G-61KZY88JDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Analytics initialized but not used yet (for future use)
getAnalytics(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
