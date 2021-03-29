
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper, Typography, Box, Slide, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import { toast } from 'react-toastify'
import { RiCloseFill } from 'react-icons/ri'
import config from 'src/environments/config'
import { ManageCustomersRawProductImportationServices, BusinessStaffProcessOrderServices } from 'src/app/services'
import { useForm } from 'src/app/utils'
import { PageHeader } from 'src/app/modules/core/components'
import { IconClose } from 'src/app/components'
import { BusinessStaffProcessOrder } from '../../modules/business_staff/components'
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
    dialog: {

    },
    dialogTitle: {
        position: "relative",
        // // backgroundColor: "red"
        padding: theme.spacing(2),

    },
    dialogContent: {

    },
    dialogAction: {

    },

}))



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const initialFValues = {
    orderID: '',
    statusOrder: "",
}
export const ChangeStatusOrder = (props) => {
    const classes = useStyles();


    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)


    const { changeStatusModal, setChangeStatusModal } = props

    const { isOpen, recordForChangeStatus, statusOrderToChange, handleCloseChangeStatusModal } = changeStatusModal


    useEffect(() => {

        // console.log("recordForChangeStatus: " + JSON.stringify(recordForChangeStatus))
        // console.log("formData:" + JSON.stringify(formData))

        if (recordForChangeStatus && recordForChangeStatus != null && recordForChangeStatus != undefined) {

            setFormData({ ...formData, ...recordForChangeStatus })

        }

        // loadInit()

    }, [])

    // const loadInit = async () => {


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
            const response = await (await BusinessStaffProcessOrderServices.changeStatusOrder(formData)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success("Thành công")
                } else {
                    toast.error(`${config.useMessage.resultFailure} - ${response.errorInfo}`)
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
            <Dialog open={isOpen} classes={{ paper: classes.dialog }} TransitionComponent={Transition}>


                <DialogTitle className={classes.dialogTitle}>
                    <IconClose handleClose={handleCloseChangeStatusModal} />
                    <br />
                    <PageHeader>
                        Thay đổi trạng thái đơn hàng
                    </PageHeader>
                </DialogTitle>

                <DialogContent className={classes.dialogContent}>

                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6}>

                                <FormControl variant="outlined" >
                                    <InputLabel id="statusOrder-label">
                                        Trạng thái đơn hàng
                                    </InputLabel>
                                    <Select
                                        labelId="statusOrder-label"
                                        id="statusOrder"
                                        value={formData.statusOrder}
                                        onChange={handleInputChange}
                                        name="statusOrder"
                                        labelWidth={150}
                                    >
                                        {statusOrderToChange && statusOrderToChange != null && statusOrderToChange.length > 0 &&
                                            statusOrderToChange.map((val, index) => (<MenuItem value={val} key={index}>{val}</MenuItem>))
                                        }

                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>


                            </Grid>
                        </Grid>

                        <div className={classes.buttonWrapper}>
                            <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>Lưu</Button>
                        </div>

                    </form>

                </DialogContent>

            </Dialog >

        </>
    )
}




{/* <div className={classes.pageFormContainer}>
<Paper elevation={5} className={classes.pageForm}>

    <IconClose handleClose={props.handleClose} />

    <PageHeader>
        Thay đổi trạng thái đơn hàng
    </PageHeader>

    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
        <Grid container>
            <Grid item xs={6} sm={6} md={6}>

                <FormControl variant="outlined" >
                    <InputLabel id="statusOrder-label">
                        Trạng thái
                    </InputLabel>
                    <Select
                        labelId="statusOrder-label"
                        id="statusOrder"
                        value={formData.statusOrder}
                        onChange={handleInputChange}
                        name="statusOrder"
                        labelWidth={75}
                    >
                        {statusOrderToChange && statusOrderToChange != null && statusOrderToChange.length > 0 &&
                            statusOrderToChange.map((val, index) => (<MenuItem value={val} key={index}>{val}</MenuItem>))
                        }

                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>


            </Grid>
        </Grid>

        <div className={classes.buttonWrapper}>
            <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>Lưu</Button>
        </div>

    </form>
</Paper>
</div > */}

