/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect, useLayoutEffect, useCallback } from "react";
import styles from "./SignIn.module.css";
import { RiCloseFill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import brandLogo from "../../../../assets/image/brand.svg";
import HelperValidation from "../HelperValidation/HelperValidation";
import Box from '@material-ui/core/Box';
import { AuthService } from "../../../../services/AuthServices/AuthService";
import { useSelector, useDispatch, useStore } from "react-redux";
import { useAuthAction } from "src/app/stores/actions";
import _ from "underscore";
import config from "src/environments/config";
import ConfirmCode from "../ConfirmCode/ConfirmCode";
import { useShowSnackbar } from "src/app/utils/handles/index";
import { toast, ToastContainer } from "react-toastify";

const SignIn = ({ toggle, isVisible }) => {
    // console.log("isvisible: " + isVisible);
    // const { showSnackbar } = useShowSnackbar();

    const store = useStore();
    const history = useHistory();
    const dispatch = useDispatch();


    const [formData, setFormData] = useState({ username: '', password: '' });
    const [valid, setValid] = useState({
        onUsername: '', onPassword: ''
    });



    const [isFirst, setIsFirst] = useState(true)
    const { response } = useSelector((state) => state.auth)
    const regexPassword = config.useRegex.regexPassword


    useEffect(() => {
        document.title = 'Đăng nhập';
    }, [])
    useEffect(() => {
        // console.log("ValueResponse: " + JSON.stringify(response));

    })

    useEffect(async () => {
        if (!isFirst) {
            if (response && response.result == config.useResultStatus.SUCCESS) {
                await dispatch(useAuthAction().signedIn())
                const auth = store.getState().auth;
                // console.log("ValueAuth: " + JSON.stringify(auth));
                const response = auth.response;
                if (auth.isSignedIn) {
                    const role = response.info.role;
                    const token = response.info.token;
                    localStorage.setItem("pps-token", JSON.stringify(token));
                    localStorage.setItem("role", role);
                    // showSnackbar('Đăng nhập thành công', 'success');
                    toast.success('Đăng nhập thành công', {
                        position: "top-right",
                    });
                    redirectByRole(role)
                    // history.push('/core/admin/home')
                } else {
                    // showSnackbar(`${"Đăng nhập thất bại"}`, 'error')
                    toast.error("Đăng nhập thất bại")
                }

            } else {

                // showSnackbar(`${response.errorInfo || "Đăng nhập thất bại"}`, 'error')
                toast.error(`${response.errorInfo || "Đăng nhập thất bại"}`);
            }
        }
        setIsFirst(false);
    }, [response])

    const redirectByRole = (role) => {
        switch (role) {
            case config.useRoleName.administrator: history.push("/core/admin/home"); break;
            case config.useRoleName.manager: history.push("/core/manager/home"); break;
            case config.useRoleName.businessStaff: history.push("/core/business_staff/home"); break;
            case config.useRoleName.technicalStaff: history.push("/core/technical_staff/home"); break;
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const enableSubmit = validation(formData, regexPassword);
        // const enableSubmit = true;
        // console.log("enableSubmit: " + enableSubmit);
        if (enableSubmit) {
            signIn(formData, dispatch);
        } else {
            // showSnackbar(`${"Dữ liệu không hợp lệ"}`, 'error')
            toast.error(config.useMessage.invalidData);
        }
    };

    async function signIn(formData, dispatch) {
        const data = {
            username: formData.username,
            password: formData.password
        };
        await dispatch(useAuthAction().signIn(data));


    }

    const validation = ({ username, password }, regexPassword) => {
        showHelperValid({ username, password }, regexPassword);
        return validationUsername(username) && validationPassword(password, regexPassword) ? true : false;

    }
    const validationUsername = (username) => {
        return username && username.length > 0
    }

    const validationPassword = (password, regexPassword) => {
        return password && password.length >= 8 && password.length <= 20 && regexPassword.test(password);
    }
    const showHelperValid = ({ username, password }, regexPassword) => {
        let validUsernameMessage = username && username.length > 0 ? "" : "Tên người dùng là bắt buộc";
        let validMessage = "";
        if (!password || !(password.length >= 8 && password.length <= 20)) {
            validMessage = "Mật khẩu là bắt buộc ( 8 đến 20 ký tự)";
        } else if (!regexPassword.test(password)) {
            validMessage = "Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
        }
        setValid({
            ...valid, onUsername: validUsernameMessage, onPassword: validMessage
        })
    }


    return (
        <>
            {/* {styles[]} */}
            {/* <p>hello SignIn</p> */}
            {isVisible && (
                <div className={styles["signin-page-container"]}>
                    <section className={styles["signin-wrapper"]} >
                        {/* <div className={styles["icon-close-wrapper"]}>
                            <Link to='#' className={styles["icon-close"]} onClick={toggle}>
                                <RiCloseFill />
                            </Link>
                        </div> */}
                        <div className={styles["logo-wrapper"]}>
                            <img src={brandLogo} className={styles["brand-logo"]} alt="logo of brand" />
                        </div >
                        <form className={styles["form-signin-wrapper"]} onSubmit={handleSubmit} noValidate >
                            <label className={styles["label-input"]} htmlFor="username" >
                                <section className={styles["label-title-input"]} >
                                    <p>Tên người dùng</p>
                                </section >

                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className={styles["input-text"]}
                                    autoComplete="on"
                                    onChange={handleChange}

                                />
                            </label >
                            {valid.onUsername.length > 0 ? <HelperValidation>{valid.onUsername}</HelperValidation> : ""}
                            < br />

                            <label className={styles["label-input"]} htmlFor="password" >

                                <section className={styles["label-title-input"]} >
                                    <section className={styles["label-password-container"]} >
                                        <p>Mật khẩu</p>
                                        <Link to="/auth/forgotpassword">
                                            <button className={styles["btn-forgetpassword"]}>
                                                Quên mật khẩu?
                                        </button>
                                        </Link >
                                    </section >
                                </section >
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className={styles["input-text"]}
                                    autoComplete="on"
                                    onChange={handleChange}
                                />
                            </label >
                            {valid.onPassword.length > 0 ? <HelperValidation>{valid.onPassword}</HelperValidation> : ""}

                            <button type="submit" className={styles["btn-signin"]}>
                                Đăng nhập
                            </button >
                        </form >
                    </section >

                    <section className={styles["signup-nav-wrapper"]}>
                        <span>Chưa có tài khoản? </span>
                        <Link to="/auth/signup">
                            <button className={styles["btn-nav-signup"]}>Tạo tài khoản.</button>
                        </Link>
                    </section>

                </div >
            )
            }

        </>
    );
};

export default SignIn;

// const [statusSignIn, setStatusSignIn] = useState({ message: "", isError: false })


//   const colorBox = statusSignIn.isError ? "#e57373" : "#81c784";
// useEffect(async () => await store.subscribe(() => {

//     const responseValue = store.getState().auth.response

// }), [store]);

// const response = state.auth.response
// store.subscribe(() => {
//     showSnackbar('Đăng nhập thành công', 'success')
// })


// if (enableSubmit) {
//     const data = {
//         fullName: formData.username,
//         password: formData.password
//     };
//     dispatch(useAuthAction().signIn(data));

//     // store.subscribe(() => {
//     //     const response = store.getState().auth.response;
//     //     console.log("response: " + JSON.stringify(response))

//     // })

//     // const response = store.getState().auth.response;
//     // console.log("responseValue: " + JSON.stringify(response))
//     // if (response.result == 'success') {
//     //     // setStatusSignIn({ message: "Đăng nhập thành công", isError: false })

//     //     enqueueSnackbar('Đăng nhập thành công', {
//     //         variant: 'success',
//     //     });
//     //     // setTimeout(() => {
//     //     //     // history.push("/core/admin/management_account");
//     //     // }, 500);

//     // } else {
//     //     // setStatusSignIn({
//     //     //     message: response.errorInfo, isError: true
//     //     // })
//     //     enqueueSnackbar(`${response.errorInfo || "Đăng nhập thất bại"}`, {
//     //         variant: 'error',
//     //     });
//     // }
// } else {
//     // setStatusSignIn({ message: "Dữ liệu không hợp lệ", isError: true })
//     useShowSnackbar(`${"Dữ liệu không hợp lệ"}`)
// }



{/* {statusSignIn.message.length > 0 ?
                        <div className={styles["alert-status"]}>
                            <Box style={{ backgroundColor: colorBox, width: "20rem", height: "50px", border: `1px solid ${colorBox}`, borderRadius: "4px" }} className={styles["box-status-signin"]} >{statusSignIn.message}</Box>
                        </div>
                        : ""} */}
