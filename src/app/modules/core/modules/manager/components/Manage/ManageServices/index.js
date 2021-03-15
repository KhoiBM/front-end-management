import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri';
import zIndex from '@material-ui/core/styles/zIndex';
import { ServiceTable } from '../../Table/index'
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
            backgroundColor: theme.palette.primary.main,
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    }
}));
export const ManageServices = () => {
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
            <Paper elevation={2} className={classes.mainContainer}>

                {!openEditForm && !openAddForm &&
                    <>
                        <div className={classes.buttonAddWrapper}>
                            <Button variant="contained" color="primary" onClick={handleAdd} className={classes.buttonAdd}>Thêm dịch vụ</Button>
                        </div>
                        <ServiceTable handleEdit={handleEdit} />
                    </>}

                {/* {openEditForm && <EditServiceForm recordForEdit={recordForEdit} handleCloseForm={handleCloseForm} />} */}
                {/* {openAddForm && <AddServiceForm handleCloseForm={handleCloseForm} />} */}
            </Paper>
        </>
    )
}
