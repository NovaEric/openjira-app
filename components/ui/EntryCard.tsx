import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { DragEvent, FC, useContext } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { useRouter } from 'next/router';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { dateFunctions } from '../../utils';



interface Props { entry: Entry };

export const EntryCard:FC<Props> = ({entry}) => {

  const router = useRouter();

  const {startDragging, endDragging, delEntry} = useContext(EntriesContext);


  const onDragStart = (event: DragEvent) => {
    
    event.dataTransfer.setData( 'text', entry._id );
    startDragging()
    
  }

  const onDragEnd = () => {
    endDragging()
  }

  const onCardClick = () => {
    router.push(`/entries/${ entry._id }`);
  }

  const test = () => {
    delEntry(entry, true )
  }


  return (
    <Card 
      onDoubleClick={ onCardClick }
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={ onDragStart }
      onDragEnd={ onDragEnd }
      
    >

        <CardActionArea sx={{ border: '1px solid '}}>


            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
            </CardContent>

            <CardActions  sx={{ display: 'flex', justifyContent: 'space-between' , paddingRight: 2 }}>
                <DeleteForeverOutlinedIcon  onClick={test} color='error' sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right'  }} />
                <Typography variant='body2'> { `created ${dateFunctions.getFormatDistanceToNow( entry.createdAt )} ago` } </Typography>
            </CardActions>

        </CardActionArea>

    </Card>
  )
}
