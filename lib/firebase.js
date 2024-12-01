// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export const auth = getAuth();
export const db = getFirestore();
