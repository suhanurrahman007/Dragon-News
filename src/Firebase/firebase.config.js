// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIiHOM8yEW7s6NQk_pDCahONdLVIVYGGQ",
    authDomain: "dragon-news-e47ce.firebaseapp.com",
    projectId: "dragon-news-e47ce",
    storageBucket: "dragon-news-e47ce.appspot.com",
    messagingSenderId: "821061415906",
    appId: "1:821061415906:web:a996d91bb952abf0f37fbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
