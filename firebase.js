import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDA4II4HZOUiAaPYNDloAKPSLQe-tzq9Gk",
  authDomain: "clone-9c063.firebaseapp.com",
  projectId: "clone-9c063",
  storageBucket: "clone-9c063.appspot.com",
  messagingSenderId: "213599835314",
  appId: "1:213599835314:web:998191a67d59dff37fe5ab",
  measurementId: "G-E5YPLNL7VY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };