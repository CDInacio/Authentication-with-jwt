import React, { createContext, useEffect, useState } from "react";

import {
  AuthContextType,
  LoginCredentials,
  SignupCredentials,
} from "../@types";
import { api } from "../services/api";

export const AuthContext = createContext<AuthContextType>({
  state: {
    user: "",
    isLoading: false,
  },
  setState: () => {},
  signup: (credentials: SignupCredentials) => {},
  login: (credentials: LoginCredentials) => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState({
    user: "",
    isLoading: false,
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setState((prev) => ({ ...prev, user: user }));
      return;
    }
  }, [state.user]);

  const signup = async (credentials: SignupCredentials): Promise<any> => {
    try {
      const data = await api.post("/user/signup", credentials);
      return data;
    } catch (error) {
      return error?.response;
    }
  };

  const login = async (credentials: LoginCredentials): Promise<any> => {
    try {
      const data = await api.post("/user/login", credentials);
      if (data.status === 200) {
        localStorage.setItem("user", data.data.email);
        setState((prev) => ({ ...prev, user: data.data.email }));
        return data;
      }
    } catch (error) {
      return error?.response;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setState((prev) => ({ ...prev, user: "" }));
  };

  return (
    <AuthContext.Provider value={{ state, setState, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
