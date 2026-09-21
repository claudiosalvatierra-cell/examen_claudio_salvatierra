import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = { 
apiKey: "AIzaSyAn-vp5puoGDCeM0k4mKMD0fBM4UMa0D7M",
  authDomain: "examen-csalvatierra.firebaseapp.com",
  projectId: "examen-csalvatierra",
  storageBucket: "examen-csalvatierra.firebasestorage.app",
  messagingSenderId: "818336614215",
  appId: "1:818336614215:web:0d7e4b573d279cce8eae62",
  measurementId: "G-07BN2ZYERX"
 /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID */

};

 if (!firebase.apps.length) {
	 firebase.initializeApp(firebaseConfig);
 }

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;