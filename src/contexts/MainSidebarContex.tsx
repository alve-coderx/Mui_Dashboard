import { FC, useState, createContext } from 'react';
type MainSidebarContext = {
  mainSidebarToggle: any;
  toggleMainSidebar: () => void;
  closeMainSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MainSidebarContext = createContext<MainSidebarContext>(
  {} as MainSidebarContext
);

export const MainSidebarProvider: FC = ({ children }) => {
  const [mainSidebarToggle, setSidebarToggle] = useState(true);
  const toggleMainSidebar = () => {
    setSidebarToggle(!mainSidebarToggle);
  };
  const closeMainSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <MainSidebarContext.Provider
      value={{ mainSidebarToggle, toggleMainSidebar, closeMainSidebar }}
    >
      {children}
    </MainSidebarContext.Provider>
  );
};
