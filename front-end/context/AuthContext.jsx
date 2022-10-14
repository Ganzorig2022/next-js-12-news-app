import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const AuthProvider = (props) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
