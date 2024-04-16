// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc8BN470w7xQK-9iIkg5oWalHL4EMMMVE",
  authDomain: "nestopia-auth.firebaseapp.com",
  projectId: "nestopia-auth",
  storageBucket: "nestopia-auth.appspot.com",
  messagingSenderId: "367598589860",
  appId: "1:367598589860:web:f28f7cccae9823acff9331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;