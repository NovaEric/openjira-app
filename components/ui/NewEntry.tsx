import { Box, Button, TextField } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCommentOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';


export const NewEntry = () => {

    const [isTouched, setIsTouched] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const { addNewEntry, isAddingEntry, setIsAddingEntry } = useContext(EntriesContext);

    const reset = () => {
        setInputValue('');
        setIsAddingEntry(false);
        setIsTouched(false);
    };

    const onTextFieldChange = ( event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value );
    };

    const onSave = () => {

        if (inputValue.length === 0) return;

        addNewEntry(inputValue);
        reset()
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }} >

            {

                !isAddingEntry
                    ? (

                        <Button
                            startIcon={<AddCardIcon />}
                            fullWidth
                            variant='outlined'
                            onClick={ () => setIsAddingEntry(true)}
                            
                            > Add

                        </Button>
                    )
                    : (
                        
                        <>
                            <TextField
                                fullWidth
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                placeholder='Add new entry'
                                autoFocus
                                multiline
                                label='New Entry'
                                error={ inputValue.length <= 0 && isTouched }
                                value={ inputValue }
                                onChange={ onTextFieldChange }
                                onBlur={ () => setIsTouched(true ) }
                                
                                />

                            <Box display='flex' justifyContent='space-between' >

                                <Button
                                    variant='outlined'
                                    color='error'
                                    endIcon={<CancelPresentationOutlinedIcon />}
                                    onClick={ reset }

                                > Cancel
                                </Button>

                                <Button
                                    variant='outlined'
                                    color='success'
                                    endIcon={<SaveAltOutlinedIcon />}
                                    onClick={ onSave }

                                > Save
                                </Button>

                            </Box>
                        </>
                    )
            }

        </Box>
    )
}
