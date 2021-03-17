/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, Button, Paper, TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@material-ui/core'
import { RiCloseFill } from 'react-icons/ri'
import PageHeader from '../PageHeader'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { ProfileServices } from 'src/app/services/CoreServices/ProfileServices/ProfileServices'

import { useHistory } from 'react-router-dom'
import {
    DatePicker,
} from '@material-ui/pickers';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import bgAuth from "src/app/assets/image/bg_auth.jpeg"
import { useForm } from 'src/app/utils'
const useStyles = makeStyles(theme => ({
    rootForm: {
        marginTop: theme.spacing(3),
        width: "100%",
        // overflow: "scroll",
        // border: "1px solid red",
        '& .MuiFormControl-root': {
            width: '200%',
            height: "auto",
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
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
        top: 0,
        // overflow: "scroll",

    },
    bg: {
        backgroundImage: `url(${bgAuth})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        // background: "red"
        // overflowY: "hidden"
    },
    pageForm: {
        width: "30rem",
        padding: theme.spacing(3),
        position: "relative",
        // background: "blue",
        // overflow: "scroll",

    },
    iconCloseWrapper: {
        position: "absolute",
        right: theme.spacing(2),
        top: theme.spacing(2),
        color: "var(--primary-color-main)",
        transform: "scale(2)",
        transition: " all 0.3s ease 0s"

    },
    iconClose: {
        '&:hover': {
            color: "var(--primary-color-dark)",
        },
        '&:focus': {
            outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
            // transform: "scale(5)",
        }
    },
    buttonSaveWrapper: {
        // border: "1px solid red",
        width: '100%',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    buttonSave: {
        cursor: "pointer",
        marginTop: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    },
    genderGroup: {
        display: "flex",
        // color: "red"
    }
}))
const initialFValues = {
    id: '',
    firstName: "",
    lastName: "",
    // avatar_Url: "",
    phone: "",
    dob: "",
    gender: "male",
    address: "",
}
// const FormControlLabelWrapper = props => {
//     const { ...labelProps } = props;
//     return (
//         <FormControlLabel
//             control={<Radio />}
//             label={props.labelValue}
//             {...labelProps}
//         />
//     );
// };
const Profile = () => {
    const history = useHistory()
    const classes = useStyles()
    const { formData, setFormData, handleInputChange, helperValid = null, validation, dobSelected, setDobSelected, handleChangeDob } = useForm(initialFValues)
    const [record, setRecord] = useState({});


    useEffect(async () => {
        document.body.classList.add(classes.bg)
        try {
            const response = await (await ProfileServices.viewProfile()).data
            if (response.result == config.useResultStatus.SUCCESS) {
                // console.log(JSON.stringify(response.info.record))
                setRecord({ ...response.info.record })
                setFormData({ ...formData, ...response.info.record })

                const formatDob = parse(response.info.record.dob, 'dd-MM-yyyy', new Date())
                // console.log(formatDob)

                setDobSelected(formatDob)

            } else {
                toast.error(config.useMessage.resultFailure)
            }
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)


        // const enableSubmit = true
        if (enableSubmit) {
            try {
                const data = {
                    ...formData,
                    gender: formData.gender == "male" ? false : true,
                    dob: format(dobSelected, "dd-MM-yyyy")
                }
                console.log("data: " + JSON.stringify(data))
                const response = await (await ProfileServices.editProfile(data)).data
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success("Thành công")
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } catch (err) {
                toast.error(config.useMessage.fetchApiFailure)
            }
        } else {
            toast.error(config.useMessage.invalidData);
        }
    }
    return (
        <>
            {/* <p>Profile</p> */}
            <div className={classes.pageFormContainer}>
                <Paper elevation={5} className={classes.pageForm}>
                    <div className={classes.iconCloseWrapper} onClick={() => { history.goBack() }}>
                        <div className={classes.iconClose}>
                            <RiCloseFill />
                        </div>
                    </div >
                    <PageHeader>
                        Hồ sơ của tôi
                    </PageHeader>
                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    variant='outlined'
                                    label="Tên"
                                    value={formData.firstName}
                                    name='firstName'
                                    onChange={handleInputChange}
                                    error={helperValid.firstName ? true : false}
                                    helperText={helperValid.firstName}
                                />
                                <TextField
                                    variant='outlined'
                                    label="Họ"
                                    value={formData.lastName}
                                    name='lastName'
                                    onChange={handleInputChange}
                                    error={helperValid.lastName ? true : false}
                                    helperText={helperValid.lastName}
                                />

                                <TextField
                                    variant='outlined'
                                    label="Số điện thoại"
                                    value={formData.phone}
                                    name='phone'
                                    onChange={handleInputChange}
                                    error={helperValid.phone ? true : false}
                                    helperText={helperValid.phone}
                                />

                                <div>
                                    <DatePicker value={dobSelected} onChange={handleChangeDob}
                                        openTo="year"
                                        format="dd-MM-yyyy"
                                        label="Ngày sinh"
                                        views={["year", "month", "date"]}
                                    />
                                    <FormHelperText style={{
                                        color: "#f44336",
                                        marginLeft: "14px",
                                        marginRight: "14px",
                                        marginBottom: '16px',

                                    }}>{helperValid.dob}
                                    </FormHelperText>
                                </div>

                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Giới tính</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender" value={formData.gender} onChange={handleInputChange} className={classes.genderGroup}>
                                        <FormControlLabel value={"female"} control={<Radio color='primary' />} label="Nữ" />
                                        <FormControlLabel value={"male"} control={<Radio color='primary' />} label="Nam" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField
                                    variant='outlined'
                                    label="Địa chỉ"
                                    value={formData.address}
                                    name='address'
                                    onChange={handleInputChange}
                                    error={helperValid.address ? true : false}
                                    helperText={helperValid.address}
                                    multiline
                                />


                            </Grid>
                        </Grid>
                        <div className={classes.buttonSaveWrapper}>
                            <Button type="submit" variant="contained" color="primary" size="large" className={classes.buttonSave}>Lưu</Button>
                        </div>
                    </form>

                </Paper>
            </div>
        </>
    )
}

export default Profile
