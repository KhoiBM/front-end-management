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
    // pageViewInfomationContainer: {
    //     width: "100%",
    //     minHeight: "1100px",
    //     height: "auto",  //  làm mất goc paper ở dưới 
    //     // background: "red",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     position: "relative",
    //     // overflow: "scroll",
    //     background: 'var(bg-secondary-color-main)',


    // },
    // pageViewInfomationWrapper: {
    //     width: "100%",
    //     padding: theme.spacing(3),
    //     height: "auto",
    //     minHeight: "1100px",
    //     // background: "blue",
    //     background: "#fff",
    //     paddingBottom: theme.spacing(10)

    // },
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
    gridItem1: {

        // background: "blue",
        background: "#fff",
    },
    gridItem2: {
        // background: "red",
        width: "100%",
        // borderLeft: "1px solid rgba(0, 0, 0, 0.23)",
        paddingLeft: theme.spacing(15),
        background: "#fff",
        '& .MuiFormControl-root': {
            width: "100%",
            color: "#000 !important",
            borderRadius: "4px",
            '& .MuiInputBase-input': {
                color: "#000 !important",
                background: "#fff",
                // background: "red",
                // background: 'var(--bg-secondary-color-main)',

                borderRadius: "4px",
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

    },
    dialogTitle: {
        position: "relative",
        // // backgroundColor: "red"
        padding: theme.spacing(2),


    },
    dialogContent: {
        // background: "#fff",
    },
    dialogAction: {

    },
}))


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



export const ViewOrderInformation = (props) => {

    const classes = useStyles();

    const { viewOrderInformationModal, setViewOrderInformationModal } = props
    const { isOpen, recordForViewInformation, handleCloseModal } = viewOrderInformationModal
    console.log("viewOrderInformationModal: " + JSON.stringify(viewOrderInformationModal))
    // const bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
    // const folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["ORDER"]


    // const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    // useEffect(() => {
    // if (recordForViewInformation && recordForViewInformation != null) {
    //     const orderID = recordForCart.orderID
    //     const orderDetailID = recordForCart.orderDetailID
    //     const fileKey = `${folder}/${orderID}/${orderDetailID}`
    //     loadPhotoList(bucketName, fileKey)
    // }

    // }, [recordForViewInformation])

    const [recordForCart, setRecordForCart] = useState({})


    const [recordOrder, setRecordOrder] = useState({})

    useEffect(() => {
        if (recordForViewInformation && recordForViewInformation != null) {
            setRecordForCart({
                orderID: recordForViewInformation.orderID,
                orderCode: recordForViewInformation.orderCode
            })
            setRecordOrder({ ...recordOrder, ...recordForViewInformation })
        }
    }, [recordForViewInformation])

    return (
        <>
            {/* isOpen */}
            <Dialog fullScreen open={isOpen} classes={{ paper: `${classes.dialog}` }} TransitionComponent={Transition}>

                <DialogTitle className={classes.dialogTitle}>

                </DialogTitle>

                <DialogContent className={classes.dialogContent}>

                    <IconClose handleClose={handleCloseModal} />

                    <PageHeader>Xem thông tin chi tiết đơn hàng</PageHeader>

                    <Grid container spacing={2} className={classes.rootGrid}>

                        <Grid item xs={9} sm={9} md={9} className={classes.gridItem1}>
                            <ViewCart recordForCart={recordForCart} />
                        </Grid>

                        <Grid item xs={3} sm={3} md={3} className={classes.gridItem2}>
                            <TextField
                                variant='outlined'
                                label="Mã ID đơn hàng"
                                value={recordOrder.orderID}
                                name='orderID'
                                // required
                                disabled
                            />
                            <TextField
                                variant='outlined'
                                label="Mã ID khách hàng"
                                value={recordOrder.customerID}
                                name='customerID'
                                // required
                                disabled
                            />
                            <TextField
                                variant='outlined'
                                label="Tên khách hàng"
                                value={recordOrder.customerName}
                                name='customerID'
                                // required
                                disabled
                            />
                            <TextField
                                variant='outlined'
                                label="Số điện thoại"
                                value={recordOrder.phone}
                                name='customerID'
                                // required
                                disabled
                            />
                            <TextField
                                variant='outlined'
                                label="Địa chỉ"
                                value={recordOrder.address}
                                name='shipAt'
                                // required
                                disabled
                            />

                            <TextField
                                variant='outlined'
                                label="Trạng thái đơn hàng"
                                value={recordOrder.statusOrder}
                                name='statusOrder'
                                // required
                                disabled
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
                                disabled
                            />

                            <TextField
                                variant='outlined'
                                label="Ngày giao"
                                value={recordOrder.shipAt}
                                name='shipAt'
                                // required
                                disabled
                            />
                            <TextField
                                variant='outlined'
                                label="Ghi chú"
                                value={recordOrder.note}
                                name='note'
                                // required
                                disabled
                            />
                            <TextField
                                variant='outlined'
                                label="Ngày tạo"
                                value={recordOrder.createdAt}
                                name='note'
                                // required
                                disabled
                            />
                            <TextField
                                variant='outlined'
                                label="Ngày sửa đổi"
                                value={recordOrder.updatedAt}
                                name='note'
                                // required
                                disabled
                            />


                        </Grid>

                    </Grid>

                </DialogContent>

            </Dialog >


        </>
    )
}


