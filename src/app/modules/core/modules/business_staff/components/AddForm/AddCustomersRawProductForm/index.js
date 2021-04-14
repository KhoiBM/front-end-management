/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper } from '@material-ui/core'
import { toast } from 'react-toastify'
import { RiCloseFill } from 'react-icons/ri'
import { ManageCategoryServices, ManageCustomersRawProductServices } from 'src/app/services'
import config from 'src/environments/config'
import { PageHeader, DropZoneUpload, ColorPickerInput } from 'src/app/modules/core/components'
import { useForm, useUploadPhoto, useCustomStylesAddEditForm } from 'src/app/utils'
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
export const AddCustomersRawProductForm = (props) => {
    const classes = useStyles();

    const { classesCustomStylesAddEditForm } = useCustomStylesAddEditForm()

    const [uploadFiles, setUploadFiles] = useState([])

    const { uploadPhoto } = useUploadPhoto()

    const [categoryRecords, setCategoryRecords] = useState([])


    const { formData, setFormData, handleInputChange, helperValid = null, validation, handleChangeColor } = useForm(initialFValues)

    const [displayColorPicker, setDisplayColorPicker] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)
        if (enableSubmit) {
            add()
        } else {
            toast.error(config.useMessage.invalidData);
        }
    }

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
                    setCategoryRecords(response.info.records ? response.info.records : [])
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
    const add = async () => {
        // uploadFiles.forEach((file) => {
        //     console.log("name: " + JSON.stringify(file.name))
        //     console.log("type: " + JSON.stringify(file.type))
        // })
        // console.log("uploadFiles: " + JSON.stringify(uploadFiles))
        // console.log(uploadFiles)
        try {
            const response = await (await ManageCustomersRawProductServices.add(formData)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    const bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                    const folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["CUSTOMER'SRAWPRODUCT"]

                    const record = response.info.record

                    const categoryCode = record.categoryCode
                    const rawProductCode = record.rawProductCode

                    const uploadInfo = {
                        bucketName,
                        prefix: `${folder}/${categoryCode}/${rawProductCode}`,
                    }
                    const prefix = `${folder}/${categoryCode}/${rawProductCode}`
                    console.log("prefix:" + prefix)

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
            <div className={classesCustomStylesAddEditForm.pageFormContainer}>
                <Paper elevation={5} className={classesCustomStylesAddEditForm.pageForm}>

                    <IconClose handleClose={props.handleCloseForm} />

                    <PageHeader>
                        Thêm sản phẩm thô của khách hàng
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
                                {/* <TextField
                                    variant='outlined'
                                    label="Màu"
                                    value={formData.color}
                                    name='color'
                                    onChange={handleInputChange}
                                    error={helperValid.color ? true : false}
                                    helperText={helperValid.color}
                                    required
                                /> */}

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
                                            value={formData.categoryID &&
                                                formData.categoryID != null && formData.categoryID.length > 0
                                                ? formData.categoryID
                                                : categoryRecords != null && categoryRecords.length > 0
                                                    ? (() => {
                                                        setFormData({ ...formData, categoryID: categoryRecords[0].categoryID });
                                                        return categoryRecords[0].categoryID
                                                    })()
                                                    : ""


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

                                        }}>{helperValid.categoryID}
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

