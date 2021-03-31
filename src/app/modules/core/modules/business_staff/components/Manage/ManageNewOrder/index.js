

import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { SearchBar, ViewOrderInformation } from 'src/app/modules/core/components';
import { useSearchHandle, useToggleViewInformation } from 'src/app/utils';
import { NewOrderTable } from '../../Table';

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

export const ManageNewOrder = () => {
    const classes = useStyles();


    // const { recordForViewInformation, setRecordForViewInformation, openViewInformation, setOpenViewInformation, handleViewInformation, handleCloseViewInformation } = useToggleViewInformation()

    const { keywords, setKeywords, clickSearch, setClickSearch, searchAction, setSearchAction, handleKeywordsChange } = useSearchHandle()



    return (
        <>
            {
                // !openViewInformation &&
                <Paper elevation={0} className={classes.mainContainer}>
                    <>

                        <div className={classes.actionContainer}>
                            <div className={classes.actionWrapper}>
                                <SearchBar keywords={keywords} setKeywords={setKeywords} searchAction={searchAction} setSearchAction={setSearchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} handleKeywordsChange={handleKeywordsChange} />
                            </div>
                        </div>

                        <NewOrderTable
                            // handleViewInformation={handleViewInformation}
                            keywords={keywords} setSearchAction={setSearchAction} searchAction={searchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} />
                    </>
                </Paper>
            }

            {/* {openViewInformation && <ViewOrderInformation recordForViewInformation={recordForViewInformation} handleClose={handleCloseViewInformation} />} */}

        </>
    )
}
