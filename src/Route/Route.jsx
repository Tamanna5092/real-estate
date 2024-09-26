import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Component/Home';
import FetureDetails from '../Pages/FetureDetails';
import ErrorPage from '../Component/ErrorPage';
import Blogs from '../Pages/Blogs';
import About from '../Pages/About';
import Contract from '../Pages/Contract';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Route = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`../estate.json`)
        },
        {
          path: '/feature/:id',
          element: <PrivateRoute><FetureDetails></FetureDetails></PrivateRoute>,
          loader: () => fetch(`../estate.json`)
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>,
          loader: () => fetch(`../blogs.json`)
        },
        {
          path: '/about',
          element: <About></About>,
          loader: () => fetch(`../manager.json`)
        },
        {
          path: '/contract',
          element: <Contract></Contract>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

export default Route;