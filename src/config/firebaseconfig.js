/*
import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBTPXWPS_o3_i1hy6vtljNEvyRsb7ABqqg",
    authDomain: "task-26d99.firebaseapp.com",
    projectId: "task-26d99",
    storageBucket: "task-26d99.appspot.com",
    messagingSenderId: "375369514580",
    appId: "1:375369514580:web:d7dc3e6df8f66904aeb7c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database
*/

/*
import firebase from "firebase";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDtTxUWqB07R-ZvIA6V6SRvm1vbOuAMS2s",
    authDomain: "authentication-7808c.firebaseapp.com",
    projectId: "authentication-7808c",
    storageBucket: "authentication-7808c.appspot.com",
    messagingSenderId: "1040322467580",
    appId: "1:1040322467580:web:4e19c3a14d5a5b37932979"
};


// Initialize Firebase

//precisa ser dessa forma para funcionar 
const app = firebase.default.initializeApp(firebaseConfig);

export default firebase
*/

import firebase from "firebase";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDtTxUWqB07R-ZvIA6V6SRvm1vbOuAMS2s",
    authDomain: "authentication-7808c.firebaseapp.com",
    projectId: "authentication-7808c",
    storageBucket: "authentication-7808c.appspot.com",
    messagingSenderId: "1040322467580",
    appId: "1:1040322467580:web:4e19c3a14d5a5b37932979"
};


// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);
export default firebase
