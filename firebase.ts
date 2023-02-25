import {getApp, getApps,initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6VG2W8WLsk90Xs-toa6kxb0DuSQ-cBUw",
    authDomain: "chatgpt-clone-6f91f.firebaseapp.com",
    projectId: "chatgpt-clone-6f91f",
    storageBucket: "chatgpt-clone-6f91f.appspot.com",
    messagingSenderId: "212430270610",
    appId: "1:212430270610:web:72599b5665532e1839364b"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  const db = getFirestore(app)

  export {db};