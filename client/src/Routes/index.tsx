import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import ErrorBoundry from "../components/ErrorBoundry";
import PrivateRoute from "../components/PrivateRoute";
import Auth from "../pages/Auth";

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
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorBoundry />,
  },
]);
