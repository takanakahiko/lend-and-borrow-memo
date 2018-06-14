import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCGrEr0NVFvNsQRymae7aZPUdRcUjAgj1s",
    authDomain: "lend-and-borrow-memo.firebaseapp.com",
    databaseURL: "https://lend-and-borrow-memo.firebaseio.com",
    projectId: "lend-and-borrow-memo",
    storageBucket: "lend-and-borrow-memo.appspot.com",
    messagingSenderId: "1059818713242"
};
export const firebaseApp = firebase.initializeApp(config);