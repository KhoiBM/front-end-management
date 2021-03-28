

import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri';
import zIndex from '@material-ui/core/styles/zIndex';
import { AcceptedOrderTable, NewOrderTable, CanceledOrderTable } from '../../Table/index'
import { useTab } from 'src/app/utils';
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
export const BusinessStaffProcessOrder = () => {
    const classes = useStyles();


    const { TabPanel, TabBar, value, handleChange } = useTab()
    const [openViewDetail, setOpenViewDetail] = useState(false)
    const [recordForViewDetail, setRecordForViewDetail] = useState(0)

    const handViewDetail = (row) => {
        setOpenViewDetail(true);
        setRecordForViewDetail(row)
    }

    const handleCloseForm = () => {
        setOpenViewDetail(false)
    }

    return (
        <>
            <Paper elevation={2} className={classes.mainContainer}>

                <div>

                    <TabBar tabArr={["Đơn hàng mới", "Đơn hàng đã chấp nhận", "Đơn hàng đã huỷ"]} />

                    <TabPanel value={value} index={0}>
                        <NewOrderTable handViewDetail={handViewDetail} />
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <AcceptedOrderTable />
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <CanceledOrderTable />
                    </TabPanel>



                </div>


            </Paper>
            {/* {openViewDetail && <ViewDetailOrder recordForViewDetail={recordForViewDetail} handleCloseForm={handleCloseForm} />} */}
        </>
    )
}
