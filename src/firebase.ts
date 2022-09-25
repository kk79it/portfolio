// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD_y0WoNcuKwJOGNj8uaclBizNSGlqNR8",
  authDomain: "k-lab-portfolio.firebaseapp.com",
  projectId: "k-lab-portfolio",
  storageBucket: "k-lab-portfolio.appspot.com",
  messagingSenderId: "991428027309",
  appId: "1:991428027309:web:183d1f6ca6b7ea62e5f724",
  measurementId: "G-4ST33K6GKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
