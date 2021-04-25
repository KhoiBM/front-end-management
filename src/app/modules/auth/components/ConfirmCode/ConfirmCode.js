/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import HelperValidation from '../HelperValidation/HelperValidation'
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { useAuthAction } from 'src/app/stores/actions';
import config from 'src/environments/config';
import { RiCloseFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { ConfirmFormContainer, ButtonConfirm, IconWrapper, IconLink, InputLabel } from '../../styles/styles'
import { FormWrapper, InputText } from './ConfirmCodeElements';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
import { Loader } from 'src/app/components';
import { RouteService } from 'src/app/services';

const ConfirmCode = (props) => {

    const history = useHistory()

    const dispatch = useDispatch()

    let location = useLocation();

    const { response } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({ confirmCode: "" });

    const [isFirst, setIsFirst] = useState(true)

    const [helperValid, setHelperValid] = useState({});

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()




    const handleSubmit = () => {
        event.preventDefault();
        const enableSubmit = validation(formData);
        console.log("enableSubmit: " + enableSubmit);
        if (enableSubmit) {
            confirmCode(formData, dispatch);
        } else {
            toast.error(config.useMessage.invalidData)
        }
    }
    const confirmCode = async (formData, dispatch) => {
        // const username = query.get("username");
        // const email = query.get("email");
        const username = location.state.username;
        const email = location.state.email;
        if (username && username.length > 0 && username != null && email && email.length > 0 && email != null) {
            const data = {
                username: username,
                email: email,
                code: formData.confirmCode
            };
            console.log("data: " + JSON.stringify(data))
            await RouteService.init(history)
            dispatch(useAuthAction().confirmCode(data));
        } else {
            toast.error("Lỗi khi truyền tên người dùng hoặc email ")
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validation({ [name]: value })
    }

    const validation = (fieldValues = formData) => {
        const temp = { ...helperValid };
        if ('confirmCode' in fieldValues) temp.confirmCode = fieldValues.confirmCode && fieldValues.confirmCode.length > 0 ? "" : "Code là bắt buộc"
        setHelperValid({ ...temp });
        return Object.values(temp).every(val => val == "")
    }

    return (
        <>
            {<Loader loading={loading} />}
            <ConfirmFormContainer>
                <FormWrapper onSubmit={handleSubmit} noValidate>
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

                    <ButtonConfirm type="submit">
                        Xác nhận
                        </ButtonConfirm>
                </FormWrapper>
            </ConfirmFormContainer>
        </>
    )
}

export default ConfirmCode


