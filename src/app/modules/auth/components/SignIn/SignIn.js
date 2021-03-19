/* eslint-disable no-empty */
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
import { useShowSnackbar, useForm } from "src/app/utils/handles/index";
import { toast, ToastContainer } from "react-toastify";
import jwt_decode from 'jwt-decode';

const initialFValues = { username: '', password: '' }

const SignIn = ({ toggle, isVisible }) => {
    // console.log("isvisible: " + isVisible);
    // const { showSnackbar } = useShowSnackbar();

    const store = useStore();
    const history = useHistory();
    const dispatch = useDispatch();


    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)


    const [isFirst, setIsFirst] = useState(true)
    const { response } = useSelector((state) => state.auth)



    useEffect(() => {
        // document.title = 'Đăng nhập';
    }, [])


    useEffect(() => {
        // console.log("ValueResponse: " + JSON.stringify(response));

    })

    useEffect(async () => {
        if (!isFirst) {
            const auth = store.getState().auth;
            if (auth.isSignedIn) {
                const role = localStorage.getItem("role");
                redirectByRole(role)

            } else {
                toast.error("Đăng nhập thất bại")
            }

        }
        setIsFirst(false);
    }, [response])


    const handleSubmit = (event) => {
        event.preventDefault();
        const enableSubmit = validation(formData);
        // const enableSubmit = true;

        if (enableSubmit) {
            signIn(formData, dispatch);
        } else {
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

    const redirectByRole = (role) => {
        switch (role) {
            case config.useRoleName.administrator: history.push("/core/admin/home"); break;
            case config.useRoleName.manager: history.push("/core/manager/home"); break;
            case config.useRoleName.businessStaff: history.push("/core/business_staff/home"); break;
            case config.useRoleName.technicalStaff: history.push("/core/technical_staff/home"); break;
        }
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
                                    onChange={handleInputChange}

                                />
                            </label >
                            {<HelperValidation>{helperValid.username}</HelperValidation>}
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
                                    onChange={handleInputChange}
                                />
                            </label >
                            {<HelperValidation>{helperValid.password}</HelperValidation>}

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

