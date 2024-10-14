import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const {children} = props;
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);



  const login = (token, userData) => {
    Cookies.set("token", token);
    setIsAuth(true);
    setUser(userData)
    
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuth(false);
    setUser(null); 
  };

  console.log(user)//has a value
  console.log(isAuth)//this is true

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
