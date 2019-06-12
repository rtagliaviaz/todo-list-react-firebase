import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD9bONxgWMHtCxP8TPlWtLf3IiPQe5pORI",
  authDomain: "todo-app-38ae6.firebaseapp.com",
  databaseURL: "https://todo-app-38ae6.firebaseio.com",
  projectId: "todo-app-38ae6",
  storageBucket: "todo-app-38ae6.appspot.com",
  messagingSenderId: "421815607242",
  appId: "1:421815607242:web:1651af78a40e7750"
});

let db = firebase.firestore();


export default db;