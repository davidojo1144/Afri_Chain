import { createContext, useRef } from "react";


export const AfrichainContext = createContext()

const AfrichainContextProvider = (props)=> {

    const howItWorksRef = useRef(null)

    const scrollToHowItWorks = ()=> {
      howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })
    }



    const value = {
        howItWorksRef,
        scrollToHowItWorks
    }


    return (
        <AfrichainContext.Provider  value={value} >
            {props.children}
        </AfrichainContext.Provider>
    )
}


export default AfrichainContextProvider