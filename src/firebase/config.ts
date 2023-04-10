// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import {
  RN_MOVIES_FIREBASE_API_KEY,
  RN_MOVIES_FIREBASE_AUTH_DOMAIN,
  RN_MOVIES_FIREBASE_PROJECT_ID,
  RN_MOVIES_FIREBASE_STORAGE_BUCKET,
  RN_MOVIES_MESSAGING_SENDER,
  RN_MOVIES_APP_ID,
} from '@env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: RN_MOVIES_FIREBASE_API_KEY,
  authDomain: RN_MOVIES_FIREBASE_AUTH_DOMAIN,
  projectId: RN_MOVIES_FIREBASE_PROJECT_ID,
  storageBucket: RN_MOVIES_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: RN_MOVIES_MESSAGING_SENDER,
  appId: RN_MOVIES_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
