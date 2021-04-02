/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper, Typography, Box } from '@material-ui/core'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { RiCloseFill } from 'react-icons/ri'
import { useForm, useUploadPhoto, useCustomStylesAddEditForm } from 'src/app/utils'
import { ManagePrintedProductServices, TechnicalStaffProcessOrderServices, ManageRawProductServices } from 'src/app/services'
import { PageHeader, DropZoneUpload } from 'src/app/modules/core/components'
import { ManagePrintedProduct } from '../../Manage'
import { IconClose } from 'src/app/components'
const useStyles = makeStyles(theme => ({
    // rootForm: {
    //     marginTop: theme.spacing(3),
    //     width: "100%",

    //     // border: "1px solid red",
    //     '& .MuiFormControl-root': {
    //         width: '200%',
    //         height: "auto",
    //         marginBottom: theme.spacing(3),
    //         // border: "1px solid red",
    //     }
    // },
    // selectRole: {
    //     margin: theme.spacing(1),
    //     minWidth: 120,
    // },
    // buttonWrapper: {
    //     // border: "1px solid red",
    //     width: '100%',
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     alignItems: "flex-end"
    // },
    // button: {
    //     cursor: "pointer",
    //     marginTop: theme.spacing(2),
    //     color: "#fff",
    //     '&:hover': {
    //         backgroundColor: theme.palette.primary.main,
    //         // backgroundColor: "var(--secondary-color-main)",
    //         boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
    //         transform: "scale(1.015)",

    //     },
    //     '&:focus': {
    //         // outline: "1px dashed var(--primary-color-dark)",
    //         outlineOffset: "4px",
    //     }
    // },
    // pageForm: {
    //     // width: "25rem",
    //     width: "50rem",
    //     padding: theme.spacing(3),
    //     position: "relative",
    //     height: "auto",
    //     minHeight: "300px",
    //     // background: "blue",

    // },
    // pageFormContainer: {
    //     width: "100%",
    //     minHeight: "800px",
    //     height: "auto",  //  làm mất goc paper ở dưới 
    //     // background: "red",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     zIndex: 999,
    //     position: "relative",
    //     overflow: "scroll",


    // },
    // iconCloseWrapper: {
    //     position: "absolute",
    //     right: theme.spacing(2),
    //     top: theme.spacing(2),
    //     color: "var(--primary-color-main)",
    //     // color: "var(--secondary-color-main)",
    //     transform: "scale(2)",
    //     transition: " all 0.3s ease 0s"

    // },
    // iconClose: {
    //     '&:hover': {
    //         color: "var(--primary-color-dark)",
    //         // color: "var(--secondary-color-main)",
    //     },
    //     '&:focus': {
    //         // outline: "1px dashed var(--primary-color-dark)",
    //         outlineOffset: "4px",
    //         // transform: "scale(5)",
    //     }
    // },
    // gridItem1: {
    //     // background: "yellow",
    //     '&  .MuiFormControl-root': {
    //         width: "100%"
    //     }
    // },
    // gridItem2: {
    //     // background: "orange",
    //     display: "flex",
    //     justifyContent: "center",
    //     // alignItems: "center"
    //     paddingTop: theme.spacing(2),
    //     height: "auto",
    //     minHeight: "500px",
    // }
}))

