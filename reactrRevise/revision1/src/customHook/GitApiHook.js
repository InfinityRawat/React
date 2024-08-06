import {useEffect, useState} from 'react'


function useGitApiData(user){

const [userInfo,setUserInfo] = useState("null");


    useEffect(()=>{
        let url = "https://api.github.com/users/"+user
        console.log(url);
            fetch(url)
            .then((resp)=>resp.json())
            .then((resp)=>{
                console.log(resp);
                setUserInfo(resp)
            } )
            .catch((Error)=>{
                console.log("Error while fetching resource:  "+Error);
            })

    },[user])
    return userInfo;

}

export default useGitApiData