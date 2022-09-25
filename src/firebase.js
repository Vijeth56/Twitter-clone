import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApZc_n8xGWcKiVY4bKCD_0QcrQtjHTcJo",
  authDomain: "twitter-clone-47117.firebaseapp.com",
  projectId: "twitter-clone-47117",
  storageBucket: "twitter-clone-47117.appspot.com",
  messagingSenderId: "268386041794",
  appId: "1:268386041794:web:4d9c4558ba23bf44ace05b",
  measurementId: "G-P36NR9843J"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;