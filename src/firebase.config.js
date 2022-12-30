import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDemnxApMvcPYjK4p-XZooocX2CCkor-EI",
  authDomain: "task-e073e.firebaseapp.com",
  projectId: "task-e073e",
  storageBucket: "task-e073e.appspot.com",
  messagingSenderId: "360874453369",
  appId: "1:360874453369:web:b27d36e598f1afea1aa7a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
