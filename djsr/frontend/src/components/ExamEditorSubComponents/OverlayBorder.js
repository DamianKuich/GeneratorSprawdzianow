import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import style from "../assets/jss/material-kit-react/components/tooltipWithOverlayStyle";


const useStyles = makeStyles(style);


const OverlayBorder = (props) => {
    const {className,children, ...rest}=props
    const classes= useStyles()
    return (
        <div className={ classes.activeRoot + " " + className } {...rest}>
            {children}
        </div>
    );
};

export default OverlayBorder;