import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./lib/routes.jsx";

const router = createBrowserRouter(routes, {
  // eslint-disable-next-line no-undef
  basename: process.env.NODE_ENV === "production" ? "/portfolio-js" : "/",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
