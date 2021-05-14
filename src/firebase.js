import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBW1PUWQtZhZmEx8DWGVJjAgwQhi3K1_Tw",
  authDomain: "auth-demo-c1925.firebaseapp.com",
  projectId: "auth-demo-c1925",
  storageBucket: "auth-demo-c1925.appspot.com",
  messagingSenderId: "746557330045",
  appId: "1:746557330045:web:059113e6cc70c0bb8d1714"
}).auth()
