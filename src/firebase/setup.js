import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJN2ksY1gZDk8ElYCtV20KqNFIkmK_d9Q",
  authDomain: "linkedin-d2118.firebaseapp.com",
  projectId: "linkedin-d2118",
  storageBucket: "linkedin-d2118.appspot.com",
  messagingSenderId: "8044235289",
  appId: "1:8044235289:web:005d688994e00f4bc07888",
  measurementId: "G-R2B68K479V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = getAuth(firebaseApp);
export const GoogleProvider = new GoogleAuthProvider();

export default db;
