// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBArAkb8jagjBwqFytoKPPjpS4Pl42NYR8",
  authDomain: "ehr-nextjs.firebaseapp.com",
  projectId: "ehr-nextjs",
  storageBucket: "ehr-nextjs.appspot.com",
  messagingSenderId: "381189527037",
  appId: "1:381189527037:web:3a8b515aa2c0f51de53594"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // optional

export { db, storage };
