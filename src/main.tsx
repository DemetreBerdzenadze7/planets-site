import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Layout from "./layout/Layout";
import Planets from "./pages/Planets";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        loader: () => redirect("/Mercury"),
      },
      {
        path: ":planetName",
        Component: Planets,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
