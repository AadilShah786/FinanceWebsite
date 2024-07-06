import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCB2MbfpmzF1zfaohto2qojTpiqNfFmMk",
  authDomain: "investmentwebpage.firebaseapp.com",
  databaseURL: "https://investmentwebpage-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "investmentwebpage",
  storageBucket: "investmentwebpage.appspot.com",
  messagingSenderId: "350664398336",
  appId: "1:350664398336:web:a73775237545f1a71daae5",
  measurementId: "G-QPTZKP98HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth, firestore };
