import App from "../App";
import ErrorElement from "../components/ErrorElement";
import Home from "../pages/Home";
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
        path: "/test",
        element: <Test />,
        errorElement: <ErrorElement />,
      },
    ],
  },
];

export default routes;
