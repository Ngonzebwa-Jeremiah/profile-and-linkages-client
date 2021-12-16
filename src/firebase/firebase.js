/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';


const firebaseApp = initializeApp({
    apiKey: process.env.REACT_APP_PUBLIC_APIKEY,
    authDomain: process.env.REACT_APP_PUBLIC_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_PUBLIC_DATABASEURL,
    projectId: process.env.REACT_APP_PUBLIC_PROJECTID,
    storageBucket: process.env.REACT_APP_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_PUBLIC_APPID,
   measurementId: process.env.REACT_APP_PUBLIC_MEASUREMENTID
  });

  const app = (firebaseApp);
  const db = getFirestore();
  //export const auth = getAuth(app);
//Logic for gmail authentication
//const provider = new GoogleAuthProvider()
//Create a fn that represnets sign in for google
// export const signInWithGoogle = ()=>{
//   signInWithPopup(auth,provider)
//   .then((result)=>{
//       const name = result.user.displayName
//       const email = result.user.email
//      const profilePic = result.user.photoURL
  
//       //Using localstorage to store information
//       localStorage.setItem("name",name)
//       localStorage.setItem("email",email)
//       localStorage.setItem("profilePic",profilePic)
//   console.log(result)
//   }).catch((error)=>{
//       console.log(error);
//   })
//   }
  const storage = getStorage(firebaseApp);
  //   const db = !firebase.apps.length   ? firebase.initializeApp(config).firestore()  : firebase.app().firestore();
//   const storage = !firebase.apps.length   ? firebase.initializeApp(config).storage()  : firebase.app().storage();
  export default{
    db,
    app,
    storage
      };