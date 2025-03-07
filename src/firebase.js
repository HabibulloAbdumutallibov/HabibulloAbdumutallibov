import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Firebase ilovani ishga tushirish
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, set };
