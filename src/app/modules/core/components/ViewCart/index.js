/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, Typography, Container, Box, Card } from '@material-ui/core'
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { PhotoServices, OrderServices } from 'src/app/services';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IconClose } from 'src/app/components';
import { PageHeader } from 'src/app/modules/core/components';
import { useLoadPhotoList, useFormat } from 'src/app/utils';
import { CartItem } from '../CartItem';

const useStyles = makeStyles(theme => ({
    cartContainer: {
        width: "100%",
        height: "auto",
        minHeight: "855px",
        border: "1px solid rgb(0,0,0,0.23)",
        borderRadius: "4px",
        // background: theme.palette.grey[100],
        // background: "var(--tertiary-color-main)",

    },
    rootGrid: {
        width: "100%",
        height: "auto",

    },
    gridItemCount: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: theme.spacing(2),
    },
    gridItem1: {
        // width: "90%",
        height: "73vh",
        // background: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: theme.spacing(2),
        gap: theme.spacing(2),
        overflow: "scroll"

    },
    gridItem2: {
        height: "15vh",
        // background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    totalPriceContainer: {
        width: "98%",
        height: "auto",
        minHeight: "80px",
        // background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    totalPriceWrapper: {
        width: "90%",
        // background: "red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cartItemTitleContainer: {
        width: "98%",
        minHeight: "50px",
        height: "50px",
        // background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: -16,
        zIndex: 999,
        backgroundColor: "#FAFAFA",
        border: "1px solid rgba(0, 0, 0, 0.23)",

    },
    rootCartItemTitleGrid: {
        paddingLeft: theme.spacing(1),
        // paddingRight: theme.spacing(2),
        // background: "red",
        width: "98%",
        minHeight: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cartCountContainer: {
        width: "98%",
        minHeight: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        border: "1px solid rgba(0, 0, 0, 0.23)",
    }
}))
export const ViewCart = (props) => {

    const classes = useStyles();

    const { recordForCart } = props


    const [orderDetailList, setOrderDetailList] = useState([])

    useEffect(() => {
        // if (recordForCart && recordForCart != null) {

        loadInit()
        // }
    }, [recordForCart])


    const loadInit = async () => {
        console.log("loadInit")

        try {
            const response = await (await OrderServices.getOrderDetailList({ orderID: recordForCart.orderID })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    const records = response.info.records
                    // console.log("records:" + JSON.stringify(records))

                    setOrderDetailList(records && records != null ? records : [])
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

    }

    return (
        <>
            <div className={classes.cartContainer}>
                <Grid container spacing={0} className={classes.rootGrid}>
                    {/* <Grid item xs={12} sm={12} md={12} className={classes.gridItemCount}>
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={12} className={classes.gridItem1}>
                        <Paper elevation={0} className={classes.cartCountContainer}>
                            <Typography variant={"body1"}>Số lượng mục trong giỏ hàng: {orderDetailList.length}</Typography>
                        </Paper>
                        <Card elevation={0} className={classes.cartItemTitleContainer}>
                            <Grid container className={classes.rootCartItemTitleGrid}>
                                <Grid item xs={2} sm={2} md={2} className={classes.gridCartItemTitl1}>
                                    <Typography variant={"body1"}>Tên sản phẩm</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} className={classes.gridCartItemTitl2}>
                                    <Typography variant={"body1"}>Kích thước</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} className={classes.gridCartItemTitl3}>
                                    <Typography variant={"body1"}>Màu</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} className={classes.gridCartItemTitl4}>
                                    <Typography variant={"body1"}>Giá đơn vị</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} className={classes.gridCartItemTitl5}>
                                    <Typography variant={"body1"}>Giá dịch vụ</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} className={classes.gridCartItemTitl6}>
                                    <Typography variant={"body1"}>Số lượng</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} className={classes.gridCartItemTitl8}>
                                    <Typography variant={"body1"}>Thao tác</Typography>
                                </Grid>
                            </Grid>
                        </Card>

                        {orderDetailList && orderDetailList != null &&
                            orderDetailList.map((val, index) => (
                                <CartItem key={index} recordForCartItem={val} />
                            ))
                        }

                    </Grid>

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItem2}>
                        <Paper elevation={2} className={classes.totalPriceContainer}>
                            <div className={classes.totalPriceWrapper}>

                                <Box>
                                    <Typography>Tổng tiền:</Typography>
                                </Box>

                                <Box>
                                    {orderDetailList && orderDetailList != null &&
                                        (() => {
                                            const analyzeObject = orderDetailList.reduce((acc, curr) => {
                                                const totalCartItemPrice = ((curr.unitPrice + curr.servicePrice) * curr.quantity)
                                                const totalPrice = acc.totalPrice + totalCartItemPrice
                                                return { totalPrice }
                                            }, { totalPrice: 0 })
                                            return <Typography>{`${useFormat().formatMoney(analyzeObject.totalPrice)} đ`}</Typography>
                                        }
                                        )()
                                    }
                                </Box>

                            </div>
                        </Paper>
                    </Grid>

                </Grid>


            </div>


        </>
    )
}


