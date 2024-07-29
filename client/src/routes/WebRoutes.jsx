import React from "react";
import { createBrowserRouter } from "react-router-dom";
import WebAppLayout from "../layouts/WebAppLayout";

const WebRoutes = createBrowserRouter([
  {
    path: "/dashboard",
    element: <WebAppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <div>dashboard</div>,
      },
    ],
  },
]);

export default WebRoutes;
