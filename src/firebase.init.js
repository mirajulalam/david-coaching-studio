// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8KZIE-NJb8t4S6WrcfudNkhuIfDYqzNw",
    authDomain: "david-coaching-studio.firebaseapp.com",
    projectId: "david-coaching-studio",
    storageBucket: "david-coaching-studio.appspot.com",
    messagingSenderId: "80905637633",
    appId: "1:80905637633:web:c088327b28fd01b4489500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;