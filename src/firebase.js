import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBMw5sVA6qlPAj_F7ZNVQC3eEJYDzDoamI",
    authDomain: "specialty-pharmacy.firebaseapp.com",
    databaseURL: "https://specialty-pharmacy.firebaseio.com",
    projectId: "specialty-pharmacy",
    storageBucket: "specialty-pharmacy.appspot.com",
    messagingSenderId: "512856087305",
    appId: "1:512856087305:web:7078eb3dfbb4cabe9751d8",
    measurementId: "G-QVQJ6MDKJH"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default fire