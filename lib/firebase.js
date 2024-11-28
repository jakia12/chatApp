// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "real-time-chat-bdb69.firebaseapp.com",
  projectId: "real-time-chat-bdb69",
  storageBucket: "real-time-chat-bdb69.firebasestorage.app",
  messagingSenderId: "314700516863",
  appId: "1:314700516863:web:b7033af9a2d25adeb26bca",
  measurementId: "G-07SSR91HHC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
