// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSDeZl8FJ2KJibmGnm2aFhGYwurYAx83o",
  authDomain: "selfsubmit-dbd90.firebaseapp.com",
  projectId: "selfsubmit-dbd90",
  storageBucket: "selfsubmit-dbd90.appspot.com",
  messagingSenderId: "983858359517",
  appId: "1:983858359517:web:58b69ea59e1858a9153f34",
  measurementId: "G-MGGCFMGXHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db}
