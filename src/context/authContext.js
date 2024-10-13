
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsAuth(true);
    
    }
  }, []);

  const login = (token) => {
    Cookies.set('token', token);
    setIsAuth(true);
 
  };

  const logout = () => {
    Cookies.remove('token');
    setIsAuth(false);
    setUserData({});
  };

  return (
    <AuthContext.Provider value={{ isAuth, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
