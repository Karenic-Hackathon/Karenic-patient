import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDwjc9Q3So77APqkBbYf764b_HOyjktsnY",
    authDomain: "kaneric-bdd0d.firebaseapp.com",
    projectId: "kaneric-bdd0d",
    storageBucket: "kaneric-bdd0d.appspot.com",
    messagingSenderId: "852455794504",
    appId: "1:852455794504:web:3d47d2488abaf15ce8757d"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);