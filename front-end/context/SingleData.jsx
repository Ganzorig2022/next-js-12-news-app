import { createContext, useContext, useState } from 'react';

const SingleDataContext = createContext();

export const SingleDataProvider = ({ children }) => {
  const [singleData, setSingleData] = useState();

  return (
    <SingleDataContext.Provider value={{ singleData, setSingleData }}>
      {children}
    </SingleDataContext.Provider>
  );
};

export const useSingleDataContext = () => useContext(SingleDataContext);
