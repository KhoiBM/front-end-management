/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper, Typography, Box } from '@material-ui/core'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { RiCloseFill } from 'react-icons/ri'
import { useForm, useCustomStylesAddEditForm, useLoadingEffect } from 'src/app/utils'
import { ManageRawProductImportationServices, ManageRawProductServices } from 'src/app/services'
import { PageHeader } from 'src/app/modules/core/components'
import { IconClose, Loader } from 'src/app/components'
const useStyles = makeStyles(theme => ({
    rootForm: {
        marginTop: theme.spacing(3),
        width: "100%",
        // border: "1px solid red",
        '& .MuiFormControl-root': {
            width: '200%',
            height: "auto",
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
    },
    selectRole: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    buttonWrapper: {
        // border: "1px solid red",
        width: '100%',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    button: {
        cursor: "pointer",
        marginTop: theme.spacing(2),
        color: "#fff",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            // backgroundColor: "var(--secondary-color-main)",
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    },
    pageForm: {
        // width: "25rem",
        width: "35rem",
        padding: theme.spacing(3),
        position: "relative",
        // background: "blue",

    },
    pageFormContainer: {
        width: "100%",
        minHeight: "800px",
        height: "auto",  //  làm mất goc paper ở dưới 
        // background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        position: "relative",
        overflow: "scroll",


    }
    // formSelectContainer: {
    //     // marginTop: theme.spacing(50)
    // }
}))

const initialFValues = {
    // rawProductID: '',
    rawProductCode: '',
    quantity: 0,
    providedBy: "",
    createdAt: new Date()
}
export const UpdateRawProductImportationForm = (props) => {
    const classes = useStyles();

    // const { classesCustomStylesAddEditForm } = useCustomStylesAddEditForm()

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)

    const [rawProductRecords, setRawProductRecords] = useState([])

    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    // useEffect(() => {
    //     loadInit()
    // }, [page])

    useEffect(() => {
        // loadInit()
    }, [])

    // const loadInit = async () => {


    //     try {
    //         // const response = await (await ManageRawProductServices.view({ filterBy: "all", page: page, rowPerPage: rowPerPage })).data
    //         const response = await (await ManageRawProductServices.getAllStudioRawProduct({ filterBy: "all" })).data
    //         // console.log("response: " + JSON.stringify(response))
    //         if (response && response != null) {
    //             if (response.result == config.useResultStatus.SUCCESS) {
    //                 const records = response.info.records
    //                 // console.log("records[0].rawProductID: " + records[0].rawProductID)
    //                 setFormData({ ...formData, rawProductID: records[0].rawProductID })
    //                 setRawProductRecords(records)
    //                 // toast.success("Thành công")
    //             } else {
    //                 toast.error(config.useMessage.resultFailure)
    //             }
    //         } else {
    //             throw new Error("Response is null or undefined")
    //         }

    //     } catch (err) {
    //         toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
    //     }

    // }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)
        if (enableSubmit) {
            update()
        } else {
            toast.error(config.useMessage.invalidData);
        }
    }


    const update = async () => {

        try {
            const response = await (await ManageRawProductImportationServices.update(formData)).data
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

            <div className={classes.pageFormContainer}>
                <Paper elevation={5} className={classes.pageForm}>

                    <IconClose handleClose={props.handleCloseForm} />

                    <PageHeader>
                        Cập nhật số lượng sản phẩm thô
                    </PageHeader>

                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6}>
                                <>
                                    {/* <FormControl variant="outlined" className={classes.formSelectControl}>
                                        <InputLabel id="rawProductID-label">
                                            Sản phẩm thô
                                        </InputLabel>
                                        <Select
                                            labelId="rawProductID-label"
                                            id="rawProductID"
                                            value={String(formData.rawProductID)}

                                            onChange={handleInputChange}
                                            name="rawProductID"
                                            className={classes.formSelectContainer}
                                            labelWidth={105}
                                        // error={helperValid.rawProductID}
                                        >
                                            {
                                                rawProductRecords.map(val =>
                                                    (<MenuItem value={String(val.rawProductID)} key={String(val.rawProductID)}>
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
                                           //  {helperValid.rawProductID} 
                                </FormHelperText>
                                    </FormControl> */}

                                </>

                                {/* <TextField
                                    variant='outlined'
                                    label="Mã ID sản phẩm thô"
                                    value={String(formData.rawProductID)}
                                    name='rawProductID'
                                    onChange={handleInputChange}
                                    error={helperValid.rawProductID ? true : false}
                                    helperText={helperValid.rawProductID}
                                    required
                                /> */}

                                <TextField
                                    variant='outlined'
                                    label="Mã Code sản phẩm thô"
                                    value={String(formData.rawProductCode)}
                                    name='rawProductCode'
                                    onChange={handleInputChange}
                                    error={helperValid.rawProductCode ? true : false}
                                    helperText={helperValid.rawProductCode}
                                    required
                                />

                                <TextField
                                    variant='outlined'
                                    label="Số lượng"
                                    value={formData.quantity}
                                    name='quantity'
                                    onChange={handleInputChange}
                                    error={helperValid.quantity ? true : false}
                                    helperText={helperValid.quantity}
                                    required
                                    type="number"
                                />

                                <TextField
                                    variant='outlined'
                                    label="Cung cấp bởi"
                                    value={formData.providedBy}
                                    name='providedBy'
                                    onChange={handleInputChange}
                                    error={helperValid.providedBy ? true : false}
                                    helperText={helperValid.providedBy}
                                    required
                                    multiline
                                />

                            </Grid>
                        </Grid>

                        <div className={classes.buttonWrapper}>
                            <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>Cập nhật</Button>
                        </div>

                    </form>
                </Paper>
            </div >


        </>
    )
}

