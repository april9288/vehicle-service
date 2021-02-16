import { createContext } from 'react';

export const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={{
            appData: true
        }}>
            {
                children
            }
        </GlobalContext.Provider>
    )
}