// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXwJXS23mbDYjCSgcNyw2XA8aTNmxVICo",
  authDomain: "netflixgpt-b8930.firebaseapp.com",
  projectId: "netflixgpt-b8930",
  storageBucket: "netflixgpt-b8930.appspot.com",
  messagingSenderId: "805700839346",
  appId: "1:805700839346:web:79137a4f7c3a6be1d5a6ab",
  measurementId: "G-YGSPXQZQ20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();