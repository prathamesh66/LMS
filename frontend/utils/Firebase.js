import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lmsproject-a38c9.firebaseapp.com",
  projectId: "lmsproject-a38c9",
  storageBucket: "lmsproject-a38c9.firebasestorage.app",
  messagingSenderId: "654680690336",
  appId: "1:654680690336:web:acd4aaf5ff5a843272c3c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}