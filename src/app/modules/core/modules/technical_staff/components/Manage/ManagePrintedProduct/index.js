

import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri';
import zIndex from '@material-ui/core/styles/zIndex';
import { PrintedProductTable } from '../../Table';
import { AddPrintedProductForm } from '../../AddForm';
import { EditPrintedProductForm } from '../../EditForm';

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
        paddingRight: theme.spacing(6)
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

export const ManagePrintedProduct = () => {
    const classes = useStyles();
    const [openEditForm, setOpenEditForm] = useState(false);
    const [openAddForm, setOpenAddForm] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(0)
    const handleEdit = (row) => {
        setOpenEditForm(true);
        setRecordForEdit(row)
    }
    const handleAdd = (row) => {
        setOpenAddForm(true);
    }
    const handleCloseForm = () => {
        setOpenEditForm(false);
        setOpenAddForm(false);
    }

    return (
        <>
            {!openEditForm && !openAddForm && <Paper elevation={2} className={classes.mainContainer}>


                <>
                    <div className={classes.buttonAddWrapper}>
                        {/* <Button variant="outlined" color="secondary" onClick={handleAdd} className={classes.buttonAdd}>Thêm sản phẩm thô của khách hàng</Button> */}
                        <Button variant="outlined" color="primary" onClick={handleAdd} className={classes.buttonAdd}>Thêm sản phẩm đã in</Button>
                    </div>
                    <PrintedProductTable handleEdit={handleEdit} />
                </>
            </Paper>
            }

            {openEditForm && <EditPrintedProductForm recordForEdit={recordForEdit} handleCloseForm={handleCloseForm} />}
            {openAddForm && <AddPrintedProductForm handleCloseForm={handleCloseForm} />}

        </>
    )
}
