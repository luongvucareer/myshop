import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpGbPYBqrAqy0Vlm3zeel3W1SbX1kBsbg",
  authDomain: "myshop-ceed0.firebaseapp.com",
  projectId: "myshop-ceed0",
  storageBucket: "myshop-ceed0.firebasestorage.app",
  messagingSenderId: "1070470562904",
  appId: "1:1070470562904:web:789cc78aed4c88a412b62d",
  measurementId: "G-VPB36XKETN",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
