
import AuthContext from "./Context";
 import { onAuthStateChanged,createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";
// import {onAuthStateChanged} from "firebase/auth"
const AuthContextProvider=({children})=>{

    const provider = new GoogleAuthProvider();
    
          onAuthStateChanged(auth, (user) => {
  if (user) {
    
   console.log(user)
    // ...
  } else {
    // User is signed out
    // ...
  }
});


const createUser=(email,password)=>{
  return  createUserWithEmailAndPassword(auth, email, password)
  
}


const signInWithGoogle=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
  
  
    const user = result.user;
    console.log(user)
   
   
  }).catch((error) => {
    
   
    const errorMessage = error.message;
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: errorMessage,
  footer: '<a href="#">Why do I have this issue?</a>'
});
    
  });
}

const signin=(email,password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}
const userAuthentication={
    createUser,
    signInWithGoogle,
    signin
}
      return (
        <AuthContext.Provider value={userAuthentication} >
        {children}
        </AuthContext.Provider>
      )

}
export default AuthContextProvider