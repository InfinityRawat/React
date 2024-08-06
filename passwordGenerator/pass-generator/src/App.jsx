import { useState, useCallback, useEffect, useRef } from "react";
import './App.css'

function App() {
  let [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) string+="0123456789";
    if(characterAllowed) string+="!@#$%^&*()_+{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *string.length +1);
      pass +=string.charAt(char);
    }

    setPassword(pass);
  },[length,characterAllowed,numberAllowed,setPassword])


  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed])

  return (
    <> 
      <div className="bg-slate-500 w-full max-w-md mx-auto shadow-lg rounded-lg px-8 my-20 text-orange-400 border-t-stone-950">
       <h1 className=" text-center my-3">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden bg-orange-300 mb-3 my-4 px-3">
          <input type="text" value={password} className="outline-none w-full rounded-lg py-1 px-3" 
           ref={passwordRef} placeholder="password"
          />
          <button className=" outline-none text-red-50 px-3 py-0.5"
            onClick={()=>copyPasswordToClipBoard()}
          >COPY</button>
        </div>
        <div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center ">
              <input type="range" min={8} max={50}
              value={length} className="cursor-pointer" id="range"
                onChange={(event)=>{setLength(event.target.value)}}
              />
              <label htmlFor="range">Length:{length}</label>
            </div>
            <div className="flex text-sm gap-3">
               <input type="checkbox"  id="number" onChange={()=>setNumberAllowed(prev=>!prev)}/>
               <label htmlFor="number">Use Number</label>
             </div>
             <div className="flex text-sm gap-3">
               <input type="checkbox"  id="chars" onClick={()=>setCharAllowed(prev=>!prev)}/>
               <label htmlFor="chars">Use Character</label>
             </div>
          </div>
        </div>
        Testing 
      </div>
    </>
  )
}

export default App
