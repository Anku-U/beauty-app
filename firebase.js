// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6yONlswpmxWdtp-4Kr1dguNeMEvgzzBY",
  authDomain: "beauty-app-83078.firebaseapp.com",
  projectId: "beauty-app-83078",
  storageBucket: "beauty-app-83078.appspot.com",
  messagingSenderId: "1098683670474",
  appId: "1:1098683670474:web:13ea7e1048afb796c43933",
  measurementId: "G-51K8LNN4H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);