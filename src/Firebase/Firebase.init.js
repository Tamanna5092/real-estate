// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_iEAvzFdIxdvunhESzz8vo1BHfageP3U",
  authDomain: "real-estate-88042.firebaseapp.com",
  projectId: "real-estate-88042",
  storageBucket: "real-estate-88042.appspot.com",
  messagingSenderId: "486901595698",
  appId: "1:486901595698:web:f72c4dd7a02250c24a062b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const auth = getAuth(app)

export default auth;