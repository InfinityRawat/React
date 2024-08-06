import { useState } from "react";


function App() {
  let [counter,setCounter] =  useState(1);

  function increaseCounter(){
    // counter=counter+1;
    // when we increase counter we use counter element
    counter<20?setCounter(counter+1):console.log("cannot go above 20"); 
  
  }

  
 function decreaseCounter(){
  counter>=0?setCounter(counter-1):console.log("cannot go below 0"); 
}
  
  return (
    <>
      <h1>using react {counter}</h1>
    
      <button id="counterUp" onClick={increaseCounter}>
        Go Up {counter}
      </button>

      <button id="counterDown" onClick={decreaseCounter}>
        Go Down {counter}
      </button>
    </>
  )
}

export default App
