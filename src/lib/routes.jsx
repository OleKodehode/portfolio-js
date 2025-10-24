import App from "../App";
import ErrorElement from "../components/ErrorElement";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import Projects from "../pages/Projects";
import Test from "../pages/Test";

const routes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/test",
        element: <Test />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorElement />,
      },
    ],
  },
];

export default routes;
