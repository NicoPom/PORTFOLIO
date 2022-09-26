import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
];
