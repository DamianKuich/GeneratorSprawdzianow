import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import withStyles from "@material-ui/core/styles/withStyles";
const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const TaskToolTip = (task) => {
    const classes= useStyles();
    return (
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </HtmlTooltip>
    );
};

export default TaskToolTip;