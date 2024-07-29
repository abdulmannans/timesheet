import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/login/Login";

const AuthRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <>
            <Login />
          </>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <>
            <>
              <h1>forgot password</h1>
            </>
          </>
        ),
      },
      {
        path: "/",
        element: <Navigate to="login" />,
      },
      {
        path: "*", // wildcard path for catching all other routes
        element: <Navigate to="login" />,
      },
    ],
  },
]);

export default AuthRoutes;
