import { Suspense, lazy } from 'react';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export const HomePage = Loadable(lazy(() => import("../components/Home/Home")));
export const ProjectPage = Loadable(lazy(() => import("../components/Projects/Projects")));
export const AboutPage = Loadable(lazy(() => import("../components/About/About")));