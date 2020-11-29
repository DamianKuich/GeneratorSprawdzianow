import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 550,
    maxWidth: 550,
    maxHeight: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  marginAutoItem: {
    margin: 'auto'
  },
 
}));

export default function RecipeReviewCard() {
  const classes = useStyles();


  return (
    <p>
    <Box display="flex"
    justifyContent="center"
    alignItems="center"> 
    <Card m="auto"   alignItems="center"
  justify="center" className={classes.root}>
      <CardHeader
       
        title="123456789123456890012345678901234567890"
       
      />
    
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share" >
          <FileCopyIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
      
      </CardActions>
    
    </Card>
    </Box>
    </p>
  );
}
