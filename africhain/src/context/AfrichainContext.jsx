import { createContext } from "react";


export const AfrichainContext = createContext()

const AfrichainContextProvider = (props)=> {


    const value = {

    }


    return (
        <AfrichainContext.Provider  value={value} >
            {props.children}
        </AfrichainContext.Provider>
    )
}


export default AfrichainContextProvider