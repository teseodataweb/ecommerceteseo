// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQHaUSNz_BSRc3_nW_2ElICPgePUjeUbY",
  authDomain: "teseo-store.firebaseapp.com",
  databaseURL: "https://teseo-store-default-rtdb.firebaseio.com",
  projectId: "teseo-store",
  storageBucket: "teseo-store.firebasestorage.app",
  messagingSenderId: "406323456015",
  appId: "1:406323456015:web:df4d124714327263929b7a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
