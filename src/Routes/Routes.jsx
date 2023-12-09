import {
  createBrowserRouter,
} from "react-router-dom";
import Main from './../Layout/Main';
import SignIn from "../Pages/SignIn/SignIn";
import SignupEmployee from "../Pages/SignUP/SignupEmployee";
import SignupAdmin from "../Pages/SignUP/SignupAdmin";
import Home from "../Pages/Home/Home";
import PrivateRoute from './PrivateRoute';
import ErrorPage from "../Share/ErrorPage/ErrorPage";
import MyTeem from "../Pages/Employee/MyTeem/MyTeem";
import MyAssets from './../Pages/Employee/MyAssets';
import RequestAsset from './../Pages/Employee/RequestAsset';
import CustomeRequest from './../Pages/Employee/CustomeRequest';
import AddAsset from "../Pages/Admin/AddAsset";

import EmployeeHome from "../Pages/Employee/EmployeeHome";
import UserProfile from './../Pages/Employee/UserProfile';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup-employee',
        element: <SignupEmployee></SignupEmployee>
      },
      {
        path: 'signup-admin',
        element: <SignupAdmin></SignupAdmin>
      },
      {
        path: 'my-teem',
        element: <PrivateRoute><MyTeem></MyTeem></PrivateRoute>
      },
      {
        path: 'my-assets',
        element: <PrivateRoute><MyAssets></MyAssets></PrivateRoute>
      },
      {
        path: 'request-asset',
        element: <PrivateRoute><RequestAsset></RequestAsset></PrivateRoute>
      },
      {
        path: 'custome-request-assets',
        element: <PrivateRoute><CustomeRequest></CustomeRequest></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><EmployeeHome></EmployeeHome></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // normal user routes
      {
        path: 'add-asset', // Corrected path
        element: <AddAsset></AddAsset>
      }
    ]
  }
]);