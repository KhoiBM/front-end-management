/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import { RiCloseFill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import brandLogo from "../../../../assets/image/brand.svg";
import HelperValidation from "../HelperValidation/HelperValidation";
import { Box } from "@material-ui/core";
import { AuthService } from "../../../../services/AuthServices/AuthService";
import { useAuthAction } from "src/app/stores/actions";
import { useDispatch, useStore, useSelector } from "react-redux";
import config from "src/environments/config";
import ConfirmCode from "../ConfirmCode/ConfirmCode";
import { toast } from "react-toastify";
import { useForm, useWait, useLoadingEffect } from "src/app/utils";
import { Loader } from "src/app/components";
import { useLoaderHandle } from "src/app/utils/handles/useLoaderHandle";
import { RouteService } from "src/app/services";

const initialFValues = { username: '', email: '', password: '', rePassword: '' }

const SignUp = ({ toggle, isVisible }) => {

    const store = useStore();
    const dispatch = useDispatch();
    const history = useHistory();

    const { response } = useSelector((state) => state.auth)

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)

    const [isFirst, setIsFirst] = useState(true)

    const [enableSubmit, setEnableSubmit] = useState(false)

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    useEffect(() => {
        // document.title = 'Đăng ký';
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();

        const enableSubmit = validation(formData);
        // const enableSubmit = true;

        console.log("enableSubmit: " + enableSubmit);

        setEnableSubmit(enableSubmit)

        if (enableSubmit) {

            console.log("enableSubmit: " + enableSubmit);

            signUp(formData, dispatch);

            setEnableSubmit(false)

        } else {
            toast.error("Dữ liệu không hợp lệ")
        }
    };

    const signUp = async (formData, dispatch) => {

        showLoader()

        const data = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            role: "customer",
        };

        console.log(data)

        await RouteService.init(history)

        await dispatch(useAuthAction().signUp(data));

        hideLoader()
    }




    return (
        <>
            {<Loader loading={loading} />}

            < div className={styles["signup-page-container"]}>
                {isVisible && (
                    <>
                        <section className={styles["signup-wrapper"]}>
                            <div className={styles["icon-close-wrapper"]}>
                                <Link to='#' className={styles["icon-close"]} onClick={() => history.goBack()}>
                                    <RiCloseFill />
                                </Link>
                            </div >
                            <div className={styles["logo-wrapper"]} >
                                <img src={brandLogo} className={styles["brand-logo"]} alt="logo of brand" />
                            </div >
                            <form className={styles["form-signup-wrapper"]} onSubmit={handleSubmit} noValidate >
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

                                <label className={styles["label-input"]} htmlFor="email" >
                                    <section className={styles["label-title-input"]} >
                                        <p>Email</p>
                                    </section >
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className={styles["input-text"]}
                                        autoComplete="on"
                                        onChange={handleInputChange}

                                    />
                                </label >
                                {<HelperValidation>{helperValid.email}</HelperValidation>}
                                < br />

                                <label className={styles["label-input"]} htmlFor="password" >
                                    <section className={styles["label-title-input"]} >
                                        <p>Mật khẩu</p>
                                    </section >
                                    <input
                                        id="password"
                                        name="password"
                                        type="text"
                                        required
                                        className={styles["input-text"]}
                                        autoComplete="on"
                                        onChange={handleInputChange}
                                    />
                                </label >
                                {<HelperValidation>{helperValid.password}</HelperValidation>}
                                < br />
                                <label className={styles["label-input"]} htmlFor="rePassword" >
                                    <section className={styles["label-title-input"]} >
                                        <p>Nhập lại mật khẩu</p>
                                    </section >
                                    <input
                                        id="rePassword"
                                        name="rePassword"
                                        type="text"
                                        required
                                        className={styles["input-text"]}
                                        autoComplete="on"
                                        onChange={handleInputChange}
                                    />
                                </label >
                                {<HelperValidation>{helperValid.rePassword}</HelperValidation>}
                                < br />

                                <button type="submit" className={styles["btn-signup"]} >
                                    Đăng ký
                                </button >
                            </form >
                        </section >
                        <section className={styles["signin-nav-wrapper"]} >
                            <span>Bạn có tài khoản? </span>
                            <Link to="/auth/signin">
                                <button className={styles["btn-nav-signin"]}>Đăng nhập</button>
                            </Link >
                        </section >
                    </>
                )
                }
            </ div>

        </>
    );
};

export default SignUp;