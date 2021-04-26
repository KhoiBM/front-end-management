

import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { SearchBar, ViewOrderInformation } from 'src/app/modules/core/components';
import { useSearchHandle, useToggleViewInformation, useLoadingEffect } from 'src/app/utils';
import { NewOrderTable, CanceledOrderTable } from '../../Table';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: "100%",
        // paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative"

    },
    actionContainer: {
        display: "flex",
        justifyContent: "flex-end",
        // paddingRight: theme.spacing(2)
    },
    actionWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingRight: theme.spacing(6),
        // paddingLeft: theme.spacing(8),
        // marginRight: theme.spacing(8),
        // background: '#B6E2F3',
        width: "99%",

    }
}));

export const ManageCanceledOrder = () => {
    const classes = useStyles();


    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    return (
        <>
            <Loader loading={loading} />

            {

                <Paper elevation={0} className={classes.mainContainer}>
                    <>
                        <CanceledOrderTable />
                    </>
                </Paper>
            }


        </>
    )
}
