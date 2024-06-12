import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, deleteDoc, addDoc, updateDoc} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuNVdRrJx3FT7IUUssK1VxpdNmL6fJ03A",
  authDomain: "task-9f193.firebaseapp.com",
  projectId: "task-9f193",
  storageBucket: "task-9f193.appspot.com",
  messagingSenderId: "278027476626",
  appId: "1:278027476626:web:4d3f87e7057b0626bb504b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export {database, collection, doc, deleteDoc, addDoc, updateDoc};