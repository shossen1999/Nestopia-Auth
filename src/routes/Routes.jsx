import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UserProfile from "../pages/UserProfile/UserProfile";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/estates.json')
        },
        {
          path:"/estate/:id",
          
          element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/updateProfile",
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:"/userProfile",
          element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path:"/about",
          element:<PrivateRoute><About></About></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;