import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

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
    ],
  },
]);
export default router;
