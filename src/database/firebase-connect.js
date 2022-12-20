// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNiPOzb0Qu-AIul6BQICcSU3B5BHhs4JM",
    authDomain: "email-service-dda70.firebaseapp.com",
    projectId: "email-service-dda70",
    storageBucket: "email-service-dda70.appspot.com",
    messagingSenderId: "136120942013",
    appId: "1:136120942013:web:2691bfbf0713718c39a6d4",
    measurementId: "G-MGW3HX1LBF"
};

// Initialize Firebase
const appDB = initializeApp(firebaseConfig);
export const authDB = getAuth(appDB);
export const realtimeDB = getDatabase(appDB);
