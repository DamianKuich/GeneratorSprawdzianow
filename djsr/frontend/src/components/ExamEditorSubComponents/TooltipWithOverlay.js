import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import style from "../assets/jss/material-kit-react/components/tooltipWithOverlayStyle";
import classNames from "classnames";
const useStyles = makeStyles(style);
const TooltipWithOverlay = (props) => {
  const { children, className, ...rest } = props;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();
  return (
    <Tooltip
      className={ className}
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      {...rest}
    >
      <div
        className={classNames({
          [classes.root]: true,
          [classes.activeRoot]: open,
        })}
      >
        {children}
      </div>
    </Tooltip>
  );
};

export default TooltipWithOverlay;
