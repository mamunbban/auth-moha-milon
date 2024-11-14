// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPKf_nSqnvFA06WbC1Z2v6-Bdiljrb_V4",
  authDomain: "auth-moha-milon-798e4.firebaseapp.com",
  projectId: "auth-moha-milon-798e4",
  storageBucket: "auth-moha-milon-798e4.firebasestorage.app",
  messagingSenderId: "258501482328",
  appId: "1:258501482328:web:9da613016c645f9c7eb72d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);