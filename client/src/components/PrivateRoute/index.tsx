import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);

  useEffect(() => {
    if (!state.user) navigate("/login");
  }, [state.user]);

  return <>{children}</>;
};

export default PrivateRoute;
