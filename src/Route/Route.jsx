import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Component/Home';
import FetureDetails from '../Pages/FetureDetails';
import ErrorPage from '../Component/ErrorPage';
import Contract from '../Pages/Contract';
import About from '../Pages/About';

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
          element: <FetureDetails></FetureDetails>,
          loader: () => fetch(`../estate.json`)
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contract',
          element: <Contract></Contract>
        }
      ]
    },
  ]);

export default Route;