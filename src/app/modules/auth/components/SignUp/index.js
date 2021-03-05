/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styles from "./signup.module.css";
import { RiCloseFill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import brandLogo from "../../../../assets/image/brand.svg";
import HelperValidation from "../HelperValidation";
import { AuthService } from "app/services/AuthServices/AuthService";
import { Box } from "@material-ui/core";


const SignUp = ({ toggle, isVisible }) => {
    console.log("isvisible: " + isVisible);

    const history = useHistory();
    const [formData, setFormData] = useState({ username: '', email: '', password: '', repassword: '' });
    const [valid, setValid] = useState({
        onUsername: '', onEmail: '', onPassword: '', onRePassword: ''
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const [statusSignUp, setStatusSignUp] = useState({ message: "", isError: false })

    useEffect(() => {
        document.title = 'Signup';
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const enableSubmit = validation(formData, regexPassword, regexEmail);
        console.log("enableSubmit: " + enableSubmit);
        showHelperValid(formData, regexPassword, regexEmail);
        if (enableSubmit) {
            // const infoSignUp = {
            //     username: formData.username,
            //     email: formData.email,
            //     password: formData.password
            // };

            const infoSignUp = {
                fullName: formData.username,
                email: formData.email,
                password: formData.password
            };
            var data = JSON.stringify(infoSignUp);
            try {

                const response = await AuthService.signUp(data);
                console.log(response.data)
                if (response.data.result == 'success') {
                    setStatusSignUp({ message: "Đăng ký thành công", isError: false })
                    setTimeout(() => {
                        // history.push("/core");
                    }, 500);

                } else {
                    setStatusSignUp({ message: `${response.data.errorInfo}`, isError: true })
                }
            } catch (err) {
                setStatusSignUp({ message: "Có gì đó không đúng", isError: true })
                console.error("error fetch api: " + err)
            }
        }
    };

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const validation = ({ username = '', email = '', password = '', repassword = '' }, regexPassword, regexEmail) => {
        return validationUsername(username) && validationEmail(email, regexEmail) && validationPassword(password, regexPassword) && validationPassword(repassword, regexPassword) && password === repassword ? true : false;

    }
    const validationUsername = (username) => {
        return username && username.length > 0
    }
    const validationEmail = (email = '', regexEmail) => {
        return email && regexEmail.test(email);
    }
    const validationPassword = (password = '', regexPassword) => {
        return password && password.length >= 8 && password.length <= 20 && regexPassword.test(password);
    }
    const showHelperValid = ({ username = '', email = '', password = '', repassword = '' }, regexPassword, regexEmail) => {
        let validUsernameMessage = username && username.length > 0 ? "" : "Username là bắt buột";
        let validEmailMessage = "";
        if (!email) {
            validEmailMessage = "Email là bắt buột";
        }
        else if (!regexEmail.test(email)) {
            validEmailMessage = "Email không hợp lệ"
        }
        const showHelperValidPassword = (password = '') => {
            let validMessage = "";
            if (!password || !(password.length >= 8 && password.length <= 20)) {
                validMessage = "Mật khẩu là bắt buột ( 8 đến 20 ký tự)";
            } else if (!regexPassword.test(password)) {
                validMessage = "Phải có ít nhất 1 số, 1 chứ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
            }
            return validMessage
        }
        let validPasswordMessage = showHelperValidPassword(password);
        let validRePasswordMessage = showHelperValidPassword(repassword);
        if (!validRePasswordMessage && repassword != password) {
            validRePasswordMessage = "Mật khẩu phải giống với mật khẩu ở trên";
        }
        setValid({
            ...valid, onUsername: validUsernameMessage, onEmail: validEmailMessage, onPassword: validPasswordMessage, onRePassword: validRePasswordMessage
        })
    }
    const colorBox = statusSignUp.isError ? "#e57373" : "#81c784";
    return (
        <>
            {/* <p>hello SignUp</p> */}
            {isVisible && (
                <div className={styles["signup-page-container"]}>
                    {statusSignUp.message.length > 0 ?
                        <div className={styles["alert-status"]}>
                            <Box style={{ backgroundColor: colorBox, width: "20rem", height: "50px", border: `1px solid ${colorBox}`, borderRadius: "4px" }} className={styles["box-status-signin"]} >{statusSignUp.message}</Box>
                        </div>
                        : ""}
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
                                    onChange={handleChange}

                                />
                            </label >
                            {valid.onEmail.length > 0 ? <HelperValidation>{valid.onEmail}</HelperValidation> : ""}
                            < br />

                            <label className={styles["label-input"]} htmlFor="password" >
                                <section className={styles["label-title-input"]} >
                                    <p>Password</p>
                                </section >
                                <input
                                    id="password"
                                    name="password"
                                    type="text"
                                    required
                                    className={styles["input-text"]}
                                    autoComplete="on"
                                    onChange={handleChange}
                                />
                            </label >
                            {valid.onPassword.length > 0 ? <HelperValidation>{valid.onPassword}</HelperValidation> : ""}
                            < br />
                            <label className={styles["label-input"]} htmlFor="repassword" >
                                <section className={styles["label-title-input"]} >
                                    <p>Repassword</p>
                                </section >
                                <input
                                    id="repassword"
                                    name="repassword"
                                    type="repassword"
                                    required
                                    className={styles["input-text"]}
                                    autoComplete="on"
                                    onChange={handleChange}
                                />
                            </label >
                            {valid.onRePassword.length > 0 ? <HelperValidation>{valid.onRePassword}</HelperValidation> : ""}
                            < br />

                            <button type="submit" className={styles["btn-signup"]} >
                                Đăng ký
              </button >
                        </form >
                    </section >
                    <section className={styles["signin-nav-wrapper"]} >
                        <span>Bạn có tài khoản? </span>
                        <Link to="/auth/signin">
                            <button className={styles["btn-nav-signin"]}>Đăng nhập.</button>
                        </Link >
                    </section >
                </div >
            )
            }
        </>
    );
};

export default SignUp;
