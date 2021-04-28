/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles, Grid, Box, Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    rootGridContainer: {
        width: "100%",
        height: "auto",
        minHeight: "10vh",
    },
    gridItem1: {
        width: "100%",
        height: "auto",
        // background: "orange",
        // border: "1px solid rgb(0,0,0,0.23)",
    },
    gridItem2: {
        width: "100%",
        height: "auto",
        // background: "red",
        // border: "1px solid rgb(0,0,0,0.23)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonActionWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(1)
    },
    button: {
        width: "10vw",
        height: "4vh",
        cursor: "pointer",
        border: "1px solid rgb(0,0,0,0.23)",
        // color: "#fff",
        // backgroundColor: theme.palette.primary.main,
        // backgroundColor: "#fff",
        '&:hover': {
            // backgroundColor: theme.palette.primary.main,
            // boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            transform: "scale(1.025)",
        }
    }

}))



export const ToolbarPersonalize = (props) => {
    const classes = useStyles();
    const { stageRef, handleExport, handleUpload } = props
    return (
        <>
            <Grid container className={classes.rootGridContainer}>
                <Grid item xs={10} sm={10} md={10} className={classes.gridItem1}>
                    <Box className={classes.filterWrapper}>

                    </Box>
                    <Box className={classes.historyWrapper}>

                    </Box>
                </Grid>
                <Grid item xs={2} sm={2} md={2} className={classes.gridItem2}>
                    <Box className={classes.buttonActionWrapper}>
                        <Button size="small" className={classes.button} onClick={handleUpload}>Lưu</Button>
                        <Button size="small" className={classes.button} onClick={handleExport}>Tải ảnh xuống</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
