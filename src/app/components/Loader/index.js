/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Container, makeStyles, CircularProgress, Paper } from '@material-ui/core';
import { useWait } from 'src/app/utils';
const useStyles = makeStyles(theme => ({
    loaderContainer: {
        // backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30rem",
        height: "10rem",
        zIndex: 999


    },
    loaderWrapper: {
        width: "100%",
        height: "100%",
        position: "absolute",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",


    }
}));
export const Loader = (props) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true)
    const { wait } = useWait()

    const waitLoader = async () => {
        await wait(2000)
        setLoading(false)
    }

    useEffect(() => {
        waitLoader()
    }, [])
    return (
        <>

            {loading &&
                <div className={classes.loaderWrapper} >
                    <div className={classes.loaderContainer}>
                        <CircularProgress color="primary" />
                    </div>
                </div>


            }
        </>
    )
}


