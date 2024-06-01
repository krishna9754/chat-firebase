import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJxXF0YqK3L2KoHEurb9sYcPE91GfY7go",
  authDomain: "chat-bcc30.firebaseapp.com",
  projectId: "chat-bcc30",
  storageBucket: "chat-bcc30.appspot.com",
  messagingSenderId: "356976775794",
  appId: "1:356976775794:web:fcd5ae438ff9d2152f68eb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()