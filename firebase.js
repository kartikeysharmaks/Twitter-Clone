// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUXoGaXBdFTq_an0OrLVxudFYaADYvlng",
    authDomain: "twitter-clone-kartikeysharma.firebaseapp.com",
    projectId: "twitter-clone-kartikeysharma",
    storageBucket: "twitter-clone-kartikeysharma.appspot.com",
    messagingSenderId: "379805946808",
    appId: "1:379805946808:web:0d00112d6f83cc193cb54d",
    measurementId: "G-P221C1ZV9J"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };