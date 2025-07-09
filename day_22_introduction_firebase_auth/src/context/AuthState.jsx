import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const AuthCntxt = createContext();
export const UseAuth = () => useContext(AuthCntxt);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("auth provider user is : ", user);
        setCurrentUser(user.email);
      } else {
        console.log("auth provider means login user nai");
      }
    });
  }, [auth]);
  const value = { currentUser };
  console.log(currentUser);
  return <AuthCntxt.Provider value={value}>{children}</AuthCntxt.Provider>;
};
