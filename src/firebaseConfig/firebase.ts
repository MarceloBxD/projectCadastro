import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCaRJMxVYVJQhhj5ytKwaW5D5XUHxUgGAU",
  authDomain: "crud-marcelo.firebaseapp.com",
  projectId: "crud-marcelo",
  storageBucket: "crud-marcelo.appspot.com",
  messagingSenderId: "431637919194",
  appId: "1:431637919194:web:6b2feed61e8d4de6bb7ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
