import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDM4OYn-AHhdYkULuLU9QWZ69SOJSxba2E",
  authDomain: "digityzewebsite.firebaseapp.com",
  projectId: "digityzewebsite",
  storageBucket: "digityzewebsite.firebasestorage.app",
  messagingSenderId: "900672023783",
  appId: "1:900672023783:web:f6878f2b8ba4fe12118642"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
