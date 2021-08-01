
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa9iQaC4bQZSHIlis7o7I3SwPyobltaQE",
  authDomain: "twitter-clone-ff80b.firebaseapp.com",
  databaseURL: "https://twitter-clone-ff80b-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-ff80b",
  storageBucket: "twitter-clone-ff80b.appspot.com",
  messagingSenderId: "96340608447",
  appId: "1:96340608447:web:e943604cefc6813b6a8d0a",
  measurementId: "G-EMLGXB0TZ5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
