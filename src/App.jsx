import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { routes } from "./Routes";

import Navbar from "./Components/Navbar";

export default function App() {
  const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);
  const [isNavButtonVisible, setIsNavButtonVisible] = React.useState(true);
  const location = useLocation();
  const RoutesELements = routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));

  function closeNavBar() {
    setIsNavBarOpen(false);

    setTimeout(() => {
      setIsNavButtonVisible(true);
    }, 300);
  }

  function openNavBar() {
    setIsNavButtonVisible(false);
    setTimeout(() => {
      setIsNavBarOpen(true);
    }, 300);
  }

  //close navbar on scroll. It can be annoying for the user actually.
  // React.useEffect(() => {
  //   window.addEventListener("scroll", closeNavBar);
  //   return () => window.removeEventListener("scroll", closeNavBar);
  // }, []);

  return (
    <div className="app">
      <OutsideClickHandler onOutsideClick={() => closeNavBar()}>
        <button
          className={isNavButtonVisible ? "button--visible" : "button--hidden"}
          onClick={openNavBar}
        >
          Button
        </button>
        <Navbar isNavBarOpen={isNavBarOpen} />
      </OutsideClickHandler>

      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>{RoutesELements}</Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
