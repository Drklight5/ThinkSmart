// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyupfxlhZ3VsJ0RKuq6kCmR5d7pl5hyg4",
  authDomain: "thinksmart-b4ffb.firebaseapp.com",
  projectId: "thinksmart-b4ffb",
  storageBucket: "thinksmart-b4ffb.appspot.com",
  messagingSenderId: "163042044302",
  appId: "1:163042044302:web:f47d5a3bac8188bd7b5cdf",
  measurementId: "G-9TZVL1KSDC",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
