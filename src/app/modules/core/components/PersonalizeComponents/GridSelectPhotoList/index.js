/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, CardMedia, Divider, Box } from '@material-ui/core';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

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
        padding: theme.spacing(2),
        // backgroundColor: "#f7f3e9 !important",

        // backgroundColor: "var(--tertiary-color-main) !important",
        backgroundColor: "#fff !important",


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
        // backgroundColor: "#f7f3e9 !important",
        // background: "var(--tertiary-color-main) !important",
        backgroundColor: "#fff !important",
    },
    gridItemGridList: {
        // backgroundColor: "blue",
        // border: "1px solid blue",
        width: "100%",
        height: "15vh",
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "center",
        // backgroundColor: "#f7f3e9 !important",
        // background: "var(--tertiary-color-main) !important",
    },
    rootGridList: {
        // width: "100%",
        display: 'flex',
        // flexWrap: 'nowrap',
        // justifyContent: 'center',
        overflow: "scroll",

        // backgroundColor: theme.palette.background.paper,
        // border: "1px solid red",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        // background: "var(--tertiary-color-main) !important",

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
        padding: theme.spacing(2),
        // backgroundColor: "blue",
        // backgroundColor: "#f7f3e9 !important",

        // backgroundColor: "var(--tertiary-color-main) !important",

    },
    cardMedia: {
        objectFit: "contain",
        maxWidth: "90%",
        maxHeight: "90%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid blue",

    },
    gridListTile: {
        overflow: "scroll !important",
        width: "100px !important",
        height: "100px !important",
        // maxHeight: "10vh !important",
        display: 'flex',
        justifyContent: "center !important",
        alignItems: "center",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        // backgroundColor: "#fff !important",
        // background: "var(--tertiary-color-main) !important",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",

        '&:hover': {
            transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        },
        '& .MuiGridListTile-tile': {
            display: 'flex',
            // justifyContent: "center !important",
            alignItems: "center !important",
            // border: "1px solid red",
            // background: "var(--tertiary-color-main) !important",

        }
    }
}))


export const GridSelectPhotoList = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

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
            <Box className={classes.rootContainer} elevation={0}>

                <Grid container className={classes.rootGrid} >

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemGridList}>
                        <div className={classes.rootGridList}>
                            <GridList className={classes.gridList} cols={2.5} spacing={0} >
                                {photoList && photoList != null && photoList.length > 0 && photoList.map((url, index) => (
                                    <GridListTile key={index} className={classes.gridListTile}>
                                        <img
                                            className={classes.cardMedia}
                                            src={url}
                                            onClick={(e) => {
                                                // setBgPhoto(url)
                                                setBgPhoto(e.target.src)
                                            }}
                                        />
                                    </GridListTile >
                                ))}
                            </GridList >
                        </div>
                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

