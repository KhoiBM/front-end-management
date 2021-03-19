/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useAuthAction } from 'src/app/stores/actions'
import { useStore, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import config from 'src/environments/config'
import HelperValidation from '../HelperValidation/HelperValidation'
import { useQueryURL } from 'src/app/utils/handles/index'
import { toast } from 'react-toastify'

import { ConfirmFormContainer, ButtonConfirm, IconWrapper, IconLink } from '../../styles/styles'

import { FormWrapper, InputLabel, InputText } from './ForgotPasswordElements'

const ForgotPassword = () => {
    // const { showSnackbar } = useShowSnackbar()
    let query = useQueryURL();

    const store = useStore()
    const history = useHistory()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({ username: "" });


    const [isFirst, setIsFirst] = useState(true)
    const { response } = useSelector((state) => state.auth)
    const [helperValid, setHelperValid] = useState({});

    useEffect(() => {
        if (!isFirst) {
            const response = store.getState().auth.response;
            console.log("valueResponse: " + JSON.stringify(response));
            if (response.result == config.useResultStatus.SUCCESS) {
                // showSnackbar('Vui lòng nhập code để đổi mật khẩu', 'info');
                toast.info('Vui lòng nhập Code để đổi mật khẩu')
                history.push(`/auth/confirm_forgotpassword?username=${formData.username}`);
            }
            else {
                // showSnackbar(`${response.errorInfo || "Xác nhận thất bại"}`, 'error');
                toast.error(`${response.errorInfo || "Xác nhận thất bại"}`)
            }
        }
        setIsFirst(false);
    }, [response])
    const handleSubmit = () => {
        event.preventDefault();
        const enableSubmit = validation(formData);
        console.log("enableSubmit: " + enableSubmit);
        if (enableSubmit) {
            forgotPassword(formData, dispatch);
        } else {
            // showSnackbar(`${"Dữ liệu không hợp lệ"}`, 'error')
            toast.error("Dữ liệu không hợp lệ");
        }
    }
    async function forgotPassword(formData, dispatch) {
        const data = {
            username: formData.username
        };
        await dispatch(useAuthAction().forgotPassword(data));
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validation({ [name]: value })
    }
    const validation = (fieldValues = formData) => {
        const temp = { ...helperValid };
        if ('username' in fieldValues) temp.username = fieldValues.username && fieldValues.username.length > 0 ? "" : "Tên người dùng là bắt buộc"
        setHelperValid({ ...temp });
        return Object.values(temp).every(val => val == "")
    }
    return (
        <>
            <ConfirmFormContainer>
                <FormWrapper onSubmit={handleSubmit} noValidate>
                    <IconWrapper>
                        <IconLink onClick={() => history.goBack()}>
                            <RiCloseFill style={{
                                // transform: "scale(2)",
                                // transition: " all 0.3s ease 0s",
                                // fontSize: "2rem",

                            }} />


                        </IconLink>
                    </IconWrapper>
                    <InputLabel htmlFor="username" >
                        <InputText
                            id="username"
                            name="username"
                            type="text"
                            required
                            autoComplete="on"
                            onChange={handleChange}
                            placeholder="vui lòng nhập Tên người dùng vào đây"

                        />
                    </InputLabel >
                    {helperValid.username && helperValid.username.length > 0 ? <HelperValidation>{helperValid.username}</HelperValidation> : ""}

                    <ButtonConfirm type="submit">
                        Xác nhận
                        </ButtonConfirm>
                </FormWrapper>
            </ConfirmFormContainer>
        </>
    )
}

export default ForgotPassword
