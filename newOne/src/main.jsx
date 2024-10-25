import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/home.jsx";
import Details from "./pages/details/details.jsx";
import Blogs from "./pages/blogs/blog.jsx";
import Layout from "./pages/layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/details/:id",
        element: <Details />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
