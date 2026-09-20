import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
  apiKey: "AIzaSyAn-vp5puoGDCeM0k4mKMD0fBM4UMa0D7M",
  authDomain: "examen-csalvatierra.firebaseapp.com",
  projectId: "examen-csalvatierra",
  storageBucket: "examen-csalvatierra.firebasestorage.app",
  messagingSenderId: "818336614215",
  appId: "1:818336614215:web:0d7e4b573d279cce8eae62",
  measurementId: "G-07BN2ZYERX"
};

 if (!firebase.apps.length) {
	 firebase.initializeApp(firebaseConfig);
 }

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;