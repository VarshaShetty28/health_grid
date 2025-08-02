import { createContext } from "react";


export const DoctersContext = createContext()

const DoctersContextProvider = (props)=> {

    const value = {

    }
    return(
        <DoctersContext.Provider value={value}>
            {props.children}
        </DoctersContext.Provider>
    )

}

export default DoctersContextProvider