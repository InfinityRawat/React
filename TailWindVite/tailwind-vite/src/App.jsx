import Cards from "./Cards"
function App() {

  const myName = "AR"

  const obj = {
      userName:"ARObj",
      age:21
  }

  return (
    <>
    <div align="center" className="bg-black text-white p-2" >
      <h1 className="bg-blend-color  border-r-black text-black p-4 rounded">Tailwind Cards</h1>
      <Cards name={myName} obj = {obj}/>
    
    </div>
    </>
  )
}

export default App
