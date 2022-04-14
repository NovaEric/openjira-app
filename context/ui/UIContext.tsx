 import { createContext } from 'react';


interface ContextProps {
      sidemenuOpen: boolean;
      swTheme: boolean;
      swThemeChange: () => void;
      openSideMenu: () => void;
      closeSideMenu: () => void;
};


export const UIContext = createContext( {} as ContextProps );