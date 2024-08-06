import { useRef, useState } from "react";

function UserInputBox({
    nameId,
    options,
    onFieldChange,
    selectName,
    onNameChange,
    setNewName
}){

    const nameRef = useRef();
    const [localName, setLocalName] = useState('');
    return (<>
        <label htmlFor={nameId} className="p-4">Name</label>
        <input type="text" id={nameId} ref={nameRef} className="p-7 border-black"
          />
        <br />
        <label htmlFor={selectName}></label>
        <select id={selectName} 
        
         onChange={(e)=>( onFieldChange && onFieldChange(e.target.value))}>
                {
                    options.map(element => (
                        <option key={element} value={element}>
                                {element}
                        </option>
                    ))
                } 
        </select>
                <br />
        {/* <input type="text"  disabled value={selectedField} className="p-14 border-b-4 shadow-lg"/> */}
        <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500
         to-pink-600 hover:bg-gradient-to-br focus:ring-4
          focus:outline-none focus:ring-pink-300
           dark:focus:ring-pink-800 font-medium rounded-lg 
           text-sm px-5 py-2.5 text-center me-2 mb-2"
           onClick={()=>{
            let name = nameRef.current.value
            return setNewName(name?name:"infinityRawat")
            }} >GitUser</button>

    </>
    
    )
   
}

export default UserInputBox;