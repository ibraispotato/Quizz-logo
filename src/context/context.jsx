import React, { createContext, useState, useContext, useEffect } from "react";
// import EasyOne from "../inside/easy"
export const Context = createContext()

export const GetContext = ({ children }) => {
    const [text, SetText] = useState("")

    
    const [DataEasy, setDataEasy] = useState([
        {
            id: 1,
            // photo:`${EasyOne}/0556970c73-450.webp`
        }
    ])
    return (
        <Context.Provider value={{SetText,text}}>
            {children}
        </Context.Provider>
        
    )
}

export const useStateContext =() => useContext(Context)