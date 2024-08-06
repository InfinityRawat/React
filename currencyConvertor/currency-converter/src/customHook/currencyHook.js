import { useState, useEffect} from "react"

function useCurrencyConvertor(currency){
    const [data,setData] = useState({});
        useEffect(()=>{
                console.log("Use Effect Run here ----------------------");
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((responseText)=>responseText.json())
            .then((resonseJson)=>{
                console.log(resonseJson.currency);
                setData(resonseJson[currency]);
            }).catch((Error)=>console.log(Error))
        },[currency])
        return data;
}

export default useCurrencyConvertor;