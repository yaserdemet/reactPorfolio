import React from 'react'
import { useRoutes } from 'react-router-dom';
import { HomePage, ProjectPage, AboutPage } from './element';

const AppRouter = () => {
  return (
    useRoutes([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/project",
            element: <ProjectPage />
        },
        {
            path: "/about",
            element: <AboutPage />
        }
    ])
  )
}

export default AppRouter