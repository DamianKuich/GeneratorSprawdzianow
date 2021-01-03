import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import style from "../../assets/jss/material-kit-react/modalStyle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CustomDialogTitle from "./CustomDialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
const useStyles = makeStyles(style);

const CustomModal = ({ children, dialogTitle,dialogActionsChildren, ...props }) => {
  const { onClose } = props;
  const classes = useStyles();
  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      {...props}
    >
      <CustomDialogTitle onClose={onClose} title={dialogTitle} />
      <DialogContent
        id="classic-modal-slide-description"
        className={classes.modalBody}
      >
        {children}
      </DialogContent>
        <DialogActions className={classes.modalFooter}>
            {dialogActionsChildren}
        </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
