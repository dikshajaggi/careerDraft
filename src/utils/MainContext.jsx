import React, { useState } from 'react'

const MainContext = React.createContext()

const MainContextProvider = ({children}) => {
    const [analyzed, setAnalyzed] = useState(false)
    const [analysedResult, setAnalysedResult] = useState(null)
  return (
   <MainContext.Provider
        value={{
            analyzed,
            setAnalyzed,
            analysedResult,
            setAnalysedResult
        }}
    >
        {children}
   </MainContext.Provider>
  )
}

export {MainContextProvider, MainContext}
