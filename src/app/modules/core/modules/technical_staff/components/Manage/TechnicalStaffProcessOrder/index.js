

import React, { useState } from 'react'
import { makeStyles, Paper, Button, Divider } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri';
import zIndex from '@material-ui/core/styles/zIndex';
import { AcceptedOrderTable } from '../../Table/index'
import { useTab, useRefresh, useLoadingEffect } from 'src/app/utils';
import { ManageAcceptedOrder } from '../ManageAcceptedOrder';
import { Personalize } from '../../Extra/PersonalizeOLD';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const useStyles = makeStyles(theme => ({
    mainContainer: {
        // background: '#B6E2F3',
        background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative",

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
export const TechnicalStaffProcessOrder = () => {
    const classes = useStyles();


    const { TabPanel, TabBar, value, handleChange } = useTab()

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [personalizeModal, setPersonalizeModal] = useState({ isOpen: true })

    const handleCloseModal = () => {
        setPersonalizeModal({ isOpen: false })
        handleRefresh()
    }
    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    // const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {/* <Loader loading={loading} /> */}

            <Paper elevation={2} className={classes.mainContainer}>

                {/* <p>TechnicalStaffProcessOrder</p> */}
                <div>

                    {/* <TabBar tabArr={[
                        {
                            label: "Đơn hàng đã chấp nhận",
                            onClick: () => { }
                        },
                        {
                            label: "Cá nhân hoá",
                            onClick: () => {
                                setPersonalizeModal({
                                    isOpen: true,
                                    handleCloseModal
                                })
                            }
                        }]}
                    /> */}

                    <TabBar tabArr={[
                        {
                            label: "Đơn hàng đã chấp nhận",
                            onClick: () => { }
                        }]}
                    />


                    <Divider />

                    <TabPanel value={value} index={0}>
                        <ManageAcceptedOrder />
                    </TabPanel>



                </div>


            </Paper>
        </>
    )
}
