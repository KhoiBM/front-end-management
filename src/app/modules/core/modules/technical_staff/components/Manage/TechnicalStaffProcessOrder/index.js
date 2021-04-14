

import React, { useState } from 'react'
import { makeStyles, Paper, Button, Divider } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri';
import zIndex from '@material-ui/core/styles/zIndex';
import { AcceptedOrderTable } from '../../Table/index'
import { useTab } from 'src/app/utils';
import { ManageAcceptedOrder } from '../ManageAcceptedOrder';
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

    return (
        <>
            <Paper elevation={2} className={classes.mainContainer}>

                {/* <p>TechnicalStaffProcessOrder</p> */}
                <div>

                    <TabBar tabArr={["Đơn hàng đã chấp nhận", "Cá nhân hoá"]} />

                    <Divider />

                    <TabPanel value={value} index={0}>
                        <ManageAcceptedOrder />
                    </TabPanel>

                    <TabPanel value={value} index={1}>

                    </TabPanel>



                </div>


            </Paper>
        </>
    )
}
