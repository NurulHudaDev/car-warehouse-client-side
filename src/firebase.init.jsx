
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnQFqTBVLi3dVyhcdjMvgrM_fgFHiZHPY",
  authDomain: "warehouse-website-9eef9.firebaseapp.com",
  projectId: "warehouse-website-9eef9",
  storageBucket: "warehouse-website-9eef9.appspot.com",
  messagingSenderId: "480332306535",
  appId: "1:480332306535:web:95e5e1418f0f11624edcc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;




