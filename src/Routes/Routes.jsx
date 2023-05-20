import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ToyAll from "../ToyAll/ToyAll";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/toy-details",
        element: <ToyDetails></ToyDetails>
      },

      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: "toyall",
        element: <ToyAll></ToyAll>
      }
    ],
  },
]);

export default router;
