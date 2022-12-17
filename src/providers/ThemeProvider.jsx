import {createContext, useMemo, useState} from "react";

export const ThemeContext = createContext({type:"light"});

export const ThemeProvider = ({children}) => {
    const [type,setType] = useState("dark");

    //для передачи данных о теме
    const value = useMemo(() => ({type,setType}),[type])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
