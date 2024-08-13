// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; //import here

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOeO8NDKgiL5B_ZQbuYnNms4TjuoZnQaM",
  authDomain: "ccu2024demo.firebaseapp.com",
  projectId: "ccu2024demo",
  storageBucket: "ccu2024demo.appspot.com",
  messagingSenderId: "331123897845",
  appId: "1:331123897845:web:95818f91a8ed0889fc5cbc",
  measurementId: "G-EPZLGTPTLS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); //not using yet, therefore we can comment out
export const db = getFirestore(app);