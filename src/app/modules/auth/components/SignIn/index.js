/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import styles from "./signin.module.css";
// import "./signin.css";
import { RiCloseFill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import brandLogo from "../../../../assets/image/brand.svg";
import HelperValidation from "../HelperValidation";
import Box from '@material-ui/core/Box';
import { AuthService } from "app/services/AuthServices/AuthService";
const SignIn = ({ toggle, isVisible }) => {

    const history = useHistory();

    // console.log("isvisible: " + isVisible);

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [valid, setValid] = useState({
        onUsername: '', onPassword: ''
    });
    const [statusSignIn, setStatusSignIn] = useState({ message: "", isError: false })
    useEffect(() => {
        document.title = 'Signin';
    }, [])
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const enableSubmit = validation(formData, regexPassword);
        console.log("enableSubmit: " + enableSubmit);

        showErrorValid(formData, regexPassword);

        if (enableSubmit) {
            // const infoLogin = {
            //     username: formData.username,
            //     password: formData.password
            // };
            const infoLogin = {
                fullName: formData.username,
                password: formData.password
            };
            var data = JSON.stringify(infoLogin);
            try {

                const response = await AuthService.signIn(data);
                console.log(response.data)
                if (response.data.result == 'success') {
                    setStatusSignIn({ message: "Đăng nhập thành công", isError: false })
                    setTimeout(() => {
                        history.push("/core/admin/management_account");
                    }, 500);

                } else {
                    setStatusSignIn({ message: "Có gì đó không đúng", isError: true })
                }
            } catch (err) {
                setStatusSignIn({ message: "Có gì đó không đúng", isError: true })
                console.error("error fetch api")
            }
        } else {

            setStatusSignIn({ message: "Có gì đó không đúng", isError: true })
        }
    };

    const validation = ({ username = '', password = '' }, regexPassword) => {
        return validationUsername(username) && validationPassword(password, regexPassword) ? true : false;

    }
    const validationUsername = (username) => {
        return username && username.length > 0
    }
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const validationPassword = (password, regexPassword) => {
        return password && password.length >= 8 && password.length <= 20 && regexPassword.test(password);
    }
    const showErrorValid = ({ username, password }, regexPassword) => {
        let validUsernameMessage = username && username.length > 0 ? "" : "Username là bắt buột";
        let validMessage = "";
        if (!password || !(password.length >= 8 && password.length <= 20)) {
            validMessage = "Mật khẩu là bắt buột ( 8 đến 20 ký tự)";
        } else if (!regexPassword.test(password)) {
            validMessage = "Phải có ít nhất 1 số, 1 chứ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
        }
        setValid({
            ...valid, onUsername: validUsernameMessage, onPassword: validMessage
        })
    }
    const colorBox = statusSignIn.isError ? "#e57373" : "#81c784";
    return (
        <>
            {/* {styles[]} */}
            {/* <p>hello SignIn</p> */}
            {isVisible && (
                <div className={styles["signin-page-container"]}>

                    {statusSignIn.message.length > 0 ?
                        <div className={styles["alert-status"]}>
                            <Box style={{ backgroundColor: colorBox, width: "20rem", height: "50px", border: `1px solid ${colorBox}`, borderRadius: "4px" }} className={styles["box-status-signin"]} >{statusSignIn.message}</Box>
                        </div>
                        : ""}
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
                                    <p>Username</p>
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
                                        <p>Password</p>
                                        <Link to="/auth/forgetpassword">
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

                            <button type="submit" className={styles["btn-signin"]} >
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

