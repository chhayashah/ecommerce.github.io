// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhZLBH4sRJnmYnGvdAFG8yJjpnW1lWnrE",
  authDomain: "myapp-77260.firebaseapp.com",
  projectId: "myapp-77260",
  storageBucket: "myapp-77260.appspot.com",
  messagingSenderId: "74510593616",
  appId: "1:74510593616:web:f56196ae3d48f6e2242b55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth};