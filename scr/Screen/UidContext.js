import React, { createContext, useState } from 'react';
export const UidContext = createContext();

export const UidProvider = ({ children }) => {
  const [uid, setUid] = useState(null); 

  return (
    <UidContext.Provider value={{ uid, setUid }}>
      {children}
    </UidContext.Provider>
  );
};
