/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, CardMedia, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        width: "100%",
        height: "auto",
        minHeight: "15vh",
        maxHeight: "15vh",
        // backgroundColor: "blue",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
        padding: theme.spacing(2)


    },

    title: {
        // color: theme.palette.primary.light,
    },
    titleBar: {
        // background: "rgba(0, 0, 0, 0.23)"
    },
    rootGrid: {
        width: "100%",
        height: "auto",
        minHeight: "15vh",
        maxHeight: "15vh",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid blue",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
    },
    gridItemGridList: {
        // backgroundColor: "blue",
        // border: "1px solid blue",
        width: "100%",
        height: "15vh",
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    rootGridList: {
        // width: "100%",
        display: 'flex',
        // flexWrap: 'nowrap',
        // justifyContent: 'space-around',
        overflow: "scroll",

        backgroundColor: theme.palette.background.paper,
        // border: "1px solid red",
        // border: "1px solid rgba(0, 0, 0, 0.23)",

    },
    gridList: {
        // width: "auto",
        width: "100% !important",
        height: "15vh",
        display: 'flex',
        // justifyContent: "space-between !important",
        justifyContent: "flex-start !important",
        alignItems: "center",
        flexWrap: 'nowrap',
        gap: theme.spacing(2),
        // border: "1px solid red",
        // backgroundColor: "blue",

    },
    cardMedia: {
        objectFit: "contain",
        maxWidth: "80%",
        maxHeight: "80%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid blue",

    },
    gridListTile: {
        overflow: "scroll !important",
        width: "100px !important",
        height: "auto",
        maxHeight: "10vh !important",
        display: 'flex',
        justifyContent: "center !important",
        alignItems: "center",
        border: "1px solid rgba(0, 0, 0, 0.23)",

        '& .MuiGridListTile-tile': {
            display: 'flex',
            // justifyContent: "center !important",
            alignItems: "center !important",
            // border: "1px solid red",

        }
    }
}))


export const GridSelectPhotoList = (props) => {
    const classes = useStyles();

    const { photoList, setBgPhoto } = props


    useEffect(() => {
        loadInit()
    }, [photoList])


    const loadInit = () => {
        console.log("GridSelectPhotoList:" + JSON.stringify(photoList))
        if (photoList && photoList != null) setBgPhoto(photoList[0])

    }


    return (
        <>
            <Paper className={classes.rootContainer} elevation={0}>

                <Grid container className={classes.rootGrid} >

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemGridList}>
                        <div className={classes.rootGridList}>
                            <GridList className={classes.gridList} cols={2.5} spacing={0} >
                                {photoList && photoList != null && photoList.length > 0 && photoList.map((url, index) => (
                                    <GridListTile key={index} className={classes.gridListTile}>
                                        <img
                                            className={classes.cardMedia}
                                            src={url}
                                            onClick={() => {
                                                setBgPhoto(url)
                                            }}
                                        />
                                    </GridListTile >
                                ))}
                            </GridList >
                        </div>
                    </Grid>

                </Grid>

            </Paper >
        </>
    )
}

