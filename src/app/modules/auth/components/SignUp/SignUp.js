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


const SignUp = ({ toggle, isVisible }) => {

    const store = useStore();
    const dispatch = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState({ username: '', email: '', password: '', repassword: '' });
    const [valid, setValid] = useState({
        onUsername: '', onEmail: '', onPassword: '', onRePassword: ''
    });


    const { response } = useSelector((state) => state.auth)
    const [isFirst, setIsFirst] = useState(true)

    const regexPassword = config.useRegex.regexPassword
    const regexEmail = config.useRegex.regexEmail

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        document.title = 'Đăng ký';
    }, [])

    useEffect(() => {
        if (!isFirst) {
            if (response && response.result == config.useResultStatus.SUCCESS) {
                toast.info("Vui lòng kích hoạt code trong email")
                history.push(`/auth/confirm_code?username=${formData.username}`)
            } else {
                toast.info(`${response.errorInfo || "Đăng ký thất bại"}`)

            }
        }
        setIsFirst(false);
    }, [response])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const enableSubmit = validation(formData, regexPassword, regexEmail);
        console.log("enableSubmit: " + enableSubmit);

        if (enableSubmit) {
            signUp(formData, dispatch);
        } else {
            toast.error("Dữ liệu không hợp lệ")
        }
    };
    const signUp = (formData, dispatch) => {
        const data = {
            fullName: formData.username,
            email: formData.email,
            password: formData.password
        };
        console.log(data)
        dispatch(useAuthAction().signUp(data));
    }



    const validation = ({ username, email, password, repassword }, regexPassword, regexEmail) => {
        showHelperValid({ username, email, password, repassword }, regexPassword, regexEmail);
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
        let validUsernameMessage = username && username.length > 0 ? "" : "Tên người dùng là bắt buột";
        let validEmailMessage = "";
        if (!email) {
            validEmailMessage = "Email là bắt buộc";
        }
        else if (!regexEmail.test(email)) {
            validEmailMessage = "Email không hợp lệ"
        }
        const showHelperValidPassword = (password = '') => {
            let validMessage = "";
            if (!password || !(password.length >= 8 && password.length <= 20)) {
                validMessage = "Mật khẩu là bắt buộc ( 8 đến 20 ký tự)";
            } else if (!regexPassword.test(password)) {
                validMessage = "Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
            }
            return validMessage
        }
        let validPasswordMessage = showHelperValidPassword(password);
        let validRePasswordMessage = showHelperValidPassword(repassword);
        if (!validRePasswordMessage && repassword != password) {
            validRePasswordMessage = "Mật khẩu này phải giống với mật khẩu ở trên";
        }
        setValid({
            ...valid, onUsername: validUsernameMessage, onEmail: validEmailMessage, onPassword: validPasswordMessage, onRePassword: validRePasswordMessage
        })
    }

    return (
        <>
            {/* <p>hello SignUp</p> */}
            {isVisible && (
                <div className={styles["signup-page-container"]}>

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
                                    <p>Mật khẩu</p>
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
                                    <p>Nhập lại mật khẩu</p>
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

// const colorBox = statusSignUp.isError ? "#e57373" : "#81c784";


// {statusSignUp.message.length > 0 ?
//     <div className={styles["alert-status"]}>
//         <Box style={{ backgroundColor: colorBox, width: "20rem", height: "50px", border: `1px solid ${colorBox}`, borderRadius: "4px" }} className={styles["box-status-signin"]} >{statusSignUp.message}</Box>
//     </div>
//     : ""}