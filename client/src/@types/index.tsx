export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
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
  error: string;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  signup: (credentials: SignupCredentials) => void;
  login: (credentials: LoginCredentials) => void;
  logout: () => void;
}
