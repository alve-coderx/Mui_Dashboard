import React, { useState, createContext,useEffect } from "react";

interface ModeProviderProps {
  children: React.ReactNode
}

export const ModeContext = createContext({ darkMode: true, setDarkMode: (darkMode: boolean) => { } });

export const ModeProvider = ({ children }: ModeProviderProps) => {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');
  
  useEffect(()=>{
    localStorage.setItem('dark-mode', JSON.stringify(darkMode));
  },[darkMode])
  
  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};