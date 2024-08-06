import React from "react";
import userContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) =>{
    // data which is going to shared between all componenets
    const [user, setUser] = useState(null)
        return(
            <userContext.Provider
            //  kis value ko access de rhe ho on provider
                value={{user,setUser}}
            >
                {children}
            </userContext.Provider>
        )
}

export default UserContextProvider;