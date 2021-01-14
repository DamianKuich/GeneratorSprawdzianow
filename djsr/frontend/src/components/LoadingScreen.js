import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box";


const LoadingScreen = (props) => {
    const {children,message}=props
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
        {!!message && <Paper style={{marginTop:"20px"}}><Box p={2}><h3>{message}</h3></Box></Paper>}
        {!!children && children}
    </Grid>
)
}
export default LoadingScreen;