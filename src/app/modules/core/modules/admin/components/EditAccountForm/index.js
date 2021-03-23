/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper, IconButton, InputAdornment, OutlinedInput } from '@material-ui/core'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { ManageAccountServices } from 'src/app/services/CoreServices/AdminServices/ManageAcccountServices'
import { RiCloseFill } from 'react-icons/ri'
import { useForm } from 'src/app/utils'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
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
        position: "relative",
        overflow: "scroll",


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
    },
    switchContainer: {
        // marginRight: "25px",
        // background: "red",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "4px",
        minHeight: "1.1876em",

    }
}))
const initialFValues = {
    accountID: '',
    username: "",
    email: "",
    password: "",
    rePassword: "",
    roleID: "1",
    isActive: true,
    showPassword: false,
    showRePassword: false,
    updatedAt: new Date()
}
export const EditAccountForm = (props) => {
    const classes = useStyles();

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)

    const { recordForEdit } = props

    useEffect(() => {
        if (recordForEdit != null && recordForEdit != undefined) {
            setFormData({ ...formData, ...recordForEdit })
        }
    }, [])




    const [recordsRole, setRecordsRole] = useState([])

    useEffect(() => {
        loadInit()
    }, [])

    const loadInit = async () => {
        try {
            const response = await (await ManageAccountServices.getRoleToSelect()).data
            // console.log("response: " + response)
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    // console.log("recordsRole: " + JSON.stringify(response.info.records))
                    setRecordsRole(response.info.records ? response.info.records : [])
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





    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)
        if (enableSubmit) {

            edit(formData)

        } else {
            toast.error(config.useMessage.invalidData);
        }
    }

    const edit = async (formData) => {
        try {
            const data = {
                accountID: formData.accountID,
                username: formData.username,
                email: formData.email,
                password: formData.password,
                roleID: formData.roleID,
                isActive: formData.isActive,
                updatedAt: new Date()
            }
            console.log("data: " + JSON.stringify(data))
            const response = await (await ManageAccountServices.edit(data)).data
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



    const handleClickShowPassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };
    const handleClickShowRePassword = () => {
        setFormData({ ...formData, showRePassword: !formData.showRePassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownRePassword = (event) => {
        event.preventDefault();
    };




    return (
        <>
            {/* <p>editform</p> */}

            <div className={classes.pageFormContainer}>
                <Paper elevation={5} className={classes.pageForm}>
                    <div className={classes.iconCloseWrapper}>
                        <div className={classes.iconClose} onClick={props.handleCloseForm}>
                            <RiCloseFill />
                        </div>
                    </div >
                    <PageHeader>
                        Chỉnh sửa tài khoản
                    </PageHeader>
                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6}>
                                <TextField
                                    variant='outlined'
                                    label="Tên người dùng"
                                    value={formData.username}
                                    name='username'
                                    onChange={handleInputChange}
                                    error={helperValid.username ? true : false}
                                    helperText={helperValid.username}
                                    required
                                />
                                <TextField
                                    variant='outlined'
                                    label="Email"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    error={helperValid.email ? true : false}
                                    helperText={helperValid.email}
                                    required
                                // {...(helperValid & { error: true, helperText: helperValid })}
                                />
                                {/* <TextField
                                    variant='outlined'
                                    label="Mật khẩu"
                                    value={formData.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    error={helperValid.password ? true : false}
                                    helperText={helperValid.password}
                                    required
                                    type='password'
                                />
                                <TextField
                                    variant='outlined'
                                    label="Nhập lại mật khẩu"
                                    value={formData.rePassword}
                                    name="rePassword"
                                    onChange={handleInputChange}
                                    error={helperValid.rePassword ? true : false}
                                    helperText={helperValid.rePassword}
                                    required
                                    type='password'
                                /> */}


                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={formData.showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        name="password"
                                        onChange={handleInputChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {formData.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                        required
                                        error={helperValid.password ? true : false}
                                    />
                                    <FormHelperText style={{
                                        color: "#f44336",
                                        marginLeft: "14px",
                                        marginRight: "14px",
                                        marginBottom: '16px'

                                    }}>{helperValid.password}
                                    </FormHelperText>

                                </FormControl>


                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-rePassword">Nhập lại mật khẩu</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-rePassword"
                                        type={formData.showRePassword ? 'text' : 'password'}
                                        value={formData.rePassword}
                                        name="rePassword"
                                        onChange={handleInputChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowRePassword}
                                                    onMouseDown={handleMouseDownRePassword}
                                                    edge="end"
                                                >
                                                    {formData.showRePassword ? <MdVisibility /> : <MdVisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={130}
                                        required
                                        error={helperValid.rePassword ? true : false}
                                    />
                                    <FormHelperText style={{
                                        color: "#f44336",
                                        marginLeft: "14px",
                                        marginRight: "14px",
                                        marginBottom: '16px'

                                    }}>{helperValid.rePassword}
                                    </FormHelperText>
                                </FormControl>



                                <>
                                    <FormControl variant="outlined" >
                                        <InputLabel id="roleID-label">
                                            Vai trò
                                        </InputLabel>
                                        <Select
                                            labelId="roleID-label"
                                            id="roleID"
                                            value={formData.roleID}
                                            onChange={handleInputChange}
                                            name="roleID"
                                            labelWidth={50}
                                            required
                                        >
                                            {
                                                recordsRole && recordsRole.map((val, index) => (<MenuItem value={val.roleID} key={val.roleID}>{val.roleName}</MenuItem>))
                                            }
                                        </Select>
                                        <FormHelperText></FormHelperText>
                                    </FormControl>
                                </>

                                {/* <div className={classes.switchContainer}> */}
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
                                {/* </div> */}

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
