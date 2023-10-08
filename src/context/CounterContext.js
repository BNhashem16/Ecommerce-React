import { createContext } from 'react'

const counterContext = createContext()

export function CounterContextProvider(props) {
    let counter = 0
  return (
    <counterContext.Provider
      value={{
        counter: counter,
      }}
    >
      {props.children}
    </counterContext.Provider>
  )
}
