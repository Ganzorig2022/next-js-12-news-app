import { createContext, useContext, useState, useEffect } from 'react';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const AuthContext = createContext();
export const AuthProvider = (props) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!getCookie('token')) setIsLoggedIn(false);
    setIsLoggedIn(true);
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
