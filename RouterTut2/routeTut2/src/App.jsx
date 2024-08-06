import { useState } from 'react'
import {Outlet,Link} from 'react-router-dom'
import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<nav>
      <ul>
        <li><Link to="home">Home</Link></li>
        <li><Link to="Product">Product</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
        
        </nav>
        <h1> this is My App:</h1>

        <Outlet />
    
    </>
  )
}

export default App
