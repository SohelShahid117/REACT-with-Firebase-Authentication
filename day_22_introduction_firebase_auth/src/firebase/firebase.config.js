// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYKb07on1rmZcAB71W7DkJfH9xDu5GQDY",
  authDomain: "learn-firebase-c1cd1.firebaseapp.com",
  projectId: "learn-firebase-c1cd1",
  storageBucket: "learn-firebase-c1cd1.firebasestorage.app",
  messagingSenderId: "268780687531",
  appId: "1:268780687531:web:f5f7d2b654b856424de7ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;
