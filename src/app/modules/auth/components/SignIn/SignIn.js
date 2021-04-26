/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import styles from "./SignIn.module.css";
import { RiCloseFill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import brandLogo from "../../../../assets/image/brand.svg";
import HelperValidation from "../HelperValidation/HelperValidation";
import Box from '@material-ui/core/Box';
import { AuthService } from "../../../../services/AuthServices/AuthService";
import { useSelector, useDispatch, useStore } from "react-redux";
import { useAuthAction, useLoadingAction } from "src/app/stores/actions";
import config from "src/environments/config";
import { useForm } from "src/app/utils/handles/index";
import { toast } from "react-toastify";
import jwt_decode from 'jwt-decode';
import { RouteService } from "src/app/services";
import { useLoaderHandle } from "src/app/utils/handles/useLoaderHandle";
import { Loader } from "src/app/components";
import { throttle } from 'lodash';

const initialFValues = { username: '', password: '' }

const SignIn = ({ toggle, isVisible }) => {

    // const store = useStore();

    const history = useHistory();

    const dispatch = useDispatch();

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)

    const [isFirst, setIsFirst] = useState(true)

    const { response } = useSelector((state) => state.auth)

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    useEffect(() => {
        // document.title = 'Đăng nhập';
    }, [])

    const handleSubmit = throttle((event) => {
        event.preventDefault();

        const enableSubmit = validation(formData);

        console.log("formdata: " + JSON.stringify(formData))

        if (enableSubmit) {

            signIn(formData, dispatch);

        } else {
            toast.error(config.useMessage.invalidData);
        }
    });

    async function signIn(formData, dispatch) {

        // showLoader()

        const data = {
            username: formData.username,
            password: formData.password
        };

        await RouteService.init(history)

        await dispatch(useAuthAction().signIn(data));



        // hideLoader()

    }


    return (
        <>
            {<Loader loading={loading} />}

            {isVisible && (
                <div className={styles["signin-page-container"]}>
                    <section className={styles["signin-wrapper"]} >

                        <div className={styles["icon-close-wrapper"]}>
                            <Link to='#' className={styles["icon-close"]} onClick={() => history.push("/core/home_page")}>
                                <RiCloseFill />
                            </Link>
                        </div >

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
                                            <button type="button" tabIndex="1" className={styles["btn-forgetpassword"]}>
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

                            <button tabIndex="0" type="submit" className={styles["btn-signin"]}>
                                Đăng nhập
                            </button >
                        </form >
                    </section >

                    <section className={styles["signup-nav-wrapper"]}>
                        <span>Chưa có tài khoản? </span>
                        <Link to="/auth/signup">
                            <button className={styles["btn-nav-signup"]} >Tạo tài khoản</button>
                        </Link>
                    </section>

                </div >
            )
            }

        </>
    );
};

export default SignIn;

