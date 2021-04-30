/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Container, makeStyles, CircularProgress, Paper, Typography, Box } from '@material-ui/core';
import { useWait } from 'src/app/utils';
import { IconClose } from '../IconClose';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const useStyles = makeStyles(theme => ({
    loaderContainer: {
        zIndex: props => props.zIndexValue ? `${props.zIndexValue} !important` : "1100 !important",
        width: "100%",
        height: "auto",
        minHeight: "100vh",
        position: "fixed",
        // top: 80,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",



    },
    loaderWrapper: {
        zIndex: props => props.zIndexValue ? `${props.zIndexValue} !important` : "1100 !important",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(3),
        width: "300px",
        height: "150px",
        // padding: "15px 15px",
        // border: "1px solid red",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",
        position: "relative",

        '&:hover': {
            transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }


    },
    iconCloseWrapper: {
        position: "absolute",
        top: theme.spacing(2),
        right: theme.spacing(0)
    }

}));
export const Loader = (props) => {

    const { loading, zIndexValue } = props
    const { status } = loading
    const classes = useStyles({ zIndexValue });
    // const { showLoader, hideLoader } = useLoaderHandle()

    // useEffect(() => {

    // }, [status])

    return (
        <>

            {
                status &&
                <div className={classes.loaderContainer} >
                    <div className={classes.loaderWrapper}>
                        {/* <Box className={classes.iconCloseWrapper} onClick={(e) => {
                            hideLoader()
                        }}>
                            <IconClose />
                        </Box> */}

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


