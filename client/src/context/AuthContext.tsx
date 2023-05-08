import React, { createContext, useEffect, useState } from "react";

import axios from "axios";
import { number } from "yup";

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
    msg: "",
    status: 401,
  },
  setUser: () => {},
  signup: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState({
    isAuth: false,
    name: "",
    email: "",
    msg: "",
    status: 401,
  });

  useEffect(() => {
    getLoggedUserInfo();
  }, []);

  const signup = (credentials: SignupCredentials) => {
    api
      .post("/user/signup", credentials)
      .then((response) => {
        setUser((prev) => ({
          ...prev,
          msg: response.data.message,
          status: response.status,
        }));
      })
      .catch((error) => {
        setUser((prev) => ({
          ...prev,
          msg: error.response.data.message,
          status: error.response.status,
        }));
      });
  };

  const login = (credentials: LoginCredentials) => {
    api
      .post("/user/login", credentials)
      .then((response) => {
        localStorage.setItem("userToken", JSON.stringify(response.data.token));

        setUser((prev) => ({
          ...prev,
          isAuth: true,
          name: response.data.user.name,
          email: response.data.user.email,
        }));
      })
      .catch((error) => {
        setUser((prev) => ({
          ...prev,
          msg: error.response.data.message,
          status: error.response.status,
        }));
      });
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

      setUser((prev) => ({
        ...prev,
        isAuth: true,
        name: response.data.name,
        email: response.data.email,
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setUser((prev) => ({ ...prev, isAuth: false, name: "", email: "" }));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
