// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBStBTbwbBHgpp5hACcOptZDCGlnjdGZbc",
  authDomain: "coffeeshopapp-7b099.firebaseapp.com",
  projectId: "coffeeshopapp-7b099",
  storageBucket: "coffeeshopapp-7b099.firebasestorage.app",
  messagingSenderId: "990856032677",
  appId: "1:990856032677:web:55bc0d04a66b05c29c384c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth