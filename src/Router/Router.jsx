import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import AllFoods from "../components/AllFoods/AllFoods";
import SingleFood from "../components/SingleFood/SingleFood";
import OrderFood from "../components/OrderFood/OrderFood";
import OrderedPage from "../components/OrderedPage/OrderedPage";
import AddedFood from "../components/AddedFood/AddedFood";
import AddFood from "../components/AddFood/AddFood";
import UpdateFood from "../components/UpdateFood/UpdateFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood></SingleFood>,
      },
      {
        path: "/orderFood/:id",
        element: (
          <PrivateRoute>
            <OrderFood></OrderFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/orderedPage",
        element: (
          <PrivateRoute>
            <OrderedPage></OrderedPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/addedFood",
        element: (
          <PrivateRoute>
            <AddedFood></AddedFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateFood/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
