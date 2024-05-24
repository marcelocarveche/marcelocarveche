import { GlobalStyle } from '@/app/presentation/styles'
import React, { useContext } from 'react'

interface Context {}
interface GlobalProviderProps {
  children: React.ReactNode
}

const GlobalContext = React.createContext<Context>({})

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = React.useState()
  return (
    <GlobalContext.Provider value={{}}>
      <GlobalStyle />
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobal = () => useContext(GlobalContext)

export { GlobalProvider, useGlobal }
