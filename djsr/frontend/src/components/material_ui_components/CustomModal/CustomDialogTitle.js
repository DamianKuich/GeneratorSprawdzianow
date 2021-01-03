import React from 'react';
import style from "../../assets/jss/material-kit-react/modalStyle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
const useStyles = makeStyles(style);

const CustomDialogTitle = ({ title,onClose, ...props }) => {
    const classes = useStyles();
    return (
        <DialogTitle disableTypography className={classes.modalHeader}>
            <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={onClose}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>{title}</h4>
        </DialogTitle>
    );
};

export default CustomDialogTitle;