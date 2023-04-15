import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./Routes";
import Container from "./components/Layout/Container";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </AuthContextProvider>
  </React.StrictMode>
);
