import React from 'react'
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export default function Notification(props){

    const {notification, setNotification} = props;

    return (
        <Snackbar
        open = {notification.isOpen}
        autoHideDuration ={30}
        >
            <Alert severity={notification.type}>
                {notification.message}
            </Alert>
        </Snackbar>
    )


}