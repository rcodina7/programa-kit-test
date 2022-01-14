import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const handleCurrentUser = (user) => {
    const { email, displayName } = user;

    if (!email) return;
    const name = displayName ? displayName : "?";

    setCurrentUser({ name, email });
  };

  const resetUser = () => {
    setCurrentUser();
  };

  return (
    <AuthContext.Provider value={[currentUser, handleCurrentUser, resetUser]}>
      {children}
    </AuthContext.Provider>
  );
};
