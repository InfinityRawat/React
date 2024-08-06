
import React, { useContext } from "react";

export const themeContext = React.createContext({
    themeMode:'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});

export const ThemeContextProvider = themeContext.Provider

export default function useTheme(){
        return useContext(themeContext)
}