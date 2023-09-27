import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtcsdlUULtEH1RIry_nqGzzoC786dehxk",
  authDomain: "chat-app-bd459.firebaseapp.com",
  projectId: "chat-app-bd459",
  storageBucket: "chat-app-bd459.appspot.com",
  messagingSenderId: "146938320024",
  appId: "1:146938320024:web:96ab91ae062ef68484eced",
  measurementId: "G-MBKB9HEYKN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
