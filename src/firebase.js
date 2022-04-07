import firebase from 'firebase'
import 'firebase/auth'
import "firebase/firestore";
const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyCmAQZocPKYvVLpq4pYxBpEx6ITthsfPQI",
    authDomain: "messattendance-fc208.firebaseapp.com",
    databaseURL: "https://messattendance-fc208-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "messattendance-fc208",
    storageBucket: "messattendance-fc208.appspot.com",
    messagingSenderId: "932494920430",
    appId: "1:932494920430:web:0125f906b4f578aed181ff"
  
});

export default firebaseapp
export const auth = firebaseapp.auth()
export const db = firebaseapp.firestore() 
export const database = firebaseapp.database()