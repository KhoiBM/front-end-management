/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import { ConfirmFormContainer, ButtonConfirm, IconWrapper, IconLink, InputLabel } from '../../styles/styles'
import { FormWrapper, InputText } from './ConfirmForgotPasswordElements'

import { RiCloseFill } from 'react-icons/ri'
import HelperValidation from '../HelperValidation/HelperValidation'
import { useAuthAction } from 'src/app/stores/actions'
import { useStore, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import config from 'src/environments/config'

import { toast } from 'react-toastify'
import { useQueryURL } from 'src/app/utils'
import { Loader } from 'src/app/components'
import { RouteService } from 'src/app/services'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'

const ConfirmForgotPassword = () => {
    // const { showSnackbar } = useShowSnackbar()
    let query = useQueryURL();
    const store = useStore()
    const history = useHistory()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({ confirmCode: "", newPassword: "", reNewPassword: "" });
    const [isFirst, setIsFirst] = useState(true)
    const { response } = useSelector((state) => state.auth)
    const [helperValid, setHelperValid] = useState({});
    const regexPassword = config.useRegex.regexPassword

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()



    const handleSubmit = () => {
        event.preventDefault();
        const enableSubmit = validation(formData);
        console.log("enableSubmit: " + enableSubmit);
        if (enableSubmit) {
            forgotPassword(formData, dispatch);
        } else {
            toast.error(config.useMessage.invalidData)
        }
    }
    const forgotPassword = async (formData, dispatch) => {
        const data = {
            username: query.get("username"),
            confirmCode: formData.confirmCode,
            newPassword: formData.newPassword,
        };
        await RouteService.init(history)
        await dispatch(useAuthAction().confirmForgotPassword(data));
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validation({ [name]: value })
    }
    const validation = (fieldValues = formData) => {
        const temp = { ...helperValid };
        if ('confirmCode' in fieldValues) temp.confirmCode = fieldValues.confirmCode && fieldValues.confirmCode.length > 0 ? "" : "Code là bắt buộc"
        if ('newPassword' in fieldValues) temp.newPassword = fieldValues.newPassword && fieldValues.newPassword.length >= 8 && fieldValues.newPassword.length <= 20 && regexPassword.test(fieldValues.newPassword) ? "" : "Mật khẩu là bắt buộc ( 8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
        if ('reNewPassword' in fieldValues) {
            temp.reNewPassword = fieldValues.reNewPassword
                && fieldValues.reNewPassword.length >= 8
                && fieldValues.reNewPassword.length <= 20
                && regexPassword.test(fieldValues.reNewPassword)
                ? "" : "Mật khẩu là bắt buộc(8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt";
        }
        if ('newPassword' in fieldValues && 'reNewPassword' in fieldValues) {
            console.log("reNewPassword:" + fieldValues.reNewPassword)
            console.log("newPassword:" + fieldValues.newPassword)
            if (temp.reNewPassword == "") {
                temp.reNewPassword = fieldValues.reNewPassword == fieldValues.newPassword
                    ? "" : "Mật khẩu này phải giống với mật khẩu ở trên"
            }
        }
        setHelperValid({ ...temp });
        return Object.values(temp).every(val => val == "")
    }
    return (
        <>

            {<Loader loading={loading} />}
            <ConfirmFormContainer>
                <FormWrapper
                    onSubmit={handleSubmit}
                    noValidate>
                    <IconWrapper>
                        <IconLink onClick={() => history.goBack()}>
                            <RiCloseFill />
                        </IconLink>
                    </IconWrapper>
                    <InputLabel htmlFor="confirmCode" >
                        <InputText
                            id="confirmCode"
                            name="confirmCode"
                            type="text"
                            required
                            autoComplete="on"
                            onChange={handleChange}
                            placeholder="vui lòng nhập Code vào đây"

                        />
                    </InputLabel >
                    {helperValid.confirmCode && helperValid.confirmCode.length > 0 ? <HelperValidation>{helperValid.confirmCode}</HelperValidation> : ""}

                    <InputLabel htmlFor="newPassword" >
                        <InputText
                            id="newPassword"
                            name="newPassword"
                            type="text"
                            required
                            autoComplete="on"
                            onChange={handleChange}
                            placeholder="vui lòng nhập mật khẩu vào đây"

                        />
                    </InputLabel >
                    {helperValid.newPassword && helperValid.newPassword.length > 0 ? <HelperValidation>{helperValid.newPassword}</HelperValidation> : ""}
                    <InputLabel htmlFor="reNewPassword" >
                        <InputText
                            id="reNewPassword"
                            name="reNewPassword"
                            type="text"
                            required
                            autoComplete="on"
                            onChange={handleChange}
                            placeholder="vui lòng nhập lại mật khẩu vào đây"

                        />
                    </InputLabel >
                    {helperValid.reNewPassword && helperValid.reNewPassword.length > 0 ? <HelperValidation>{helperValid.reNewPassword}</HelperValidation> : ""}

                    <ButtonConfirm type="submit">
                        Xác nhận
                        </ButtonConfirm>
                </FormWrapper>
            </ConfirmFormContainer>
        </>
    )
}

export default ConfirmForgotPassword
