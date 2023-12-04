// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqyaYFg2oES1sIg4Kwz1eNpza2MOVr7no",
  authDomain: "panditjiwebsite-e8b31.firebaseapp.com",
  projectId: "panditjiwebsite-e8b31",
  storageBucket: "panditjiwebsite-e8b31.appspot.com",
  messagingSenderId: "446423549852",
  appId: "1:446423549852:web:38186184115174e32d2a59",
  measurementId: "G-MER49R6L0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { app, auth , db};
