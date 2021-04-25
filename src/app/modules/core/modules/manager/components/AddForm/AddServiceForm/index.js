/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper } from '@material-ui/core'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { RiCloseFill } from 'react-icons/ri'
import { useForm, useUploadPhoto, useCustomStylesAddEditForm, useFormat, useLoadingEffect } from 'src/app/utils'
import { ManageServices } from '../../../../manager/components'
import { ManageServiceServices } from 'src/app/services'
import { PageHeader, DropZoneUpload } from 'src/app/modules/core/components'
import { IconClose, Loader } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'
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
    serviceID: '',
    serviceName: '',
    servicePrice: 0,
    description: '',
    isActive: true,
    createdAt: new Date()
}
export const AddServiceForm = (props) => {
    const classes = useStyles();

    const { classesCustomStylesAddEditForm } = useCustomStylesAddEditForm()

    const [uploadFiles, setUploadFiles] = useState([])

    const { uploadPhoto } = useUploadPhoto()

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)
        if (enableSubmit) {
            if (uploadFiles && uploadFiles != null && uploadFiles.length > 0) {
                add()
            }
            else {
                toast.error(config.useMessage.uploadPhotoFiles);
            }

        } else {
            toast.error(config.useMessage.invalidData);
        }
    }

    const add = async () => {

        try {
            const response = await (await ManageServiceServices.add(formData)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    const bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                    const folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["SERVICE"]

                    const record = response.info.record

                    const serviceCode = record.serviceCode

                    const uploadInfo = {
                        bucketName,
                        prefix: `${folder}/${serviceCode}`,
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
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`,)
        }


    }
    return (
        <>
            {/* <p>addform</p> */}
            <Loader loading={loading} />

            <div className={classesCustomStylesAddEditForm.pageFormContainer}>
                <Paper elevation={5} className={classesCustomStylesAddEditForm.pageForm}>

                    <IconClose handleClose={props.handleCloseForm} />

                    <PageHeader>
                        Thêm dịch vụ
                    </PageHeader>

                    <form noValidate onSubmit={handleSubmit} className={classesCustomStylesAddEditForm.rootForm}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={6} className={classesCustomStylesAddEditForm.gridItem1}>
                                <TextField
                                    variant='outlined'
                                    label="Tên dịch vụ"
                                    value={formData.serviceName}
                                    name='serviceName'
                                    onChange={handleInputChange}
                                    error={helperValid.serviceName ? true : false}
                                    helperText={helperValid.serviceName}
                                    required
                                />

                                <TextField
                                    variant='outlined'
                                    label="Giá dịch vụ"
                                    value={formData.servicePrice}
                                    name='servicePrice'
                                    onChange={handleInputChange}
                                    error={helperValid.servicePrice ? true : false}
                                    helperText={helperValid.servicePrice}
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

                                {/* <div>
                                    <FormControlLabel
                                        label="Trạng thái:"
                                        labelPlacement="start"
                                        control={<Switch
                                            color="primary"
                                            checked={formData.isActive}
                                            onChange={handleInputChange}
                                            name="isActive"
                                        />}
                                    />
                                    <FormHelperText>{helperValid.isActive}</FormHelperText>
                                </div> */}


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

