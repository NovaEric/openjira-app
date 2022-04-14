import { PlaylistAddOutlined } from '@mui/icons-material';
import { Entry } from '../../interfaces';
import { EntriesState } from './';


type EntriesActionType = 
| { type: '[Entry] Add-Entry', payload: Entry } 
| { type: '[Entry] isAddingEntry', payload: boolean }
| { type: '[Entry] startDragging' }
| { type: '[Entry] endDragging' }
| { type: '[Entry] Updated-Entry', payload: Entry }
| { type: '[Entry] Get-Entries', payload: Entry[] }
| { type: '[Entry] Del-Entry', payload: Entry }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case '[Entry] Add-Entry':
            return {
                ...state,
                entries: [ ...state.entries, action.payload ]
            }
        case '[Entry] isAddingEntry':
            return {
                ...state,
                isAddingEntry: action.payload
                
            }
        case '[Entry] startDragging':
            return {
                ...state,
                isDragging: true
            }    
        case '[Entry] endDragging':
            return {
                ...state,
                isDragging: false
            }    
        case '[Entry] Updated-Entry':
            return {
                ...state,
                entries: state.entries.map( entry => {

                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status
                        entry.description = action.payload.description
                    }

                    return entry;
                })
            }
        case '[Entry] Get-Entries':
            return {
                ...state,
                entries: [ ...action.payload ]
            }         
        case '[Entry] Del-Entry':
            return {
                ...state,
                entries: state.entries.filter( entry => entry._id !== action.payload._id )
            }         

        default:
            return state;
    }
};