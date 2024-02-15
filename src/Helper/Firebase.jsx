// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXOsf5O59yjn_YWwg2_JQ2TRwSW807gpA",
  authDomain: "clone-895f3.firebaseapp.com",
  projectId: "clone-895f3",
  storageBucket: "clone-895f3.appspot.com",
  messagingSenderId: "319329551543",
  appId: "1:319329551543:web:def290e2b63388f4e3f932",
  measurementId: "G-3CYGTRDBFY",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
const auth = firebase.auth();

export { auth };
