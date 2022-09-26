import React, { useState, createContext } from "react";

interface ModeProviderProps {
  children: React.ReactNode
}

export const ModeContext = createContext({ darkMode: true, setDarkMode: (darkMode: boolean) => { } });

export const ModeProvider = ({ children }: ModeProviderProps) => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};