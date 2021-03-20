/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { EditAccountForm } from '../EditAccountForm';
import { AddAccountForm } from '../AddAccountForm';
import { AccountTable } from '../AccountTable';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative"

    },
    buttonAddWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        // paddingRight: theme.spacing(6)
        paddingRight: theme.spacing(2)
    },
    buttonAdd: {
        cursor: "pointer",
        marginTop: theme.spacing(2),
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
    const [openEditForm, setOpenEditForm] = useState(false);
    const [openAddForm, setOpenAddForm] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(0)

    const handleEdit = (row) => {
        setOpenEditForm(true);
        setRecordForEdit(row)
    }
    const handleAdd = () => {
        setOpenAddForm(true);
    }
    const handleCloseForm = () => {
        setOpenEditForm(false);
        setOpenAddForm(false);
    }

    return (
        <>  {!openEditForm && !openAddForm &&
            <Paper elevation={2} className={classes.mainContainer}>

                <>
                    <div className={classes.buttonAddWrapper}>
                        <Button variant="outlined" color="primary" onClick={handleAdd} className={classes.buttonAdd}>Thêm tài khoản</Button>
                    </div>
                    <AccountTable handleEdit={handleEdit} />
                </>

            </Paper>
        }
            {openEditForm && <EditAccountForm recordForEdit={recordForEdit} handleCloseForm={handleCloseForm} />

            }
            {openAddForm && <AddAccountForm handleCloseForm={handleCloseForm} />

            }
        </>
    )
}


