import React from 'react'
import {Snackbar} from '@material-ui/core/Snackbar'
import {Alert} from '@material-ui/core/Alert'

export default function Notification(props){

    const {notification, setNotification} = props;

    return (
        <Snackbar>
            <Alert>
                
            </Alert>
        </Snackbar>
    )


}