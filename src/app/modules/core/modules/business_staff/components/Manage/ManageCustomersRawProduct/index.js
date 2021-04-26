

import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri';
import zIndex from '@material-ui/core/styles/zIndex';
import { CustomersRawProductTable } from '../../Table';
import { EditCustomersRawProductForm } from '../../EditForm';
import { AddCustomersRawProductForm } from '../../AddForm';
import { SearchBar } from 'src/app/modules/core/components';
import { ViewCustomersRawProductInformation } from '../../Extra';
import { useSearchHandle, useToggleFormAddEdit, useToggleViewInformation, useLoadingEffect } from 'src/app/utils';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

// import { CustomersRawProductTable } from '../../Table/CustomersRawProductTable'
const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative"

    },
    actionContainer: {
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: theme.spacing(2)
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

    },
    buttonAdd: {
        cursor: "pointer",
        '&:hover': {
            // backgroundColor: theme.palette.primary.main,
            backgroundColor: "#fff",
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    }
}));

export const ManageCustomersRawProduct = () => {
    const classes = useStyles();

    const { openEditForm, setOpenEditForm, openAddForm, setOpenAddForm, recordForEdit, setRecordForEdit, handleEdit, handleAdd, handleCloseForm } = useToggleFormAddEdit()

    const { recordForViewInformation, setRecordForViewInformation, openViewInformation, setOpenViewInformation, handleViewInformation, handleCloseViewInformation } = useToggleViewInformation()

    const { keywords, setKeywords, clickSearch, setClickSearch, searchAction, setSearchAction, handleKeywordsChange } = useSearchHandle()

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    return (
        <>
            {/* <Loader loading={loading} /> */}

            {!openEditForm && !openAddForm && !openViewInformation &&
                <Paper elevation={2} className={classes.mainContainer}>


                    <>

                        <div className={classes.actionContainer}>
                            <div className={classes.actionWrapper}>
                                <SearchBar keywords={keywords} setKeywords={setKeywords} searchAction={searchAction} setSearchAction={setSearchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} handleKeywordsChange={handleKeywordsChange} />
                                {/* <Button variant="outlined" color="primary" onClick={handleAdd} className={classes.buttonAdd}>Thêm sản phẩm thô của khách hàng</Button> */}
                            </div>
                        </div>

                        <CustomersRawProductTable handleEdit={handleEdit} handleViewInformation={handleViewInformation} keywords={keywords} setSearchAction={setSearchAction} searchAction={searchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} />
                    </>
                </Paper>
            }

            {openEditForm && <EditCustomersRawProductForm recordForEdit={recordForEdit} handleCloseForm={handleCloseForm} />}
            {/* {openAddForm && <AddCustomersRawProductForm handleCloseForm={handleCloseForm} />} */}
            {openViewInformation && <ViewCustomersRawProductInformation recordForViewInformation={recordForViewInformation} handleClose={handleCloseViewInformation} />}

        </>
    )
}
