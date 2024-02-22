// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4cGnEk3UBtBGdC3G7HoYBbNqvaj2x7qA",
  authDomain: "central-alcove-379122.firebaseapp.com",
  projectId: "central-alcove-379122",
  storageBucket: "central-alcove-379122.appspot.com",
  messagingSenderId: "535312686767",
  appId: "1:535312686767:web:e13eb6286c9051ae9a7e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = initializeApp(app);

