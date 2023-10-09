import { createContext, useState } from 'react'

export const tokenContext = createContext()

export function TokenContextProvider(props) {
  const [token, setToken] = useState(null)

  return (
    <tokenContext.Provider
      value={{token, setToken}}
    >
      {props.children}
    </tokenContext.Provider>
  )
}
