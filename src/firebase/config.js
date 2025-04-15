// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyDwfu9Ws-waZpvP1dbdT6JZRs6LLbSfwW4",
//     authDomain: "odesypano-d7739.firebaseapp.com",
//     projectId: "odesypano-d7739",
//     storageBucket: "odesypano-d7739.appspot.com",
//     messagingSenderId: "687400488131",
//     appId: "1:687400488131:web:c1bae7f9095152a51ce676",
//     measurementId: "G-RQ3Y7ZL079"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBJD4c8eacMM9-Q0gOZl68LqIglKbPhQmE",
  authDomain: "odesypano-28e00.firebaseapp.com",
  projectId: "odesypano-28e00",
  storageBucket: "odesypano-28e00.appspot.com",
  messagingSenderId: "605131975473",
  appId: "1:605131975473:web:2a4ee055d270ca3f2fde10",
  measurementId: "G-HBH8W9E82Z",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
var database = getDatabase(app);

export { storage, auth, firestore, database };
