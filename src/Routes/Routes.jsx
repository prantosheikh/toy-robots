import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ToyAll from "../ToyAll/ToyAll";
import UpdateToy from "../UpdateToy/UpdateToy";
import AddToy from "../pages/AddToy/AddToy";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyToy from "../pages/MyToy/MyToy";
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
        element: <ToyDetails></ToyDetails>,
      },

      {
        path: "/blogs",
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "toyall",
        element: <ToyAll></ToyAll>,
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:2000/updatetoy/${params.id}`),
      },
      {
        path: "/mytoy",
        element: <MyToy></MyToy>
      }
    ],
  },
]);

export default router;
