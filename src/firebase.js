import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDRF3jbvoGtrjhuXCH4k-Pu0h2rRYAPIqI",
    authDomain: "disneyplus-clone-45e6a.firebaseapp.com",
    projectId: "disneyplus-clone-45e6a",
    storageBucket: "disneyplus-clone-45e6a.appspot.com",
    messagingSenderId: "1092602967369",
    appId: "1:1092602967369:web:d3e4151d0b13b162599698",
    measurementId: "G-T0B8NB1836"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;