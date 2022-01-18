import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyConBiSTJ2VTgYZM9VId4DgFb0bYnFgd70",
    authDomain: "mymusicapp-cb8c0.firebaseapp.com",
    projectId: "mymusicapp-cb8c0",
    storageBucket: "mymusicapp-cb8c0.appspot.com",
    messagingSenderId: "514063748260",
    appId: "1:514063748260:web:3707abc4097ff731ec6a31",
    measurementId: "G-DQ5VSRJY2F"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider
}