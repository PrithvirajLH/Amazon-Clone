import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyChawCclu6Gt93QcwoDoWkLdsqgdoVkmeE",
  authDomain: "clone2601-93e0e.firebaseapp.com",
  projectId: "clone2601-93e0e",
  storageBucket: "clone2601-93e0e.appspot.com",
  messagingSenderId: "871583357753",
  appId: "1:871583357753:web:a539de7eb36201dd9fe6e8",
  measurementId: "G-KLB4SXRZWV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
