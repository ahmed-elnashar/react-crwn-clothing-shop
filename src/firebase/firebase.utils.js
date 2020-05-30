import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCzbTSTZccNPgKOxUJW9h0ynR-o6g_CADI',
  authDomain: 'crwn-db-ea317.firebaseapp.com',
  databaseURL: 'https://crwn-db-ea317.firebaseio.com',
  projectId: 'crwn-db-ea317',
  storageBucket: 'crwn-db-ea317.appspot.com',
  messagingSenderId: '1034681939036',
  appId: '1:1034681939036:web:e02069834b43e1f40aa299',
  measurementId: 'G-4LT64LG1MT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;