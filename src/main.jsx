import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Registration from "./components/registration/Registration";
import Front from "./Front";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Front/>

  },

  {
    path: "/registration",
    element: <Registration/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);