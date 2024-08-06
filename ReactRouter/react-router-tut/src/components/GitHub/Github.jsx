import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


export default GitHub=>{
    // const [userData, setUserData] = useState("")
    //     useEffect(()=>{

    //         fetch('https://api.github.com/users/hiteshchoudhary ')
    //         .then((Response)=> Response.json())
    //         .then((Response)=>(setUserData(Response)))
    //     },[])
    const userData=  useLoaderData()
        return(
            <>
                <div className="bg-gray-500 p-4">
                <h1 className="text-center text-4xl text-white">GitHub</h1>
                <p className="text-green-300 text-6xl text-right">Followers: {userData.followers}</p>
                <img src={userData.avatar_url} alt="Git Pic" />
                
                </div>
            </>
        )
}

export const fetchData= async()=>{
  const Response = await fetch('https://api.github.com/users/hiteshchoudhary ')
            
    return Response.json();
}