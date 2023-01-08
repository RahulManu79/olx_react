import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTwOlX4NzraNBXOjLvwgL1ogJvlY2NYjs",
    authDomain: "olx-clone-36c2f.firebaseapp.com",
    projectId: "olx-clone-36c2f",
    storageBucket: "olx-clone-36c2f.appspot.com",
    messagingSenderId: "979102899720",
    appId: "1:979102899720:web:523aec33cd91160bc73bbd",
    measurementId: "G-Y7MBKMHQEK"
  };

export default firebase.initializeApp(firebaseConfig)