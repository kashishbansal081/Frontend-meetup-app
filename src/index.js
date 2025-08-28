import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CardDetail from "./components/CardDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>
  },
  {
    path: '/CardDetail/:cardId',
    element: <CardDetail/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
);
