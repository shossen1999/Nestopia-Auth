import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/estates.json')
        },
        {
          path:"/estate/:id",
          
          element:<EstateDetails></EstateDetails>
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
          element:<UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);
  export default router;