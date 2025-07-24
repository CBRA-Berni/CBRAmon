import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXMBpEsQDGWvVTaOP443Yq371hdLp-F6o",
  authDomain: "CBRAmon01.firebaseapp.com",
  projectId: "cbramon01",
  storageBucket: "CBRAmon01.appspot.com",
  messagingSenderId: "DEINE_SENDER_ID",
  appId: "AIzaSyDXMBpEsQDGWvVTaOP443Yq371hdLp-F6o"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
