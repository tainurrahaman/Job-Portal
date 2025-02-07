import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage";
import Register from "../Pages/Register";
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
    ],
  },
]);

export default Router;
