 import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProps {
    entries: Entry[];
    isAddingEntry: boolean;
    isDragging: boolean;
    addNewEntry: ( description: string ) => void;
    setIsAddingEntry: (adding: boolean) => void;
    updatedEntry: (entry: Entry, snackbar?: boolean) => void;
    delEntry: (entry: Entry, snackbar?: boolean) => void;
    startDragging: () => void;
    endDragging: () => void;
};


export const EntriesContext = createContext( {} as ContextProps );