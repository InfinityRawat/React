import React,{useContext} from "react";
import userContext from "../context/UserContext";
    
function Profile(){
    const {user} = useContext(userContext)

    if(!user){
        return (<>Please login first!</>)}
    
    return(<><h2>Welcome {user.username}</h2></>)
}

export default Profile;