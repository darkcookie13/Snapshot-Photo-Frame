// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvxSndCmsvyjxza6I7paANhS7GIgqrejE",
  authDomain: "photo-gallery-d92b1.firebaseapp.com",
  projectId: "photo-gallery-d92b1",
  storageBucket: "photo-gallery-d92b1.appspot.com",
  messagingSenderId: "707545782871",
  appId: "1:707545782871:web:d10caabd44cdbaa6be2112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

