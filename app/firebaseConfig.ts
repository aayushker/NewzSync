// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.NEXT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.NEXT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.NEXT_APP_FIREBASE_MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
const db = getFirestore(app);

export { db, analytics };