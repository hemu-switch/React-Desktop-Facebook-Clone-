// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDlBH1ghHbGcs_IZ746dIuwcNNS_rgZasU',
  authDomain: 'fb-clone-eb2c5.firebaseapp.com',
  databaseURL: 'https://fb-clone-eb2c5.firebaseio.com',
  projectId: 'fb-clone-eb2c5',
  storageBucket: 'fb-clone-eb2c5.appspot.com',
  messagingSenderId: '216096693832',
  appId: '1:216096693832:web:a4995ec00d6791076ac27d',
  measurementId: 'G-P4FW558WRJ'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
