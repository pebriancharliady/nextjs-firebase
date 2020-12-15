import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN-yJRir93PIyo1U3hcvkLJ18BgM5jP0U",
  authDomain: "project-list-app-186ec.firebaseapp.com",
  databaseURL: "https://project-list-app-186ec.firebaseio.com",
  projectId: "project-list-app-186ec",
  storageBucket: "project-list-app-186ec.appspot.com",
  messagingSenderId: "583050559277",
  appId: "1:583050559277:web:002baf16cc24b7695a1da4",
  measurementId: "G-Q7L8CHCJMF",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase
