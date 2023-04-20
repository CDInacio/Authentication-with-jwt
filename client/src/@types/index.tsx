import { Dispatch, SetStateAction } from "react";

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

interface IUser {
  isAuth: boolean;
  name: string;
  email: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface StateProps {
  isLoading: boolean;
}

export interface AuthContextType {
  user: IUser;
  signup: (credentials: SignupCredentials) => void;
  login: (credentials: LoginCredentials) => void;
  logout: () => void;
}
