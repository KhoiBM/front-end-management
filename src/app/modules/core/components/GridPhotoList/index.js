/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, CardMedia, Divider } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    rootContainer: {
        width: "100%",
        height: "100%",
        // backgroundColor: "blue",

    },

    title: {
        // color: theme.palette.primary.light,
    },
    titleBar: {
        // background: "rgba(0, 0, 0, 0.23)"
    },
    rootGrid: {
        width: "100%",
        minHeight: "700px",
        height: "auto",
        // border: "1px solid red",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
    },
    gridItemShowPhoto: {
        width: "100%",
        height: "70vh",
        // background: "red",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
    },
    gridItemGridList: {
        // backgroundColor: "blue",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        width: "100%",
        height: "14rem",
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    rootGridList: {
        width: "100%",
        display: 'flex',
        // flexWrap: 'nowrap',
        // justifyContent: 'space-around',

        backgroundColor: theme.palette.background.paper,
        // border: "1px solid red",
        // border: "1px solid rgba(0, 0, 0, 0.23)",

    },
    gridList: {
        // width: "auto",
        width: "130%",
        height: "12rem",
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
        maxWidth: "100%",
        maxHeight: "100%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid blue",

    },
    cardMediaShow: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
        width: 'auto',
        height: 'auto'
    },
    gridListTile: {
        // // width: "100px",
        // // minWidth: "100%",
        // display: 'flex',
        // justifyContent: "center !important",
        // alignItems: "center",
        // border: "1px solid rgba(0, 0, 0, 0.23)",

        // '& .MuiGridListTile-tile': {
        //     display: 'flex',
        //     justifyContent: "center !important",
        //     alignItems: "center",
        //     // border: "1px solid ",
        //     // borderColor: theme.palette.primary.main

        // }
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


export const GridPhotoList = (props) => {
    const classes = useStyles();

    const { photoList } = props

    const [photoToShow, setPhotoToShow] = useState()


    useEffect(() => {
        loadInit()
    }, [photoList])


    const loadInit = () => {
        // console.log("GridPhotoList:" + JSON.stringify(photoList))
        if (photoList && photoList != null) setPhotoToShow(photoList[0])

    }


    return (
        <>
            <Paper className={classes.rootContainer} elevation={0}>

                <Grid container className={classes.rootGrid} spacing={5}>

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemShowPhoto}>

                        <img
                            className={classes.cardMediaShow}
                            src={photoToShow}
                            onClick={() => {

                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemGridList}>
                        <div className={classes.rootGridList}>
                            <GridList className={classes.gridList} cols={2.5} spacing={0} >
                                {photoList && photoList != null && photoList.length > 0 && photoList.map((url, index) => (
                                    <GridListTile key={index} className={classes.gridListTile}>
                                        <img
                                            className={classes.cardMedia}
                                            src={url}
                                            onClick={() => {
                                                setPhotoToShow(url)
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
