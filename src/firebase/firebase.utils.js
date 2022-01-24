import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config= {
  apiKey: "AIzaSyAW1oGMYeF3qSd5A6I7Dm8vohP-HdNkFcc",
  authDomain: "crwn-db-16d56.firebaseapp.com",
  projectId: "crwn-db-16d56",
  storageBucket: "crwn-db-16d56.appspot.com",
  messagingSenderId: "675493759550",
  appId: "1:675493759550:web:d2bf281aa15314899f1f6f"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;