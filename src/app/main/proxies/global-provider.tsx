import React, { useContext } from 'react'

interface Context {}
interface GlobalProviderProps {
  children: React.ReactNode
}

const GlobalContext = React.createContext<Context>({})

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}

const useGlobal = () => useContext(GlobalContext)

export { GlobalProvider, useGlobal }
