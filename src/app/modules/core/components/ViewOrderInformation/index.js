/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, Typography, Container, Box, TextField, Switch, FormControlLabel, Divider, DialogTitle, DialogContent, Slide, Dialog } from '@material-ui/core'
import { toast } from 'react-toastify';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IconClose } from 'src/app/components';
import config from 'src/environments/config';
import { useLoadPhotoList } from 'src/app/utils';
import { PageHeader } from 'src/app/modules/core/components';
import { ViewCart } from '../ViewCart';
import bgAuth from "src/app/assets/image/bg_auth.jpeg"

const useStyles = makeStyles(theme => ({
    rootGrid: {
        marginTop: theme.spacing(3),
        width: "100%",
        minHeight: "700px",
        height: "auto",
        // border: "1px solid red",

        '& .MuiFormControl-root': {
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
    },
    gridItemViewCart: {

        // background: "blue",
        background: "#fff",
    },
    gridItemContentOrder: {
        // background: "red",
        // background: "#fff",
        background: theme.palette.grey[50],
        width: "100%",
        // borderLeft: "1px solid rgba(0, 0, 0, 0.23)",

        '& .MuiFormControl-root': {
            width: "95%",
            fontWeight: '900 !important',
            color: "#000 !important",
            borderRadius: "4px",
            background: "#fff",
            '& .MuiInputBase-input': {
                color: "#000 !important",
                // background: "#fff",
                // background: theme.palette.grey[100],
                // background: "red",
                // background: 'var(--bg-secondary-color-main)',
                borderColor: "none !important",
                borderRadius: "4px",
                height: "30px !important",
                background: "#fff",
                "& .MuiInputBase-inputMultiline": {
                    // background: "red",
                }
            }
        }


    },
    bg: {
        backgroundImage: `url(${bgAuth}) !important`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // background: "red"
        // overflowY: "hidden"
    },
    dialog: {

        // background: theme.palette.grey[50],
        overflowY: "scroll",
        '& .MuiDialogContent-root': {
            // overflowY: "hidden !important",
        }
    },
    dialogTitle: {
        position: "relative",
        // // backgroundColor: "red"
        padding: theme.spacing(2),


    },
    dialogContent: {
        background: "#fff",

    },
    dialogAction: {

    },
    gridItemContentContainer: {
        // paddingLeft: theme.spacing(5)
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",

    },
    gridItemTotalPrice: {
        // height: "15vh",
        // background: "red",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    totalPriceContainer: {
        width: "95%",
        height: "auto",
        minHeight: "80px",
        // background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "var(--tertiary-color-main)",
        // backgroundColor: theme.palette.secondary.main,
        // color: "#fff",
        "& .MuiTypography-root": {
            fontWeight: '200 !important',
            color: "#000",

        }
    },
    totalPriceWrapper: {
        width: "98%",
        // background: "red",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    PageHeaderWrapper: {
        marginLeft: theme.spacing(2.2)

    }
}))


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



export const ViewOrderInformation = (props) => {

    const classes = useStyles();

    const { viewOrderInformationModal, setViewOrderInformationModal } = props

    const { isOpen, recordForViewInformation, handleCloseModal } = viewOrderInformationModal
    // console.log("viewOrderInformationModal: " + JSON.stringify(viewOrderInformationModal))

    const [recordForCart, setRecordForCart] = useState({})

    const [recordOrder, setRecordOrder] = useState({})

    const [totalOrderPrices, setTotalOrderPrices] = useState(null)

    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        if (recordForViewInformation && recordForViewInformation != null) {
            setRecordForCart({
                orderID: recordForViewInformation.orderID,
                orderCode: recordForViewInformation.orderCode
            })
            setRecordOrder({ ...recordOrder, ...recordForViewInformation })
        }
    }, [recordForViewInformation])

    useEffect(() => {

    }, [totalOrderPrices, refresh])


    const handleRefreshViewOrderInformation = () => {
        setRefresh(prev => !prev)
    }

    return (
        <>
            {/* isOpen */}
            <Dialog fullScreen open={isOpen} classes={{ paper: `${classes.dialog}` }} TransitionComponent={Transition}>

                <DialogTitle className={classes.dialogTitle}>

                </DialogTitle>

                <DialogContent className={classes.dialogContent}>

                    <IconClose handleClose={handleCloseModal} />
                    <Box className={classes.PageHeaderWrapper}>
                        <PageHeader>Xem thông tin chi tiết đơn hàng</PageHeader>
                    </Box>


                    <Grid container spacing={1} className={classes.rootGrid}>

                        <Grid item xs={9} sm={9} md={9} className={classes.gridItemViewCart}>
                            <ViewCart recordForCart={recordForCart} setTotalOrderPrices={setTotalOrderPrices} handleRefreshViewOrderInformation={handleRefreshViewOrderInformation} />
                        </Grid>

                        <Grid item xs={3} sm={3} md={3} className={classes.gridItemContentOrder}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} className={classes.gridItemTotalPrice}>
                                    <Paper elevation={1} className={classes.totalPriceContainer}>
                                        <div className={classes.totalPriceWrapper}>

                                            <Box>
                                                <Typography variant={"h6"}>Tổng giá trị đơn hàng:</Typography>
                                            </Box>

                                            <Box>
                                                {totalOrderPrices && totalOrderPrices != null &&
                                                    <Typography variant={"body1"}>{totalOrderPrices}</Typography>
                                                }
                                            </Box>

                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Box className={classes.gridItemContentContainer} >

                                        <TextField
                                            variant='outlined'
                                            label="Mã Code đơn hàng"
                                            value={recordOrder.orderCode}
                                            name='orderID'
                                        // required
                                        // disabled
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Mã Code khách hàng"
                                            value={recordOrder.customerCode}
                                            name='customerID'
                                        // required
                                        // disabled
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Tên khách hàng"
                                            value={recordOrder.customerName}
                                            name='customerID'
                                        // required
                                        // disabled
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Số điện thoại"
                                            value={recordOrder.phone}
                                            name='customerID'
                                        // required
                                        // disabled
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Địa chỉ"
                                            value={recordOrder.address}
                                            name='shipAt'
                                            // required
                                            // disabled
                                            multiline
                                        />

                                        <TextField
                                            variant='outlined'
                                            label="Trạng thái đơn hàng"
                                            value={recordOrder.statusOrder}
                                            name='statusOrder'
                                        // required
                                        // disabled
                                        />
                                        {/* <FormControlLabel
label="Trạng thái thanh toán"
labelPlacement="start"
control={<Switch
color="primary"
checked={recordOrder.statusPayment}
name="statusPayment"
disabled

/>

}
/> */}
                                        <TextField
                                            variant='outlined'
                                            label="Trạng thái thanh toán"
                                            value={recordOrder.statusPayment ? "Đã thanh toán thành công" : "Chưa thanh toán"}
                                            name='statusOrder'
                                        // required
                                        // disabled
                                        />

                                        <TextField
                                            variant='outlined'
                                            label="Ngày giao"
                                            value={recordOrder.shipAt}
                                            name='shipAt'
                                        // required
                                        // disabled
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Ghi chú"
                                            value={recordOrder.note}
                                            name='note'
                                        // required
                                        // disabled
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Ngày tạo"
                                            value={recordOrder.createdAt}
                                            name='note'
                                        // size="medium"
                                        // required
                                        // disabled
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Ngày sửa đổi"
                                            value={recordOrder.updatedAt}
                                            name='note'
                                        // size="medium" 
                                        // required
                                        // disabled
                                        />


                                    </Box>

                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>

                </DialogContent>

            </Dialog >


        </>
    )
}


