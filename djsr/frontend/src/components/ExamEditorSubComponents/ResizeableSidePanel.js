import React from "react";
import ResizePanel from "react-resize-panel";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  sidePanel: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const ResizeableSidePanel = ({children, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <ResizePanel direction="e" style={{ flexGrow: 1 }}>
      <Box className={classes.sidePanel} boxShadow={3}>{children}</Box>
    </ResizePanel>
  );
};

export default ResizeableSidePanel;
