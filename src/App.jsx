import React from "react";
import { Route, Routes } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { routes } from "./Routes";

import Navbar from "./Components/Navbar";

export default function App() {
  const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);

  function closeNavBar() {
    setIsNavBarOpen(false);
  }

  function openNavBar() {
    setIsNavBarOpen(true);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", closeNavBar);
    return () => window.removeEventListener("scroll", closeNavBar);
  }, []);

  const RoutesELements = routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));

  return (
    <div className="app">
      <OutsideClickHandler onOutsideClick={() => closeNavBar()}>
        <button onClick={openNavBar}>Button</button>
        <Navbar isNavBarOpen={isNavBarOpen} />
      </OutsideClickHandler>

      <Routes>{RoutesELements}</Routes>
    </div>
  );
}
