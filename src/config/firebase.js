import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBin5zCs9_VI45eN0jecGUfMYfyg-HWZEw",
    authDomain: "react-chatapp-1c0e0.firebaseapp.com",
    projectId: "react-chatapp-1c0e0",
    storageBucket: "react-chatapp-1c0e0.appspot.com",
    messagingSenderId: "396842545048",
    appId: "1:396842545048:web:2e5efc72896795c21a05ed"
};

firebase.initializeApp(firebaseConfig);

export default firebase;