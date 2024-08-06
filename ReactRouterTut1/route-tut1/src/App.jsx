import { useState } from 'react'
import {Route,Routes,Link,NavLink } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  const [count, setCount] = useState(0)


  return (
    <> 
      <h1>Application running</h1>

      <NavLink to='/home' className={({isActive})=>(isActive?"text-orange-500":"text-blue-500")} > Go to home </NavLink><br />
      <NavLink to='/about' className={({isActive})=>{
          return isActive?"text-orange-500":"text-blue-500"
      }}   >Go to about</NavLink><br />
      <NavLink to='/' className={({isActive})=>{
           return isActive?"text-orange-500":"text-blue-500"
      }}>Go to Main page</NavLink>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/> } />
      </Routes>
    </>
  )
}

export default App
