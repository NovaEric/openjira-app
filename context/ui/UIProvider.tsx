import { FC, useReducer } from 'react';
import { uiReducer, UIContext } from './';


export interface UIState { sidemenuOpen: boolean; swTheme: boolean };

const UI_INITIAL_STATE: UIState = { sidemenuOpen: false, swTheme: true };

export const UIProvider:FC = ({children}) => {

    const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' });
    }

    const swThemeChange = () => {
        dispatch({ type: 'UI - Theme Change' });
    }

    return (

        <UIContext.Provider value={{ 
            ...state,
            openSideMenu,
            closeSideMenu,
            swThemeChange,
         }}>
            {children}
        </UIContext.Provider>
    
    ) 
};

