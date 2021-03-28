/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, CardMedia } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { useHttpModuleAWS } from 'src/app/services';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        width: "100%",
        height: "100%",
        // backgroundColor: "blue",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
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
    },
    gridItemShowPhoto: {
        width: "100%",
        height: "60vh",
        // background: "red",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    gridItemGridList: {
        backgroundColor: "blue",
        width: "100%",
        height: "12rem",
        display: 'flex',
        // justifyContent: "center",
        // alignItems: "center"
        // padding: theme.spacing(3)
    },
    rootGridList: {
        width: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",

        border: "1px solid red",
        gap: 0
    },
    gridList: {
        width: "101%",
        height: "12rem",
        // backgroundColor: "blue",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        display: 'flex',
        flexWrap: 'nowrap',
        gap: theme.spacing(1),
    },
    cardMedia: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
        width: 'auto',
        height: 'auto'
    },
    cardMediaShow: {

        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
        width: 'auto',
        height: 'auto'
    },
    gridListTile: {
        // width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
        '& .MuiGridListTile-tile': {
            display: "flex",

        }
    }
}))


export const GridPhotoList = (props) => {
    const classes = useStyles();


    const { photoList } = props

    const [photoToShow, setPhotoToShow] = useState()


    useEffect(() => {
        // loadInit()


    }, [])
    const loadInit = () => {
        console.log(photoList && photoList[0])
        setPhotoToShow(photoList && photoList[0])
    }
    return (
        <>


            <Paper className={classes.rootContainer} elevation={0}>

                <Grid container className={classes.rootGrid} >

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
                                {photoList && photoList.map((url, index) => (
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
