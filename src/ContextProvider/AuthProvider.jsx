import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true)


  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUsers = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logoutUsers = () =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      setLoading(false);
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
    loading,
  };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.object,
};
