/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { EditAccountForm } from '../EditAccountForm';
import { AddAccountForm } from '../AddAccountForm';
import { AccountTable } from '../AccountTable';
import { FilterBar, FilterChipBar } from 'src/app/modules/core/components';
import { ManageAccountServices } from 'src/app/services';
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { useFilterHandle, useToggleFormAddEdit } from 'src/app/utils';

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
        // paddingRight: theme.spacing(6),
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
        // paddingRight: theme.spacing(2),
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
export const ManageAccount = () => {
    const classes = useStyles();

    const { openEditForm, setOpenEditForm, openAddForm, setOpenAddForm, recordForEdit, setRecordForEdit, handleEdit, handleAdd, handleCloseForm } = useToggleFormAddEdit()

    const fetchApi = ManageAccountServices.getRoleToFilter()

    const mapToFilter = (records) => {
        // console.log("mapToFilter")
        return records.map(({ roleID: ID, roleNameVN: name }) => ({ ID, name }));
    }

    const { recordsSelect, setRecordsSelect, filterList, setFilterList, action, setAction, clickFilter, setClickFilter } = useFilterHandle(
        {
            fetchApi,
            mapToFilter
        }
    )



    return (
        <>
            {!openEditForm && !openAddForm &&
                <Paper elevation={2} className={classes.mainContainer}>

                    <>
                        <div className={classes.actionContainer}>
                            <div className={classes.actionWrapper}>
                                <FilterChipBar inputLabel={"Bộ lọc"} recordsSelect={recordsSelect} setRecordsSelect={setRecordsSelect} filterList={filterList} setFilterList={setFilterList} setAction={setAction} setClickFilter={setClickFilter} />
                                <Button variant="outlined" color="primary" onClick={handleAdd} className={classes.buttonAdd}>Thêm tài khoản</Button>
                            </div>
                        </div>

                        {filterList && filterList != null && filterList.length > 0 && <AccountTable handleEdit={handleEdit} filterList={filterList} action={action} clickFilter={clickFilter} />}
                    </>

                </Paper>
            }

            {openEditForm && <EditAccountForm recordForEdit={recordForEdit} handleCloseForm={handleCloseForm} />}
            {openAddForm && <AddAccountForm handleCloseForm={handleCloseForm} />}
        </>
    )
}


