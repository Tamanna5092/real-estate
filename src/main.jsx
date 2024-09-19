import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Route from "./Route/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Route} />
    </AuthProvider>
  </StrictMode>
);
