import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const tokenContext = createContext()

export function TokenContextProvider(props) {
  const navigate = useNavigate(); 
  const [token, setToken] = useState(null)
  function logout() {
    setToken(null)
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <tokenContext.Provider
      value={{token, setToken, logout}}
    >
      {props.children}
    </tokenContext.Provider>
  )
}
