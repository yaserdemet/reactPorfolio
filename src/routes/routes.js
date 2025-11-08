import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function path (root, sublink){
    return `${root}${sublink}`
}
const routes = [
  { path: path("", "/"), element: <Home /> },
  { path: path("", "/project"), element: <Projects /> },
  { path: path("", "/about"), element: <About /> },
  { path: path("", "*"), element: <Navigate to="/" /> },
];

export default routes;
