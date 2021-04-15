import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    deleteIcon: {
        color: "red"
    },
    rejectIcon: {
        color: "red"
    },
    acceptIcon: {
        color: "green"
    },
}));

export const useCustomStyles = () => {

    const classesCustom = useStyles();

    return { classesCustom }
}
