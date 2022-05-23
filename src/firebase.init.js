// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqnsMCVkSgL08xH61CcrySjVHeHkP2Pxs",
    authDomain: "doctors-portal-8dd01.firebaseapp.com",
    projectId: "doctors-portal-8dd01",
    storageBucket: "doctors-portal-8dd01.appspot.com",
    messagingSenderId: "210076984732",
    appId: "1:210076984732:web:0dd42a514ddc132ab6d459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;