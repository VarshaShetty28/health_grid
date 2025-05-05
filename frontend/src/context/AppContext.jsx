//It simplifies state sharing across multiple components 
// without prop drilling, making global state management easier


import { createContext } from "react";
import { doctors } from '../assets/assets'
export const AppContext = createContext()
const AppContextProvider = (props) => {
        const currencySymb = '$'
        const value = {
                doctors,
                currencySymb
        }
        return(
                <AppContext.Provider value={value}>
                        {props.children}
                </AppContext.Provider>
        )
}

export default AppContextProvider