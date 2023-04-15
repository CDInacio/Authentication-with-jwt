import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/auth" />;
  return <>{children}</>;
};

export default PrivateRoute;
