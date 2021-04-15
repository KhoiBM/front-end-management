

import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { SearchBar, ViewOrderInformation, ChangeStatusOrder, FilterChipBar } from 'src/app/modules/core/components';
import { useSearchHandle, useToggleViewInformation, useToggleFormAddEdit, useToggleChangeStatusForm, useToggleBox, useFilterHandle } from 'src/app/utils';
import { AcceptedOrderTable } from '../../Table';
import config from 'src/environments/config';
import { SendDemoProduct } from '../../AddForm';
import { TechnicalStaffProcessOrderServices } from 'src/app/services';

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
        paddingRight: theme.spacing(2)
        // background: 'red',
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

export const ManageAcceptedOrder = () => {
    const classes = useStyles();


    // const { recordForViewInformation, setRecordForViewInformation, openViewInformation, setOpenViewInformation, handleViewInformation, handleCloseViewInformation } = useToggleViewInformation()

    // const { recordForChangeStatus, openChangeStatus, handleChangeStatus, handleCloseChangeStatus } = useToggleChangeStatusForm()

    const { keywords, setKeywords, clickSearch, setClickSearch, searchAction, setSearchAction, handleKeywordsChange } = useSearchHandle()

    // const { recordForUse, openBox: openSendDemoProduct, handleOpen: handleOpenSendDemoProduct, handleClose: handleCloseSendDemoProduct } = useToggleBox()



    const fetchApi = TechnicalStaffProcessOrderServices.getStatusOrderToFilter()

    const mapToFilter = (records) => {
        // console.log("mapToFilter")
        return records.map((val) => ({ ID: val, name: val }));
    }

    const { recordsSelect, setRecordsSelect, filterList, setFilterList, action, setAction, clickFilter, setClickFilter } = useFilterHandle(
        {
            fetchApi,
            mapToFilter
        }
    )



    return (
        <>
            {
                // !openSendDemoProduct &&
                <Paper elevation={0} className={classes.mainContainer}>
                    <>

                        <div className={classes.actionContainer}>
                            <div className={classes.actionWrapper}>
                                <SearchBar keywords={keywords} setKeywords={setKeywords} searchAction={searchAction} setSearchAction={setSearchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} handleKeywordsChange={handleKeywordsChange} />
                                <FilterChipBar inputLabel={"Bộ lọc"} recordsSelect={recordsSelect} setRecordsSelect={setRecordsSelect} filterList={filterList} setFilterList={setFilterList} setAction={setAction} setClickFilter={setClickFilter} />
                            </div>
                        </div>

                        {filterList && filterList != null && filterList.length > 0 && <AcceptedOrderTable
                            // statusOrderToView={statusOrderToView}
                            // handleOpenSendDemoProduct={handleOpenSendDemoProduct}
                            // handleChangeStatus={handleChangeStatus}
                            // handleViewInformation={handleViewInformation}
                            keywords={keywords} setSearchAction={setSearchAction} searchAction={searchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} filterList={filterList} action={action} clickFilter={clickFilter} />
                        }
                    </>
                </Paper>
            }

            {/* {openViewInformation && <ViewOrderInformation recordForViewInformation={recordForViewInformation} handleClose={handleCloseViewInformation} />} */}

            {/* {openChangeStatus && statusOrderToChange && statusOrderToChange != null && statusOrderToChange.length > 0 && < ChangeStatusOrder statusOrderToChange={statusOrderToChange} recordForChangeStatus={recordForChangeStatus} handleClose={handleCloseChangeStatus} />} */}

            {/* {openSendDemoProduct && <SendDemoProduct handleClose={handleCloseSendDemoProduct} />} */}

        </>
    )
}
