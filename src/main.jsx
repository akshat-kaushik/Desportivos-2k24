import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Registration from "./components/registration/Registration";
import Front from "./Front";
import Esports from "./components/esports/Esports";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Front/>

  },

  {
    path: "/registration",
    element: <Registration/>,
  },

  {
    path: "/esportsReg",
    element: <Esports/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);