import React, { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface AuthContextType {
  user: string;
}

export const AuthContext = createContext<AuthContextType>({
  user: "",
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
