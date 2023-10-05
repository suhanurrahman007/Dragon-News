import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
  const [user, setUser] = useState("i love you");

  const createUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logoutUsers = () =>{
    return signOut(auth)
  }

  useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return () =>{
      unSubscribe()
    }
  },[])
  const authInfo = {
    user,
    createUsers,
    loginUsers,
    logoutUsers,
  };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.object,
};
