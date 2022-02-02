import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
 
  };

const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);

export let db = firebase.firestore();