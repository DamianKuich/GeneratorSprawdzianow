import Grid from '@material-ui/core/Grid'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },

  }));

export default function LoadingScreenB() {
      const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.wrapper}>

            <CircularProgress mt={5} size={20} className={classes.buttonProgress} style={{
                'color': 'purple',

            }}/>

        </div>
    </div>

      
   
  );
}
