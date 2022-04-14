import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from '../components/ui';


const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>

      <NewEntry/>

      <Grid container spacing={2} >

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)'}}>

            <CardHeader style={ { color: '#28B463 '}} title='Pendings..' />
            <EntryList status='pending' />

          </Card>
        </Grid>
        <Grid item xs={12} sm={4}  >
          <Card sx={{ height: 'calc(100vh - 100px)'}}>

            <CardHeader style={ { color: '#A9FD34 ' }} title='In Progress...' />
            <EntryList status='in-progress' />

          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)'}}>

            <CardHeader style={ { color: '#02FD99'}} title='Completed' />
            <EntryList status='completed' />

          </Card>
        </Grid>

      </Grid>

    </Layout>
     )
}

export default HomePage
