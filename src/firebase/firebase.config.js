// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVA6aWNiAOwwMSUPxCQpTlGUpyKimToEs",
  authDomain: "restaurant-management-55e76.firebaseapp.com",
  projectId: "restaurant-management-55e76",
  storageBucket: "restaurant-management-55e76.appspot.com",
  messagingSenderId: "47049963379",
  appId: "1:47049963379:web:efae63555d843ea896f706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;