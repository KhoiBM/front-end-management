

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper } from '@material-ui/core'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { RiCloseFill } from 'react-icons/ri'
import { useForm } from 'src/app/utils'
import { ManageCategoryServices, ManageServiceServices } from 'src/app/services'
import { PageHeader } from 'src/app/modules/core/components'
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
        width: "25rem",
        padding: theme.spacing(3),
        position: "relative",
        // background: "blue",

    },
    pageFormContainer: {
        width: "100%",
        height: "100%",
        // background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        position: "absolute",
        top: 0


    },
    iconCloseWrapper: {
        position: "absolute",
        right: theme.spacing(2),
        top: theme.spacing(2),
        color: "var(--primary-color-main)",
        // color: "var(--secondary-color-main)",
        transform: "scale(2)",
        transition: " all 0.3s ease 0s"

    },
    iconClose: {
        '&:hover': {
            color: "var(--primary-color-dark)",
            // color: "var(--secondary-color-main)",
        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
            // transform: "scale(5)",
        }
    }
}))

const initialFValues = {
    categoryID: '',
    categoryName: '',
    description: '',
    serviceID: 1,
    isActive: true,
    updatedAt: new Date()
}
export const EditCategoryForm = (props) => {
    const classes = useStyles();

    const [serviceRecords, setServiceRecords] = useState([])

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)


    const { recordForEdit } = props


    useEffect(() => {
        if (recordForEdit != null && recordForEdit != undefined) {
            setFormData({ ...formData, ...recordForEdit })
        }
    }, [])

    useEffect(() => {
        loadInit()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formdata: " + JSON.stringify(formData))

        const enableSubmit = validation(formData)
        if (enableSubmit) {
            edit()
        } else {
            toast.error(config.useMessage.invalidData);
        }
    }


    const loadInit = async () => {
        try {
            const response = await (await ManageServiceServices.getAll()).data
            // console.log("response: " + response)
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    console.log("recordsService: " + JSON.stringify(response.info.records))
                    setServiceRecords(response.info.records ? response.info.records : [])
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
    const edit = async () => {
        try {
            const response = await (await ManageCategoryServices.edit(formData)).data
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
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`,)
        }

    }
    return (
        <>
            {/* <p>addform</p> */}
            <div className={classes.pageFormContainer}>
                <Paper elevation={5} className={classes.pageForm}>

                    <div className={classes.iconCloseWrapper}>
                        <div className={classes.iconClose} onClick={props.handleCloseForm}>
                            <RiCloseFill />
                        </div>
                    </div >

                    <PageHeader>
                        Chỉnh sửa thể loại
                    </PageHeader>

                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6}>
                                <TextField
                                    variant='outlined'
                                    label="Tên thể loại"
                                    value={formData.categoryName}
                                    name='categoryName'
                                    onChange={handleInputChange}
                                    error={helperValid.categoryName ? true : false}
                                    helperText={helperValid.categoryName}
                                    required
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

                                <>
                                    <FormControl variant="outlined" >
                                        <InputLabel id="serviceID-label">

                                        </InputLabel>
                                        <Select
                                            labelId="serviceID-label"
                                            id="serviceID"
                                            value={parseInt(formData.serviceID, 10)}
                                            onChange={handleInputChange}
                                            name="serviceID"
                                        >
                                            {
                                                serviceRecords.map(val => (<MenuItem value={parseInt(val.serviceID, 10)} key={parseInt(val.serviceID, 10)}>{val.serviceName}</MenuItem>))
                                            }



                                        </Select>
                                        <FormHelperText></FormHelperText>
                                    </FormControl>
                                </>
                                <div>
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
                                </div>


                            </Grid>
                        </Grid>
                        <div className={classes.buttonWrapper}>
                            <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>Lưu</Button>
                        </div>
                    </form>
                </Paper>
            </div>


        </>
    )
}

