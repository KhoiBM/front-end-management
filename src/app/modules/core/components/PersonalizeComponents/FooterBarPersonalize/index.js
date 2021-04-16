/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { makeStyles, Grid, Paper, GridList, GridListTile } from '@material-ui/core';
import { GridSelectPhotoList } from '../GridSelectPhotoList';
import { GridBackgroudPhotoList } from '../GridBackgroudPhotoList';
const useStyles = makeStyles(theme => ({
    rootGridContainer: {
        width: "100%",
        height: "auto",
        minHeight: "15vh",
        maxHeight: "15vh",
        // background: "red",
    },
    gridItem1: {
        width: "100%",
        height: "auto",
        minHeight: "15vh",
        maxHeight: "15vh",
        // background: "green",
    }
}))

export const FooterBarPersonalize = (props) => {
    const classes = useStyles();

    const { recordForFooterBarPersonalize, setBgPhoto } = props

    // const { categoryCode, rawProductCode, createdBy } = recordForFooterBarPersonalize

    useEffect(() => {
        console.log("recordForFooterBarPersonalize: " + JSON.stringify(recordForFooterBarPersonalize))
    }, [recordForFooterBarPersonalize])


    return (
        <>
            <Grid container className={classes.rootGridContainer}>

                <Grid item xs={12} sm={12} md={12} className={classes.gridItem1}>
                    {recordForFooterBarPersonalize && recordForFooterBarPersonalize != null &&
                        <GridBackgroudPhotoList recordForBackgroudPhotoList={recordForFooterBarPersonalize} setBgPhoto={setBgPhoto} />
                    }
                </Grid>

            </Grid>

        </>
    )
}