const initialFValues = {
    printedProductID: "",
    orderID: "",
    rawProductID: "",
    printedProductName: "",
    totalQuantityOfPrintedProduct: 1,
    description: "",
    note: "",
    createdAt: new Date()
}
export const AddPrintedProductForm = (props) => {
    const classes = useStyles();

    const { classesCustomStylesAddEditForm } = useCustomStylesAddEditForm()

    const [uploadFiles, setUploadFiles] = useState([])

    const { uploadPhoto } = useUploadPhoto()

    const [orderRecords, setOrderRecords] = useState([])

    const [rawProductRecords, setRawProductRecords] = useState([])

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)


    useEffect(() => {
        loadInit()
    }, [])


    const loadInit = async () => {
        try {
            const responseOrder = await (await TechnicalStaffProcessOrderServices.getAllOrder()).data
            const responseRawProduct = await (await ManageRawProductServices.getAllRawProduct()).data
            let orderRecords = []
            let recordsRawProduct = []
            if (responseOrder && responseOrder != null) {
                if (responseOrder.result == config.useResultStatus.SUCCESS) {
                    orderRecords = responseOrder.info.records

                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("responseOrder is null or undefined")
            }
            if (responseRawProduct && responseRawProduct != null) {
                if (responseRawProduct.result == config.useResultStatus.SUCCESS) {
                    recordsRawProduct = responseRawProduct.info.records
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("responseRawProduct is null or undefined")
            }


            setFormData({ ...formData, orderID: orderRecords[0].orderID, rawProductID: recordsRawProduct[0].rawProductID })
            setOrderRecords(orderRecords ? orderRecords : [])
            setRawProductRecords(recordsRawProduct ? recordsRawProduct : [])

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)
        if (enableSubmit) {

            const data = {
                printedProductID: "",
                orderID: formData.orderID,
                rawProductID: formData.rawProductID,
                printedProductName: formData.printedProductName,
                totalQuantity: formData.totalQuantityOfPrintedProduct,
                description: formData.description,
                note: formData.note,
                createdAt: new Date()
            }
            console.log("data: " + JSON.stringify(data))

            add(data)

        } else {
            toast.error(config.useMessage.invalidData);
        }
    }


    const add = async (data) => {
        uploadFiles.forEach((file) => {
            console.log("name: " + JSON.stringify(file.name))
            console.log("type: " + JSON.stringify(file.type))
        })
        // console.log("uploadFiles: " + JSON.stringify(uploadFiles))
        console.log(uploadFiles)
        try {
            const response = await (await ManagePrintedProductServices.add(data)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    const bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                    const folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["PRINTEDPRODUCT"]

                    const orderID = "orderID"
                    const printedProductCode = "printedProductCode"

                    const uploadInfo = {
                        bucketName,
                        prefix: `${folder}/${orderID}/${printedProductCode}`,
                    }

                    if (uploadFiles.length > 0) {
                        uploadPhoto(uploadInfo, uploadFiles)
                    } else {
                        toast.success("Thành công")
                    }


                    // toast.success("Thành công")

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
            {/* <p>addform</p> */}
            <div className={classesCustomStylesAddEditForm.pageFormContainer}>
                <Paper elevation={5} className={classesCustomStylesAddEditForm.pageForm}>

                    <IconClose handleClose={props.handleCloseForm} />

                    <PageHeader>
                        Thêm sản phẩm đã in
                    </PageHeader>

                    <form noValidate onSubmit={handleSubmit} className={classesCustomStylesAddEditForm.rootForm}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={6} className={classesCustomStylesAddEditForm.gridItem1}>

                                <FormControl variant="outlined" >
                                    <InputLabel id="orderID-label">
                                        Đơn hàng
                                        </InputLabel>
                                    <Select
                                        labelId="orderID-label"
                                        id="orderID"
                                        value={formData.orderID

                                        }
                                        onChange={handleInputChange}
                                        name="orderID"
                                        labelWidth={70}
                                        required
                                    // error={helperValid.orderID}
                                    >
                                        {
                                            orderRecords.map(val =>
                                                (<MenuItem value={val.orderID} key={val.orderID}>
                                                    <Box>
                                                        <Typography>  {`Mã đơn hàng: ${val.orderID}`}</Typography>
                                                    </Box>
                                                </MenuItem>))
                                        }

                                    </Select>
                                    <FormHelperText style={{
                                        color: "#f44336",
                                        marginLeft: "14px",
                                        marginRight: "14px",
                                        marginBottom: '16px',

                                    }}>
                                        {/* {helperValid.orderID} */}
                                    </FormHelperText>
                                </FormControl>


                                <FormControl variant="outlined" className={classesCustomStylesAddEditForm.formSelectControl}>
                                    <InputLabel id="rawProductID-label">
                                        Sản phẩm thô
                                        </InputLabel>
                                    <Select
                                        labelId="rawProductID-label"
                                        id="rawProductID"
                                        value={formData.rawProductID

                                        }

                                        onChange={handleInputChange}
                                        name="rawProductID"
                                        className={classesCustomStylesAddEditForm.formSelectContainer}
                                        labelWidth={105}
                                    // error={helperValid.rawProductID}
                                    >
                                        {
                                            rawProductRecords.map(val =>
                                                (<MenuItem value={val.rawProductID} key={val.rawProductID}>
                                                    <Box>
                                                        <Typography>  {`Mã sản phẩm thô: ${val.rawProductID}`}</Typography>
                                                        <Typography>  {`Tên sản phẩm thô: ${val.rawProductName}`}</Typography>
                                                    </Box>
                                                </MenuItem>))
                                        }



                                    </Select>
                                    <FormHelperText style={{
                                        color: "#f44336",
                                        marginLeft: "14px",
                                        marginRight: "14px",
                                        marginBottom: '16px'

                                    }}>
                                        {/* {helperValid.rawProductID} */}
                                    </FormHelperText>

                                </FormControl>




                                <TextField
                                    variant='outlined'
                                    label="Tên sản phẩm đã in"
                                    value={formData.printedProductName}
                                    name='printedProductName'
                                    onChange={handleInputChange}
                                    error={helperValid.printedProductName ? true : false}
                                    helperText={helperValid.printedProductName}
                                    required
                                />

                                <TextField
                                    variant='outlined'
                                    label="Tổng số lượng"
                                    value={formData.totalQuantityOfPrintedProduct}
                                    name='totalQuantityOfPrintedProduct'
                                    onChange={handleInputChange}
                                    error={helperValid.totalQuantityOfPrintedProduct ? true : false}
                                    helperText={helperValid.totalQuantityOfPrintedProduct}
                                    required
                                    type="number"
                                />


                                <TextField
                                    variant='outlined'
                                    label="Mô tả"
                                    value={formData.description}
                                    name="description"
                                    onChange={handleInputChange}
                                    error={helperValid.description ? true : false}
                                    helperText={helperValid.description}
                                    required
                                    multiline
                                />
                                <TextField
                                    variant='outlined'
                                    label="Ghi chú"
                                    value={formData.note}
                                    name="note"
                                    onChange={handleInputChange}
                                    error={helperValid.note ? true : false}
                                    helperText={helperValid.note}
                                    required
                                    multiline
                                />

                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={classesCustomStylesAddEditForm.gridItem2}>
                                <DropZoneUpload setUploadFiles={setUploadFiles} />
                            </Grid>
                        </Grid>

                        <div className={classesCustomStylesAddEditForm.buttonWrapper}>
                            <Button type="submit" variant="contained" color="primary" size="large" className={classesCustomStylesAddEditForm.button}>Thêm mới</Button>
                        </div>

                    </form>
                </Paper>
            </div>


        </>
    )
}

