import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Home/Homepage";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: "Route not found",
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

export default Router;
