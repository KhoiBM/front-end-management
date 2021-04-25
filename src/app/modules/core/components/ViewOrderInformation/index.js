/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, Typography, Container, Box, TextField, Switch, FormControlLabel, Divider, DialogTitle, DialogContent, Slide, Dialog, Button, FormHelperText } from '@material-ui/core'
import { toast } from 'react-toastify';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IconClose, Loader } from 'src/app/components';
import config from 'src/environments/config';
import { useLoadPhotoList, useForm, useLoadingEffect } from 'src/app/utils';
import { PageHeader } from 'src/app/modules/core/components';
import { ViewCart } from '../ViewCart';
import bgAuth from "src/app/assets/image/bg_auth.jpeg"
import { OrderServices } from 'src/app/services';
import { DatePicker } from '@material-ui/pickers';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
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
        // border: "1px solid red",
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
    ,
    buttonEditWrapper: {
        marginBottom: theme.spacing(3),
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "10px",
        display: "flex",
        width: "95%",
        // justifyContent: "center",

    },
    buttonEdit: {
        width: "100%",
        height: "50px",
        bordeRadius: "5px",
        background: "#010606",
        whitespace: "nowrap",
        padding: '14px 48px',
        color: "#fff",
        outline: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.2s ease-in-out",

        "&:hover": {
            position: "relative",
            top: "0.5px",
            transition: "all 0.2s ease-in-out",
            background: "var(--primary-color-main)",
        }
    },
    rootForm: {
        // border: "1px solid blue",
        width: "100%",
        height: "auto",
    }
}))


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const initialFValues = {
    orderCode: "",
    customerCode: "",
    customerName: "",
    phone: "",
    address: "",
    statusOrder: "",
    statusPayment: "",
    shipAt: "",
    note: "",
    createdAt: "",
    updatedAt: ""
}

