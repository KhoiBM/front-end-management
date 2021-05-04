import React from 'react'
import { Typography, Box, Paper, makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    notFoundContainer: {
        width: "100%",
        height: "auto",
        minHeight: "100% !important",
        // background: "red",
        // backgroundColor: "#fffbf2",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
        top: 0,
        color: theme.palette.primary.main,
        // border: "1px solid red"
    }
}));
export const NotFound = (props) => {
    const classes = useStyles();
    return (
        <>
            <Paper elevation={0} className={classes.notFoundContainer}>
                <Typography variant={"h6"}>Không tìm thấy</Typography>
            </Paper>
        </>
    )
}
