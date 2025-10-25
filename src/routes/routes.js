import React from "react";
import { Navigate } from "react-router-dom";
import { HomePage, ProjectPage, AboutPage } from "./element";

function path(root, sublink) {
  return `${root}${sublink}`;
}
const routes = [
  { path: path("", "/"), element: <HomePage /> },
  { path: path("", "/project"), element: <ProjectPage /> },
  { path: path("", "/about"), element: <AboutPage /> },
  { path: path("", "*"), element: <Navigate to="/" /> },
];

export default routes;
