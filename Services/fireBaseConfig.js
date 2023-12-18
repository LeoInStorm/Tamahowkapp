
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD9g4dk7XY8N3j1ApHAwPfww85tGBFIeL0",
  authDomain: "tamahowkapp.firebaseapp.com",
  projectId: "tamahowkapp",
  storageBucket: "tamahowkapp.appspot.com",
  messagingSenderId: "1048392530083",
  appId: "1:1048392530083:web:ab659929d8206486a66716",
  measurementId: "G-R8Y27RKM1V"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);