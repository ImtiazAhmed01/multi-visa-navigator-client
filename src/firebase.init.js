// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA65sr0y038IA0voyonpQfOe-mZOSPv_7w",
    authDomain: "multi-visa-navigator.firebaseapp.com",
    projectId: "multi-visa-navigator",
    storageBucket: "multi-visa-navigator.firebasestorage.app",
    messagingSenderId: "757125521483",
    appId: "1:757125521483:web:925829075dabbd2c7f2dce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;