import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import  Github from './components/GitHub/Github.jsx'
import {fetchData} from './components/GitHub/Github.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[{
        path:'home',
        element: <Home />
      },
      {
        path:'about',
        element:<About />
      }
    ,
    {
      path:'contact',
      element:<Contact/>
    }
    ,{
      path:"git",
      element:<Github />,
      loader:fetchData
    }
    ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
