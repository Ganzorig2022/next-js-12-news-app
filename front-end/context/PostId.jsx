import { createContext, useContext, useState } from 'react';

const PostIdContext = createContext();

export const PostIdProvider = ({ children }) => {
  const [userPostId, setUserPostId] = useState('');

  return (
    <PostIdContext.Provider value={{ userPostId, setUserPostId }}>
      {children}
    </PostIdContext.Provider>
  );
};

export const usePostIdContext = () => useContext(PostIdContext);
