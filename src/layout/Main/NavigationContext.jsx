import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationContext = createContext();

export function useGlobalNavigate() {
  return useContext(NavigationContext);
}

export function NavigationProvider({ children }) {
  const navigate = useNavigate();

  return (
    <NavigationContext.Provider value={navigate}>
      {children}
    </NavigationContext.Provider>
  );
}
