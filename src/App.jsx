import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Body from './Component/Home/Home';
import Product from './Component/Product/Product';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Shop from './Component/Shop/Shop';


const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element: <Body></Body>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>

        },
        {
          path: '/product',
          element: <Product></Product>
        },
        {
          path: '/shop',
          element: <Shop></Shop>,
          loader: () =>fetch('/public/product.json')
        }
       
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;