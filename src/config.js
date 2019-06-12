import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


// Initialize Firebase
firebase.initializeApp({
  apiKey: "apikey",
  authDomain: "todo-app-38ae6.firebaseapp.com",
  databaseURL: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: " appId"
});

let db = firebase.firestore();


export default db;
