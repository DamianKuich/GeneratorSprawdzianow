import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import styles from "../assets/jss/material-kit-react/components/overlayButtonStyle";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(styles);
const TaskOverlayButton = (props) => {
  const { className, children,tooltip, ...rest } = props;
  const classes = useStyles();
  const button = (
    <div className={classes.button + " " + className} {...rest}>
      {children}
    </div>
  );
  return (!!tooltip ? (<Tooltip title={tooltip} placement={"top"}>{button}</Tooltip>):button);
};

export default TaskOverlayButton;
