// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLb8fk94LOwhDXruEC0Ye0vdEXHX7Llfo",
  authDomain: "customerloginapp-b1a75.firebaseapp.com",
  projectId: "customerloginapp-b1a75",
  storageBucket: "customerloginapp-b1a75.firebasestorage.app",
  messagingSenderId: "614090155214",
  appId: "1:614090155214:web:4292d97cbcf8fbd3119c9f",
  measurementId: "G-TQCZRVHKGV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
