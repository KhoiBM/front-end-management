/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, Typography, Container, Box, Card, Divider } from '@material-ui/core'
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { PhotoServices, OrderServices } from 'src/app/services';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IconClose, Loader } from 'src/app/components';
import { PageHeader } from 'src/app/modules/core/components';
import { useLoadPhotoList, useFormat, useLoadingEffect } from 'src/app/utils';
import { CartItem } from '../CartItem';

const useStyles = makeStyles(theme => ({
    cartContainer: {
        width: "100%",
        height: "auto",
        minHeight: "855px",
        // border: "1px solid rgb(0,0,0,0.23)",
        borderRadius: "4px",
        // background: theme.palette.grey[100],
        // background: "var(--tertiary-color-main)",

    },
    rootGrid: {
        width: "100%",
        height: "auto",
        paddingTop: theme.spacing(2),
    },
    gridItemCount: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: theme.spacing(2),
    },
    gridItem1: {
        // width: "90%",
        // height: "73vh",
        // background: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // paddingTop: theme.spacing(2),
        gap: theme.spacing(4),
        overflow: "scroll",
        // paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(10),

    },
    gridItem2: {

    },
    cartItemTitleContainer: {
        width: "98%",
        minHeight: "100px",
        height: "100px",
        // background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        // top: -16,
        top: 0,
        zIndex: 999,
        backgroundColor: "#FAFAFA",
        // backgroundColor: theme.palette.secondary.main,
        // background: "var(--tertiary-color-main)",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        // color: "#fff",



    },
    rootCartItemTitleGrid: {
        // paddingLeft: theme.spacing(1),
        // paddingRight: theme.spacing(2),
        // background: "red",
        width: "98%",
        minHeight: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        "& .MuiTypography-root": {
            fontWeight: '900 !important',
            color: "#000",
        }
    },
    cartCountContainer: {
        width: "98%",
        minHeight: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        // backgroundColor: "#FAFAFA",
        // color: "#fff",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        marginBottom: theme.spacing(5),
        "& .MuiTypography-root": {
            fontWeight: '900 !important',
            color: "#000",
        }
    }
}))
export const ViewCart = (props) => {

    const classes = useStyles();

    const { recordForCart, setTotalOrderPrices, handleRefreshViewOrderInformation } = props

    const [orderDetailList, setOrderDetailList] = useState([])

    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    useEffect(() => {
        if (recordForCart && recordForCart != null) {
            loadInit()
        }
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

                    const analyzeObject = records.reduce((acc, curr) => {
                        const totalCartItemPrice = ((curr.unitPrice + curr.servicePrice) * curr.quantity)
                        const totalOrderPrices = acc.totalOrderPrices + totalCartItemPrice
                        return { totalOrderPrices }
                    }, { totalOrderPrices: 0 })

                    setTotalOrderPrices(`${useFormat().formatMoney(analyzeObject.totalOrderPrices)} đ`)
                    handleRefreshViewOrderInformation()
                    // console.log("totalOrderPrices: " + `${useFormat().formatMoney(analyzeObject.totalOrderPrices)} đ`)

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
            <Loader loading={loading} />

            <div className={classes.cartContainer}>
                <Grid container spacing={0} className={classes.rootGrid}>
                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemCount}>
                        <Box elevation={0} className={classes.cartCountContainer}>
                            <Typography variant={"h3"}>Giỏ hàng</Typography>
                            <Typography variant={"body1"}>Có {orderDetailList.length} sản phẩm</Typography>
                        </Box>

                    </Grid>
                    {/* <Divider /> */}
                    <Grid item xs={12} sm={12} md={12} className={classes.gridItem1}>

                        <Card elevation={0} className={classes.cartItemTitleContainer}>

                            <Grid container className={classes.rootCartItemTitleGrid}>
                                <Grid item xs={2} sm={2} md={2} >
                                    <Typography variant={"body1"}>Hình minh hoạ</Typography>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2}>
                                    <Typography variant={"body1"}>Tên sản phẩm</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} >
                                    <Typography variant={"body1"}>Kích thước</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} >
                                    <Typography variant={"body1"}>Màu</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} style={{ minWidth: "6rem" }}>
                                    <Typography variant={"body1"}>Giá đơn vị</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} style={{ minWidth: "6rem" }}>
                                    <Typography variant={"body1"}>Giá dịch vụ</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} >
                                    <Typography variant={"body1"}>Số lượng</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} style={{ minWidth: "8rem" }}>
                                    <Typography variant={"body1"}>Tổng giá</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} >
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
                </Grid>
            </div>
        </>
    )
}


