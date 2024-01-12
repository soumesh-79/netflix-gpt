// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeGncxsmlxNYeqZPRbvJ9J8j4GteUyRH4",
  authDomain: "netflixgpt-d7b09.firebaseapp.com",
  projectId: "netflixgpt-d7b09",
  storageBucket: "netflixgpt-d7b09.appspot.com",
  messagingSenderId: "848813856424",
  appId: "1:848813856424:web:a9d2302045a12344ffd49d",
  measurementId: "G-J3KE8R0F7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export 
const auth = getAuth();