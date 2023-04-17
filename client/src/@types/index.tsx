import { Dispatch, SetStateAction } from "react";

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface StateProps {
  user: string;
  isLoading: boolean;
}

export interface AuthContextType {
  state: StateProps;
  setState: Dispatch<SetStateAction<StateProps>>;
  signup: (credentials: SignupCredentials) => void;
  login: (credentials: LoginCredentials) => void;
  logout: () => void;
}
