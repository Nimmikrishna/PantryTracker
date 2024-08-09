// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxXVXwxSRyRo3kgy9mr5khaQ1XozxsmoI",
  authDomain: "inventory-management-app-a0caf.firebaseapp.com",
  projectId: "inventory-management-app-a0caf",
  storageBucket: "inventory-management-app-a0caf.appspot.com",
  messagingSenderId: "874648583962",
  appId: "1:874648583962:web:88dd77a126e521ae55f6a3",
  measurementId: "G-93R0EJT8YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { app, firestore, firebaseConfig };
// const analytics = getAnalytics(app);