import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      children:[
        {
          path:'home',
          element: <Home />
        },
        {
        path:'contact',
        element: <Contact />
      }
      ,{
        path:'about',
        element: <About />
      },
      {
        path:'product',
        element:<Product />,
        children:[{
          path: ':id',
          element: <ProductDetails />
        }]
      }
    
    ]
    }
    
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
