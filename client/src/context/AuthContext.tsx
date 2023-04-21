import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

import {
  AuthContextType,
  LoginCredentials,
  SignupCredentials,
} from "../@types";
import { api } from "../services/api";

export const AuthContext = createContext<AuthContextType>({
  user: {
    isAuth: false,
    name: "",
    email: "",
  },
  setUser: () => {},
  signup: () => {},
  login: () => {},
  logout: () => {},
  error: "",
  setError: () => {},
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState({
    isAuth: false,
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    getLoggedUserInfo();
  }, []);

  const signup = async (credentials: SignupCredentials) => {
    try {
      const response = await api.post("/user/signup", credentials);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      }
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await api.post("/user/login", credentials);

      localStorage.setItem("userToken", JSON.stringify(response.data.token));

      setUser({
        isAuth: true,
        name: response.data.user.name,
        email: response.data.user.email,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      }
    }
  };

  const getLoggedUserInfo = async () => {
    const token = localStorage.getItem("userToken");

    let config = {
      headers: {
        authorization: `Bearer ${JSON.parse(token!)}`,
      },
    };

    if (token) {
      const response = await api.get("/user", config);

      setUser({
        isAuth: true,
        name: response.data.name,
        email: response.data.email,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setUser({ isAuth: false, name: "", email: "" });
  };

  return (
    <AuthContext.Provider
      value={{ user, error, setError, setUser, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
