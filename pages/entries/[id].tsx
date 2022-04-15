import { useState, ChangeEvent, useMemo, FC, useContext } from 'react';
import { GetServerSideProps } from 'next';

import { Button, capitalize, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Link, Radio, RadioGroup, TextField } from '@mui/material';

import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { EntriesContext } from '../../context/entries';
import { dbEntries } from '../../database';
import { Layout } from '../../components/layouts';
import { Entry, EntryStatus } from '../../interfaces';
import NextLink from 'next/link';
import { dateFunctions } from '../../utils';



const validStatus: EntryStatus[] = ['pending', 'in-progress', 'completed'];

interface Props { entry: Entry };

export const EntryPage: FC<Props> = ({ entry }) => {


    const [inputValue, setInputValue] = useState(entry.description);
    const [radioStatus, setRadioStatus] = useState<EntryStatus>(entry.status);
    const [radioTouched, setRadioTouched] = useState(false);

    const isNotValid = useMemo(() => inputValue.length <= 0 && radioTouched, [inputValue, radioTouched]);

    const { updatedEntry } = useContext(EntriesContext);

    const onTextChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onStatusChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setRadioStatus(event.target.value as EntryStatus);

    }

    const onSave = () => {

        if (inputValue.trim().length === 0) return;

        updatedEntry({
            ...entry,
            status: radioStatus,
            description: inputValue
        }, true);

    }

    return (

        <Layout title='Edit Entry' >
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6} >
                    <Card>
                        <CardHeader title={`Entry: ${inputValue}`} subheader={ `created ${dateFunctions.getFormatDistanceToNow( entry.createdAt )} ago` } />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Edit Entry'
                                autoFocus
                                multiline
                                label='Edit Entry'
                                value={inputValue}
                                onBlur={() => setRadioTouched(true)}
                                onChange={onTextChanges}
                                helperText={isNotValid && 'Add some text'}
                                error={isNotValid}
                            />

                            <FormControl>
                                <FormLabel> Status </FormLabel>
                                <RadioGroup
                                    row
                                    value={radioStatus}
                                    onChange={onStatusChanges}

                                >
                                    {
                                        validStatus.map(option => (
                                            <FormControlLabel
                                                key={option}
                                                value={option}
                                                control={<Radio />}
                                                label={capitalize(option)}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={<SaveAltOutlinedIcon />}
                                variant='contained'
                                fullWidth
                                onClick={onSave}
                                disabled={inputValue.length <= 0}
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>

            <NextLink href='/' passHref >
                <Link>
                    <IconButton
                        sx={{
                            position: 'fixed',
                            bottom: 30,
                            right: 30,
                            border: '1px solid black'
                        }}
                    >

                        <ArrowBackIosNewIcon color='primary' />
                    </IconButton>
                </Link>
            </NextLink>
        </Layout>
    )
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=0, stale-while-revalidate=59',
      )

    const { id } = params as { id: string };

    const entry = await dbEntries.getEntryById(id);


    if (!entry) {

        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }

    }

    return {
        props: {
            entry: entry
        }
    }
}

export default EntryPage;