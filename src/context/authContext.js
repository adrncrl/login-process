import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const {children} = props
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const login = (token) => {
    Cookies.set("token", token);  
    setIsAuth(true);
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuth(false);
  };

 

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth };
