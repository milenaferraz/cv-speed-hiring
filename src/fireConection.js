import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



 // Your web app's Firebase configuration
 let firebaseConfig = {
  apiKey: "AIzaSyBVDsHL2ixd8s9uUTeyxVLqLQuShk5Uuvg",
  authDomain: "speedhiring-8423b.firebaseapp.com",
  databaseURL: "https://speedhiring-8423b.firebaseio.com",
  projectId: "speedhiring-8423b",
  storageBucket: "speedhiring-8423b.appspot.com",
  messagingSenderId: "1058392437114",
  appId: "1:1058392437114:web:b3c59be4b8c5a8ffd966c3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;