import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD3znyFl2Wl-nLUt-mSIRY5fxdGnIGd9qc',
  authDomain: 'linkedin-2cc6c.firebaseapp.com',
  projectId: 'linkedin-2cc6c',
  storageBucket: 'linkedin-2cc6c.appspot.com',
  messagingSenderId: '711311235682',
  appId: '1:711311235682:web:19d4636fba7565b1500f3b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};