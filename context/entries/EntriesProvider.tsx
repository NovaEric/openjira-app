import { FC, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { entriesReducer, EntriesContext } from './';
import entriesApi from '../../apis/entriesApi';
import { useSnackbar } from 'notistack';


export interface EntriesState {
    entries: Entry[];
    isAddingEntry: boolean;
    isDragging: boolean;
};

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
    isAddingEntry: false,
    isDragging: false,
};

export const EntriesProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const { enqueueSnackbar } = useSnackbar();

    const addNewEntry = async (description: string) => {

        const { data } = await entriesApi.post<Entry>('/entries', { description });

        dispatch({ type: '[Entry] Add-Entry', payload: data });
    };


    const updatedEntry = async ({ _id, description, status }: Entry, showSnackbar = false) => {

        try {

            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });

            dispatch({ type: '[Entry] Updated-Entry', payload: data });

            if ( showSnackbar ) { 

                enqueueSnackbar('Entry updated', {

                    variant: 'success',
                    autoHideDuration: 2000,
                    anchorOrigin: { vertical: 'bottom', horizontal: 'left' }
                    
                })
            }


        } catch (error) {
            console.log({ error });
        }
    };


    const setIsAddingEntry = (adding: boolean) => { dispatch({ type: '[Entry] isAddingEntry', payload: adding }); };

    const startDragging = () => { dispatch({ type: '[Entry] startDragging' }); };
    const endDragging = () => { dispatch({ type: '[Entry] endDragging' }); };


    const getEntries = async () => {

        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: '[Entry] Get-Entries', payload: data });
    };

    const delEntry = async({ _id }: Entry, showSnackbar = false ) => {

        try {

            const { data } = await entriesApi.delete<Entry>(`/entries/${_id}`);

            dispatch({ type: '[Entry] Del-Entry', payload: data });

            if (showSnackbar) {

                enqueueSnackbar('Entry deleted', {

                    variant: 'error',
                    autoHideDuration: 2000,
                    anchorOrigin: { vertical: 'bottom', horizontal: 'left' }

                })
            }


        } catch (error) {
            console.log({ error });
        }
    }

    useEffect(() => {
        getEntries();
    }, []);



    return (

        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            setIsAddingEntry,
            startDragging,
            endDragging,
            updatedEntry,
            delEntry
        }}
        >
            {children}
        </EntriesContext.Provider>

    )
};