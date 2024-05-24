// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY1UbQYmhostE6cAN7WXFCoGjjEfw7S7c",
  authDomain: "thinksmart-78b7d.firebaseapp.com",
  projectId: "thinksmart-78b7d",
  storageBucket: "thinksmart-78b7d.appspot.com",
  messagingSenderId: "422128617538",
  appId: "1:422128617538:web:982e8c6f2beb680d0dc5db",
  measurementId: "G-Q02WN53LH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
