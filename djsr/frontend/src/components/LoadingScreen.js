import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


const LoadingScreen = (props) => {

return(
    <Grid  
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}

    > 
    <CircularProgress size={250}  style={{
        'color': 'purple',

    }}/>
    </Grid>
)
}
export default LoadingScreen;