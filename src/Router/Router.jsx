import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Home/Homepage";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import JobCardDetails from "../Pages/Shared/JobCardDetails";
import PrivateRoute from "./PrivateRoute";
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
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobCardDetails></JobCardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
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
