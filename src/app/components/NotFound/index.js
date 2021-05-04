import React from 'react'
import { Typography, Box, Paper, makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    notFoundContainer: {
        width: "100%",
        height: "100px",
        // background: "red",
        backgroundColor: "#fffbf2",
        margin: "0 auto",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
        // top: 0,
        color: theme.palette.primary.main
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
