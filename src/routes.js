import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/project", element: <Projects /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <Navigate to="/" /> },
];

export default routes;
