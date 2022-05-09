// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, updateProfile,onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWK8vQDZj01SgmPePpsme8rZLKfaa8gF4",
  authDomain: "chat-app-with-firebase-a7a6a.firebaseapp.com",
  projectId: "chat-app-with-firebase-a7a6a",
  storageBucket: "chat-app-with-firebase-a7a6a.appspot.com",
  messagingSenderId: "957736101232",
  appId: "1:957736101232:web:38a5de6f7bad757dda5bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const createUser = async (email,password,navigate,displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {displayName: displayName})
    console.log(userCredential)
    navigate("/")
  }
  catch(error) {
   alert(error.message)
  }

}

export const signIn =async (email,password,navigate)=>{
  
  
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    navigate("/")
  }
  catch(error) {
   alert(error.message)
  }
  
}

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
};

export const userObserver = (setCurrentUser)=>{
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {  
      setCurrentUser(currentUser)
      
      
    } else {
      setCurrentUser(false);
    }
  });
}


export const signUpProvider = (navigate)=> {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    navigate("/")

  }).catch((error) => {
    console.log(error);
  });
}