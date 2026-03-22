import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./routes/routes";
import "./i18n/i18n";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useCheckOnline from "./hooks/useCheckOnline";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [load, upadateLoad] = useState(true);
  useCheckOnline();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
      
        <ScrollToTop />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
          <Analytics />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
