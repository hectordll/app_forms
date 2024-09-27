// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMSkgwUikDaVyAidf_yX-vswK5yA8JciM",
    authDomain: "rallye-des-gaulois.firebaseapp.com",
    projectId: "rallye-des-gaulois",
    storageBucket: "rallye-des-gaulois.appspot.com",
    messagingSenderId: "619619997685",
    appId: "1:619619997685:web:e2b549cf1a7f331fc4f2bc",
    measurementId: "G-L8ZP9Z2DQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };