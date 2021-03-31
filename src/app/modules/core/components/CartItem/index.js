/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Paper, Typography, TextField, Tooltip, Zoom, Button } from '@material-ui/core';
import { RiInformationLine, RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { ViewCartItemInformation } from '../ViewCartItemInformation';
import { useFormat } from 'src/app/utils';

const useStyles = makeStyles(theme => ({
    cartItemContainer: {
        width: "98%",
        minHeight: "120px",
        height: "120px",
        // background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(0, 0, 0, 0.23)",

        "&:hover": {
            backgroundColor: "#fffbf2",
        }

    },
    rootCartItemGrid: {
        paddingLeft: theme.spacing(2),
        // paddingRight: theme.spacing(2),
        // background: "red",
        width: "98%",
        minHeight: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}
))

export const CartItem = (props) => {
    const classes = useStyles();

    const [refresh, setRefresh] = useState(false)

    const { recordForCartItem } = props

    const { rawProductName, size, color, unitPrice, servicePrice, quantity, note } = recordForCartItem

    const [CartItemDetailModal, setCartItemDetailModal] = useState({ isOpen: false })


    useEffect(() => {
        // if (recordForCartItem && recordForCartItem != null) {

        // }
        // console.log("recordForCartItem: " + JSON.stringify(recordForCartItem))
    }, [recordForCartItem])



    const handleRefresh = () => {
        setRefresh(prev => !prev)
    }
    const handleCloseModal = () => {
        setCartItemDetailModal({ isOpen: false })
        handleRefresh()
    }


    return (
        <>
            <Paper elevation={0} className={classes.cartItemContainer}>
                <Grid container className={classes.rootCartItemGrid}>
                    <Grid item xs={2} sm={2} md={2} className={classes.gridItem1}>
                        <Typography variant={"body1"}>{rawProductName}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} className={classes.gridItem2}>
                        <Typography variant={"body1"}>{size}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} className={classes.gridItem3}>
                        <Typography variant={"body1"}>
                            {/* {color} */}
                            <RiCheckboxBlankCircleFill style={{ color: `${color}` }} />
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} className={classes.gridItem4}>
                        <Typography variant={"body1"}>{`${useFormat().formatMoney(unitPrice)} đ`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} className={classes.gridItem5}>
                        <Typography variant={"body1"}>{`${useFormat().formatMoney(servicePrice)} đ`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} className={classes.gridItem6}>
                        <Typography variant={"body1"}>{quantity}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} className={classes.gridItem8}>
                        < Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết" >

                            <Button onClick={(event) => {
                                event.stopPropagation()
                                setCartItemDetailModal({ isOpen: true, handleCloseModal })
                            }
                            }>
                                <RiInformationLine />
                            </Button>

                        </ Tooltip>

                        {/* <Tooltip TransitionComponent={Zoom} placement="top" title="Chỉnh sửa">

                            <Button onClick={(event) => {
                                event.stopPropagation()
                            }
                            }>
                                <AiOutlineEdit />
                            </Button>

                        </Tooltip>

                        < Tooltip TransitionComponent={Zoom} placement="top" title="Xoá" >

                            <Button onClick={(event) => {
                                event.stopPropagation()
                            }
                            }>
                                <AiOutlineDelete style={{ color: "red" }} />
                            </Button>

                        </ Tooltip> */}

                    </Grid>
                </Grid>
                {/* <Grid container className={classes.rootCartItemGrid}>
                    <Grid item xs={12} sm={12} md={12} className={classes.gridItem1}>
                        <TextField
                            variant='outlined'
                            label="Ghi chú"
                            value={note}
                            name='note'
                        />
                    </Grid>

                </Grid> */}
            </Paper>
            <ViewCartItemInformation CartItemDetailModal={CartItemDetailModal} setCartItemDetailModal={setCartItemDetailModal} />

        </>
    )
}
