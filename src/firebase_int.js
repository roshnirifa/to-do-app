// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9OnI1CV3z43CG5l6rIHLcXr7U98m-onI",
    authDomain: "to-do-list-3dcd3.firebaseapp.com",
    projectId: "to-do-list-3dcd3",
    storageBucket: "to-do-list-3dcd3.appspot.com",
    messagingSenderId: "9943965546",
    appId: "1:9943965546:web:e568fb23f868f93b0d0f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;