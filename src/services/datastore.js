// USED TEST MODE
// DID NOT SET UP FIREBASE HOSTING FOR THIS APP

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"; //OLD/GIVEN
import firebase from 'firebase/compat/app'; // MINI SERIES
import 'firebase/compat/database';// MINI SERIES


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
// const app = initializeApp(firebaseConfig); // OLD/GIVEN
firebase.initializeApp(firebaseConfig); // MINI SERIES
const database = firebase.database(); // MINI SERIES

// Code to retrieve photos and relevant information from the backend using firebase

// FILM
const Film = database.ref('film');
export function fetchFilm(callback) {
    Film.on('value', (snapshot) => {
        const data = snapshot.val();
        callback(data);
    })
}

// NATURE
const Nature = database.ref('nature');
export function fetchNature(callback) {
    Nature.on('value', (snapshot) => {
        const data = snapshot.val();
        callback(data);
    })
}

// PEOPLE
const People = database.ref('people');
export function fetchPeople(callback) {
    People.on('value', (snapshot) => {
        const data = snapshot.val();
        callback(data);
    })
}

// SPORTS
const Sports = database.ref('sports');
export function fetchSports(callback) {
    Sports.on('value', (snapshot) => {
        const data = snapshot.val();
        callback(data);
    })
}