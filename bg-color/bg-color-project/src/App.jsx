import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen duration-100 ' style={{backgroundColor:color}} >
        <div className='fixed flex-wrap justify-center bottom-12 inset-x-5
          px-2' >
            <div className='flex flex-wrap justify-center gap-5 
            shadow-lg bg-white px-3 py-3 rounded-lg' >
              <button className='outline-none px-6 bg-red-500' onClick={()=>setColor("red")} >Red</button>
              <button className='outline-none px-6 bg-green-500' onClick={()=>setColor("green")}>Green</button>
              <button className='outline-none px-6 bg-blue-500'onClick={()=>setColor("blue")}>blue</button>
              <button className='outline-none px-6 bg-yellow-500'onClick={()=>setColor("yellow")}>yellow</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
