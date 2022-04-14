import { List, Paper } from '@mui/material';
import { FC, useContext, useMemo, DragEvent } from 'react';
import { EntryStatus } from '../../interfaces';
import {EntryCard} from './';
import { EntriesContext } from '../../context/entries/EntriesContext';
import styles from './EntryList.module.css';


interface Props { status: EntryStatus; };

export const EntryList:FC<Props> = ({ status }) => {


  const { entries, isDragging, updatedEntry, endDragging } = useContext( EntriesContext );

  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [entries, status]);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {

    event.preventDefault();

  }

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {

    const id = event.dataTransfer.getData( 'text');

    const entry = entries.find( e => e._id === id)!;
    entry.status = status;
    updatedEntry(entry);
    endDragging();
    
  }

  return (
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
      className={ isDragging ? styles.dragging : '' }
    >

        <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: '#C0C0C0' }} >
            <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s', padding: '5px' }}>
                {
                  entriesByStatus.map( _entry => (
                    <EntryCard key={ _entry._id } entry={ _entry } />
                  ))
                }
            </List>
        </Paper>

    </div>
  )
}
