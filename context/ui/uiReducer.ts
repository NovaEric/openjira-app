import { UIState } from './';


type UIActionType = | { type: 'UI - Open Sidebar' } | { type: 'UI - Close Sidebar' } | { type: 'UI - Theme Change' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sidemenuOpen: true,
            }
        case 'UI - Close Sidebar':
            return {
                ...state,
                sidemenuOpen: false,
            }
        case 'UI - Theme Change':
            return {
                ...state,
                swTheme: !state.swTheme,
            }     

        default:
            return state;
    }
};
