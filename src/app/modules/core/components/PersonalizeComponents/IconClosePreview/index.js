/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, IconButton, Button } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri'

const useStyles = makeStyles(theme => ({
    // iconCloseWrapper: {
    //     position: "absolute",
    //     right: theme.spacing(2),
    //     top: theme.spacing(2),
    // display: 'flex',
    // justifyContent: "center",
    // alignItems: "center",
    // },
    iconClose: {
        width: "50px",
        height: "auto",
        fontSize: "1rem",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid rgb(0,0,0,0.23)",
        // borderRadius: "4px",
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
    },
    buttonClose: {
        width: "10px !important",
        height: "30px",
        // border: "1px solid rgb(0,0,0,0.23)",
    }
}))

export const IconClosePreview = (props) => {
    const classes = useStyles();
    return (
        <>
            {/* <div className={classes.iconCloseWrapper}> */}
            <div className={classes.iconClose} onClick={props.handleClose}>
                {/* <Button className={classes.buttonClose}> */}
                <RiCloseFill />
                {/* </Button> */}

            </div>
            {/* </div > */}
        </>
    )
}
