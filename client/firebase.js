// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuH2scZYwWUq-fWyxnPZssrT53xyc-W-Q",
  authDomain: "auth-552aa.firebaseapp.com",
  projectId: "auth-552aa",
  storageBucket: "auth-552aa.appspot.com",
  messagingSenderId: "668801422697",
  appId: "1:668801422697:web:2957a9a47ca9e9813659f8",
  measurementId: "G-BG7MWX2CJD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
