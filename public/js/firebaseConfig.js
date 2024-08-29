// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3YzDZbNdjZJL5siTvV9N2n1-z_tI5BvQ",
    authDomain: "psyconnects-7be13.firebaseapp.com",
    projectId: "psyconnects-7be13",
    storageBucket: "psyconnects-7be13.appspot.com",
    messagingSenderId: "299531221809",
    appId: "1:299531221809:web:c6bba4831be2d70d910e10",
    measurementId: "G-FKC5P4PE6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
