import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorBoundry from "../components/ErrorBoundry";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <ErrorBoundry />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: "/cadastro",
    element: <Signup />,
    errorElement: <ErrorBoundry />,
  },
]);
