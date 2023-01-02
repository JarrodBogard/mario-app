import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSHKlWSiHHMbgTlrfCF_QMrJLdlgG1ytw",
  authDomain: "marioapp-7b49d.firebaseapp.com",
  projectId: "marioapp-7b49d",
  storageBucket: "marioapp-7b49d.appspot.com",
  messagingSenderId: "437044065910",
  appId: "1:437044065910:web:db6abc95e8315cec311157",
  measurementId: "G-SF093YBWVC",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

// // Firestore is a NoSQL database and it uses collections/documents.
// //      - A collection is a group(collection) of documents that belong together(i.e. projects collection).
// //      - A collection contains a series of different documents that make up the collection such as a collection of projects for this Mario App.
// //              - The documents look very similar to a JS object, which contain key/value pairs.
