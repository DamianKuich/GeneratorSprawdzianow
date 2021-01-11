import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import styles from "../assets/jss/material-kit-react/components/overlayButtonStyle";

const useStyles = makeStyles(styles);
const TaskOverlayButton = (props) => {
  const { className, children, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={classes.button + " " + className} {...rest}>
      {children}
    </div>
  );
};

export default TaskOverlayButton;
