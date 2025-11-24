import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { HomePage, ProjectPage, AboutPage } from "./element";

const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/project",
      element: <ProjectPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
};

export default AppRouter;
