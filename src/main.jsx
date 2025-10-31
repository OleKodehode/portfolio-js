import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./lib/routes.jsx";

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
