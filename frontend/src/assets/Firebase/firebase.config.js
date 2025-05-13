// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEmznUhg1mQG1tYAueOi2nmwnZarc3lU8",
  authDomain: "book-store-system-3c678.firebaseapp.com",
  projectId: "book-store-system-3c678",
  storageBucket: "book-store-system-3c678.firebasestorage.app",
  messagingSenderId: "249958485500",
  appId: "1:249958485500:web:a968201fe11b45d29d7679",
  measurementId: "G-DCQ5ZL668Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const Auth=getAuth(app)
export default Auth;