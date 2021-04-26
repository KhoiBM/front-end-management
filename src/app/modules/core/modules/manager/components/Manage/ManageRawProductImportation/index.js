
import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri';
import zIndex from '@material-ui/core/styles/zIndex';
import { RawProductImportationTable } from '../../Table/index'
import { UpdateRawProductImportationForm } from '../../EditForm/UpdateRawProductImportationForm';
import { useLoadingEffect } from 'src/app/utils';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative"

    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: theme.spacing(2)
    },
    button: {
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
export const ManageRawProductImportation = () => {
    const classes = useStyles();
    const [openUpdateForm, setOpenUpdateForm] = useState(false);
    const handleUpdate = () => {
        setOpenUpdateForm(true);
    }
    const handleCloseForm = () => {
        setOpenUpdateForm(false);
    }
    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()
    return (
        <>
            {/* <Loader loading={loading} /> */}

            {!openUpdateForm &&
                <Paper elevation={2} className={classes.mainContainer}>
                    <>
                        <div className={classes.buttonWrapper}>
                            <Button variant="outlined" color="primary" onClick={handleUpdate} className={classes.button}>Cập nhật số lượng sản phẩm thô</Button>
                        </div>

                        <RawProductImportationTable />
                    </>
                </Paper>
            }

            {openUpdateForm && <UpdateRawProductImportationForm handleCloseForm={handleCloseForm} />}

        </>
    )
}
