// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB29S7AcmRU10GTXDoK1UX2HGHZMfBE7rk",
  authDomain: "netflix-gpt-2420f.firebaseapp.com",
  projectId: "netflix-gpt-2420f",
  storageBucket: "netflix-gpt-2420f.appspot.com",
  messagingSenderId: "98686996759",
  appId: "1:98686996759:web:89d16e9a41a6cd308b2752",
  measurementId: "G-FLY5R06ZK1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
