/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper } from '@material-ui/core'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { RiCloseFill } from 'react-icons/ri'
import { useForm, useUploadPhoto, useCustomStylesAddEditForm, useFormat, useLoadingEffect } from 'src/app/utils'
import { ManageRawProductServices, ManageCategoryServices } from 'src/app/services'
import { PageHeader, DropZoneUpload, ColorPickerInput } from 'src/app/modules/core/components'
import { PhotoServices } from 'src/app/services/CoreServices/PhotoServices/PhotoServices.js'
import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';
import { ChromePicker } from 'react-color'
import { set } from 'date-fns'
import { IconClose, Loader } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'

const useStyles = makeStyles(theme => ({

}))

const initialFValues = {
    rawProductID: '',
    rawProductName: '',
    unitPrice: '',
    totalQuantity: 0,
    size: '',
    color: '#000',
    description: '',
    categoryID: "",
    createdAt: new Date()
}

export const AddRawProductForm = (props) => {
    const classes = useStyles();

    const { classesCustomStylesAddEditForm } = useCustomStylesAddEditForm()

    const [uploadFiles, setUploadFiles] = useState([])

    const { uploadPhoto } = useUploadPhoto()

    const [categoryRecords, setCategoryRecords] = useState([])

    const { formData, setFormData, handleInputChange, helperValid = null, validation, handleChangeColor } = useForm(initialFValues)

    const [displayColorPicker, setDisplayColorPicker] = useState(false)

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    useEffect(() => {
        loadInit()
    }, [])

    const loadInit = async () => {
        try {
            const response = await (await ManageCategoryServices.getAll()).data
            // console.log("response: " + response)
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    // console.log("recordsCategory: " + JSON.stringify(response.info.records))

                    const records = response.info.records
                    setCategoryRecords(records ? records : [])
                    setFormData({ ...formData, categoryID: records[0].categoryID });
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



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)
        if (enableSubmit) {

            if (uploadFiles && uploadFiles != null && uploadFiles.length > 0) {
                add(formData)
            }
            else {
                toast.error(config.useMessage.uploadPhotoFiles);
            }

        } else {
            toast.error(config.useMessage.invalidData);
        }
    }

    const add = async (formData) => {
        // uploadFiles.forEach((file) => {
        //     console.log("name: " + JSON.stringify(file.name))
        //     console.log("type: " + JSON.stringify(file.type))
        // })
        // console.log("uploadFiles: " + JSON.stringify(uploadFiles))
        console.log(uploadFiles)

        try {
            const data = {
                // rawProductID: '',
                rawProductName: formData.rawProductName,
                unitPrice: formData.unitPrice,
                totalQuantity: formData.totalQuantity,
                size: formData.size,
                color: formData.color,
                description: formData.description,
                categoryID: formData.categoryID,
                // isActive: true,
                // createdAt: new Date()

            }
            console.log("data: " + JSON.stringify(data))
            const response = await (await ManageRawProductServices.add(data)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {


                    const bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                    const folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]

                    const record = response.info.record

                    const categoryCode = record.categoryCode
                    const rawProductCode = record.rawProductCode

                    const uploadInfo = {
                        bucketName,
                        prefix: `${folder}/${categoryCode}/${rawProductCode}`,
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
            toast.error(`${config.useMessage.fetchApiFailure} + ${err} `,)
        }

    }
    return (
        <>
            {/* <p>addform</p> */}
            {/* <Loader loading={loading} /> */}

            <div className={classesCustomStylesAddEditForm.pageFormContainer}>
                <Paper elevation={5} className={classesCustomStylesAddEditForm.pageForm}>

                    <IconClose handleClose={props.handleCloseForm} />

                    <PageHeader>
                        Thêm sản phẩm thô
                    </PageHeader>

                    <form noValidate onSubmit={handleSubmit} className={classesCustomStylesAddEditForm.rootForm}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={6} className={classesCustomStylesAddEditForm.gridItem1}>
                                <TextField
                                    variant='outlined'
                                    label="Tên sản phẩm thô"
                                    value={formData.rawProductName}
                                    name='rawProductName'
                                    onChange={handleInputChange}
                                    error={helperValid.rawProductName ? true : false}
                                    helperText={helperValid.rawProductName}
                                    required

                                />
                                <TextField
                                    variant='outlined'
                                    label="Giá đơn vị"
                                    value={formData.unitPrice}
                                    name='unitPrice'
                                    onChange={handleInputChange}
                                    error={helperValid.unitPrice ? true : false}
                                    helperText={helperValid.unitPrice}
                                    required
                                    type="number"
                                />

                                {/* <TextField
            variant='outlined'
            label="Tổng số lượng"
            value={formData.totalQuantity}
            name='totalQuantity'
            onChange={handleInputChange}
            error={helperValid.totalQuantity ? true : false}
            helperText={helperValid.totalQuantity}
            required
        /> */}
                                <TextField
                                    variant='outlined'
                                    label="Kích thước"
                                    value={formData.size}
                                    name='size'
                                    onChange={handleInputChange}
                                    error={helperValid.size ? true : false}
                                    helperText={helperValid.size}
                                    required
                                />

                                <TextField
                                    variant='outlined'
                                    label="Màu"
                                    value={formData.color}
                                    name='color'
                                    // onChange={handleInputChange}
                                    error={helperValid.color ? true : false}
                                    helperText={helperValid.color}
                                    required
                                    onClick={() => {
                                        setDisplayColorPicker((prev => !prev))
                                    }}
                                    autoFocus={displayColorPicker ? true : false}
                                />

                                <>
                                    <div className={classesCustomStylesAddEditForm.colorPickerInputContainer}>

                                        <ColorPickerInput displayColorPicker={displayColorPicker} setDisplayColorPicker={setDisplayColorPicker} color={formData.color} handleChangeColor={handleChangeColor} />

                                    </div>
                                </>





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

                                <>
                                    <FormControl variant="outlined" >
                                        <InputLabel id="categoryID-label">
                                            Thể loại
                                        </InputLabel>
                                        <Select
                                            labelId="categoryID-label"
                                            id="categoryID"
                                            value={formData.categoryID
                                            }
                                            onChange={handleInputChange}
                                            name="categoryID"
                                            labelWidth={60}
                                            required
                                        >
                                            {
                                                categoryRecords.map(val => <MenuItem value={val.categoryID} key={val.categoryID}>{val.categoryName}</MenuItem>)
                                            }

                                        </Select>
                                        <FormHelperText style={{
                                            color: "#f44336",
                                            marginLeft: "14px",
                                            marginRight: "14px",
                                            marginBottom: '16px',

                                        }}>
                                            {/* {helperValid.categoryID} */}
                                        </FormHelperText>
                                    </FormControl>
                                </>

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