export const ViewOrderInformation = (props) => {

    const role = localStorage.getItem("role");
    const useRoleName = config.useRoleName;

    const classes = useStyles();

    const { viewOrderInformationModal, setViewOrderInformationModal } = props

    const { isOpen, recordForViewInformation, handleCloseModal } = viewOrderInformationModal
    // console.log("viewOrderInformationModal: " + JSON.stringify(viewOrderInformationModal))

    const [recordForCart, setRecordForCart] = useState({})

    const [recordOrder, setRecordOrder] = useState({})

    const [totalOrderPrices, setTotalOrderPrices] = useState(null)

    const [refresh, setRefresh] = useState(false)

    const { formData, setFormData, handleInputChange, helperValid = null, setHelperValid, validation, shipAtSelected, setShipAtSelected, handleChangeShipAt } = useForm(initialFValues)

    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    useEffect(() => {
        if (recordForViewInformation && recordForViewInformation != null) {
            setRecordForCart({
                orderID: recordForViewInformation.orderID,
                orderCode: recordForViewInformation.orderCode
            })

            setFormData({ ...formData, ...recordForViewInformation })


            console.log("shipAt:" + recordForViewInformation.shipAt)


            console.log("formatshipAt:" + format(parse(recordForViewInformation.shipAt, "dd-MM-yyyy", new Date()), "dd-MM-yyyy"))

            setShipAtSelected(parse(recordForViewInformation.shipAt, "dd-MM-yyyy", new Date()))

            // setRecordOrder({ ...recordOrder, ...recordForViewInformation })
        }
    }, [recordForViewInformation])

    useEffect(() => {

    }, [totalOrderPrices, refresh])


    const handleRefreshViewOrderInformation = () => {
        setRefresh(prev => !prev)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("formdata: " + JSON.stringify(formData))

        const enableSubmit = validation(formData)
        if (enableSubmit) {

            const data = { ...formData, shipAt: format(shipAtSelected, "dd-MM-yyyy") }

            console.log("data: " + JSON.stringify(data))

            editOrder(data)
        } else {
            toast.error(config.useMessage.invalidData);
        }
    }

    const editOrder = async (data) => {

        try {

            const response = await (await OrderServices.editOrder(data)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    toast.success("Thành công")

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
                            <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
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

                                            {
                                                role == useRoleName.businessStaff ?
                                                    <>
                                                        <TextField
                                                            variant='outlined'
                                                            label="Mã Code đơn hàng"
                                                            value={formData.orderCode}
                                                            name='orderCode'
                                                            // required
                                                            disabled
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Mã Code khách hàng"
                                                            value={formData.customerCode}
                                                            name='customerCode'
                                                            // required
                                                            disabled
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Tên khách hàng"
                                                            value={formData.customerName}
                                                            name='customerName'
                                                            // required
                                                            disabled
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Số điện thoại"
                                                            value={formData.phone}
                                                            name='phone'
                                                            // required
                                                            // disabled
                                                            onChange={handleInputChange}
                                                            error={helperValid.phone ? true : false}
                                                            helperText={helperValid.phone}
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Địa chỉ"
                                                            value={formData.address}
                                                            name='address'
                                                            // required
                                                            // disabled
                                                            multiline
                                                            // onChange={handleInputChange}
                                                            error={helperValid.address ? true : false}
                                                            helperText={helperValid.address}
                                                        />

                                                        <TextField
                                                            variant='outlined'
                                                            label="Trạng thái đơn hàng"
                                                            value={formData.statusOrder}
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
                                                            value={formData.statusPayment ? "Đã thanh toán thành công" : "Chưa thanh toán"}
                                                            name='statusPayment'
                                                            // required
                                                            disabled
                                                        />

                                                        {/* <TextField
                                                variant='outlined'
                                                label="Ngày giao"
                                                value={formData.shipAt}
                                                name='shipAt'
                                                // required
                                                // disabled
                                                onChange={handleInputChange}
                                                error={helperValid.shipAt ? true : false}
                                                helperText={helperValid.shipAt}
                                            /> */}

                                                        <DatePicker value={shipAtSelected} onChange={handleChangeShipAt}
                                                            openTo="year"
                                                            format="dd-MM-yyyy"
                                                            label="Ngày giao"
                                                            views={["year", "month", "date"]}
                                                            autoOk
                                                            inputVariant="outlined"
                                                            inputadornmentprops={{ position: "start" }}

                                                        />
                                                        <FormHelperText style={{
                                                            color: "#f44336",
                                                            marginLeft: "14px",
                                                            marginRight: "14px",
                                                            marginBottom: '16px',
                                                            marginTop: "-20px"

                                                        }}>{helperValid.shipAt}
                                                        </FormHelperText>

                                                        <TextField
                                                            variant='outlined'
                                                            label="Ghi chú"
                                                            value={formData.note}
                                                            name='note'
                                                            // required
                                                            // disabled
                                                            multiline
                                                            onChange={handleInputChange}
                                                            error={helperValid.note ? true : false}
                                                            helperText={helperValid.note}
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Ngày tạo"
                                                            value={formData.createdAt}
                                                            name='createdAt'
                                                            // required
                                                            disabled
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Ngày sửa đổi"
                                                            value={formData.updatedAt}
                                                            name='updatedAt'
                                                            // required
                                                            disabled
                                                        />

                                                        <div className={classes.buttonEditWrapper}>
                                                            <Button type="submit" variant="outlined" color="primary" size="large" className={classes.buttonEdit} onClick={editOrder}>Lưu</Button>
                                                        </div>

                                                    </>
                                                    :
                                                    <>
                                                        <TextField
                                                            variant='outlined'
                                                            label="Mã Code đơn hàng"
                                                            value={formData.orderCode}
                                                            name='orderCode'
                                                            // required
                                                            disabled
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Mã Code khách hàng"
                                                            value={formData.customerCode}
                                                            name='customerCode'
                                                            // required
                                                            disabled
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Tên khách hàng"
                                                            value={formData.customerName}
                                                            name='customerName'
                                                            // required
                                                            disabled
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Số điện thoại"
                                                            value={formData.phone}
                                                            name='phone'
                                                        // required
                                                        // disabled
                                                        // onChange={handleInputChange}
                                                        // error={helperValid.phone ? true : false}
                                                        // helperText={helperValid.phone}
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Địa chỉ"
                                                            value={formData.address}
                                                            name='address'
                                                            // required
                                                            // disabled
                                                            multiline
                                                        // onChange={handleInputChange}
                                                        // error={helperValid.address ? true : false}
                                                        // helperText={helperValid.address}
                                                        />

                                                        <TextField
                                                            variant='outlined'
                                                            label="Trạng thái đơn hàng"
                                                            value={formData.statusOrder}
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
                                                            value={formData.statusPayment ? "Đã thanh toán thành công" : "Chưa thanh toán"}
                                                            name='statusPayment'
                                                            // required
                                                            disabled
                                                        />

                                                        {/* <TextField
                                                variant='outlined'
                                                label="Ngày giao"
                                                value={formData.shipAt}
                                                name='shipAt'
                                                // required
                                                // disabled
                                                onChange={handleInputChange}
                                                error={helperValid.shipAt ? true : false}
                                                helperText={helperValid.shipAt}
                                            /> */}

                                                        <DatePicker value={shipAtSelected}
                                                            // onChange={handleChangeShipAt}
                                                            openTo="year"
                                                            format="dd-MM-yyyy"
                                                            label="Ngày giao"
                                                            views={["year", "month", "date"]}
                                                            autoOk
                                                            inputVariant="outlined"
                                                            inputadornmentprops={{ position: "start" }}
                                                            disabled

                                                        />
                                                        <FormHelperText style={{
                                                            color: "#f44336",
                                                            marginLeft: "14px",
                                                            marginRight: "14px",
                                                            marginBottom: '16px',
                                                            marginTop: "-20px"

                                                        }}>{helperValid.shipAt}
                                                        </FormHelperText>

                                                        <TextField
                                                            variant='outlined'
                                                            label="Ghi chú"
                                                            value={formData.note}
                                                            name='note'
                                                            // required
                                                            // disabled
                                                            multiline

                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Ngày tạo"
                                                            value={formData.createdAt}
                                                            name='createdAt'
                                                            // required
                                                            disabled
                                                        />
                                                        <TextField
                                                            variant='outlined'
                                                            label="Ngày sửa đổi"
                                                            value={formData.updatedAt}
                                                            name='updatedAt'
                                                            // required
                                                            disabled
                                                        />
                                                    </>

                                            }
                                        </Box>
                                    </Grid>

                                </Grid>

                            </form>
                        </Grid>


                    </Grid>


                </DialogContent>

            </Dialog >


        </>
    )
}


