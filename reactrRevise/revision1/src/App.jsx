import { useId,useState } from 'react'
import useGitApiData from './customHook/GitApiHook';
import UserInputBox from './component/UserInputBox';
import Revise from './component/Revise'

function App() {
  const nameId = useId();
  const selectNameId = useId();
  const [selectedField,setSelectedField] = useState("")
  const [name, setName] = useState("infinityRawat")
  

  const userGitInfo = useGitApiData(name);
  const options = Object.keys(userGitInfo)
  // console.log("selxected Name is :");
  const onFieldChange = (e)=>(
    setSelectedField(userGitInfo[e]) )

  return (
    <>
    <form  className='p-4 border-black ' 
    onSubmit={(e) => {
              e.preventDefault();
              
              }}>
      <UserInputBox 
      nameId={nameId}
      name={name}
       options={options}
       selectName={selectNameId}
        onFieldChange={onFieldChange} 
        setNewName={(e)=>(setName(e))}/>
      <input type="text"  disabled value={selectedField} className="p-14 border-b-4 shadow-lg"/>

      <input type="submit" value="submit" onClick={(e)=>{

        e.preventDefault();
        // setName("hitestChaudhary")
      }} />
      </form>
    </>
  )
}

export default App
