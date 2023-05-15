// USED TEST MODE
// DID NOT SET UP FIREBASE HOSTING FOR THIS APP

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //OLD/GIVEN
// import firebase from 'firebase/compat/app'; // MINI SERIES
// import 'firebase/compat/database';// MINI SERIES

import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsDYr6mM3i7Xa0McC-QeeMAHPNAoEMrKs",
  authDomain: "photography-portfolio-e3aa4.firebaseapp.com",
  databaseURL: "https://photography-portfolio-e3aa4-default-rtdb.firebaseio.com",
  projectId: "photography-portfolio-e3aa4",
  storageBucket: "photography-portfolio-e3aa4.appspot.com",
  messagingSenderId: "608799855732",
  appId: "1:608799855732:web:141309d416bef3253ead21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // OLD/GIVEN
// firebase.initializeApp(firebaseConfig); // MINI SERIES
// const database = firebase.database(); // MINI SERIES

export const storage = getStorage(app);