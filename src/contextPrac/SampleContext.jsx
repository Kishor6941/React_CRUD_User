import { createContext } from "react";

export let sampleContext = createContext()


const SampleContainer = ({children}) => {
    let contextValue = {
        name : 'kishor'
    }
 return <sampleContext.Provider value={contextValue}>
    {children}
  </sampleContext.Provider>
}

export default SampleContainer