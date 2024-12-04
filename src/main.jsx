import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './Component/Provider/authProvider';
import Home from './Component/Home/Home';
import AllVisas from './Component/AllVisas/AllVisas';
import PrivateRoute from './Component/PrivateRoute';
import ErrorPage from './Component/Root';
import AddVisa from './Component/AddVisa/AddVisa';
import MyAddVisa from './Component/MyAddVisa/MyAddVisa';
import MyVisaApplication from './Component/MyVisaApplication/MyVisaApplication';
import Root from './Component/Root';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "allvisas", element: <AllVisas /> },
      { path: "addvisa", element: <PrivateRoute><AddVisa /></PrivateRoute> },
      { path: "my", element: <PrivateRoute><MyAddVisa /></PrivateRoute> },
      { path: "my-visa-application", element: <PrivateRoute><MyVisaApplication /></PrivateRoute> },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </StrictMode>,
)


