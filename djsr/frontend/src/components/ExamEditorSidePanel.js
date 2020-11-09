import React from "react";
import ResizePanel from "react-resize-panel";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sidePanel: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const ExamEditorSidePanel = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <ResizePanel direction="e" style={{flexGrow:1}}>
      <div className={classes.sidePanel}>{children}</div>
    </ResizePanel>
  );
};

export default ExamEditorSidePanel;
