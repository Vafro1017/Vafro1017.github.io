// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg932jQ5XbJrB2zFHzJe6JnvGWqgBReC8",
  authDomain: "yiik-firebase.firebaseapp.com",
  projectId: "yiik-firebase",
  storageBucket: "yiik-firebase.appspot.com",
  messagingSenderId: "161099560403",
  appId: "1:161099560403:web:bfd8560f72275a7b31ab26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)