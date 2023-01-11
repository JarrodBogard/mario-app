import { initializeApp } from "firebase/app";
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDSHKlWSiHHMbgTlrfCF_QMrJLdlgG1ytw",
  authDomain: "marioapp-7b49d.firebaseapp.com",
  projectId: "marioapp-7b49d",
  storageBucket: "marioapp-7b49d.appspot.com",
  messagingSenderId: "437044065910",
  appId: "1:437044065910:web:db6abc95e8315cec311157",
  measurementId: "G-SF093YBWVC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();

const colRef = collection(db, "projects");

export const projects = [];
onSnapshot(colRef, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    projects.push({ ...doc.data(), id: doc.id });
  });
  console.log(projects);
});

// getDocs(colRef).then(() => projects.push(doc));
