import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQeYKbJRr8WdvJjW3R8GkVRoyEZESRQ0w",
  authDomain: "proyecto-final-react-cod-4b683.firebaseapp.com",
  projectId: "proyecto-final-react-cod-4b683",
  storageBucket: "proyecto-final-react-cod-4b683.appspot.com",
  messagingSenderId: "747215470916",
  appId: "1:747215470916:web:abbfe040c95760d8fe9711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);