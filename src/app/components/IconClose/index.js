/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri'

const useStyles = makeStyles(theme => ({
    iconCloseWrapper: {
        position: "absolute",
        right: theme.spacing(2),
        top: theme.spacing(2),
    },
    iconClose: {
        color: "var(--primary-color-main)",
        // color: "var(--secondary-color-main)",
        transform: "scale(2)",
        transition: " all 0.3s ease 0s",
        '&:hover': {
            color: "var(--primary-color-dark)",
            // color: "var(--secondary-color-main)",
        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
            // transform: "scale(5)",
        }
    }
}))

export const IconClose = (props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.iconCloseWrapper}>
                <div className={classes.iconClose} onClick={props.handleClose}>
                    <RiCloseFill />
                </div>
            </div >
        </>
    )
}
