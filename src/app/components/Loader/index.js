/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Container, makeStyles, CircularProgress, Paper, Typography, Box } from '@material-ui/core';
import { useWait } from 'src/app/utils';
const useStyles = makeStyles(theme => ({
    loaderContainer: {
        width: "100%",
        height: "auto",
        minHeight: "100vh",
        position: "fixed",
        top: 0,
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000

    },
    loaderWrapper: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(3),
        width: "30rem",
        height: "10rem",
        zIndex: 1000,
        padding: "15px 15px",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",

        '&:hover': {
            transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }


    }

}));
export const Loader = (props) => {
    const classes = useStyles();
    const { loading } = props
    const { status } = loading

    return (
        <>

            {
                status &&
                <div className={classes.loaderContainer} >
                    <div className={classes.loaderWrapper}>
                        <Typography variant={"subtitle1"}>Đang tải...</Typography>
                        <Box>
                            <CircularProgress color="primary" />
                        </Box>

                    </div>
                </div>


            }

        </>
    )
}


