/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import config from 'src/environments/config';

export const useForm = (initialFValues) => {
    const regexPassword = config.useRegex.regexPassword
    const regexPhone = config.useRegex.regexPhone

    const [formData, setFormData] = useState(initialFValues);
    const [dobSelected, setDobSelected] = useState(new Date())
    const [helperValid, setHelperValid] = useState({});
    const handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.type == 'checkbox'
            ? event.target.checked
            : event.target.value;

        if (name == "gender") {
            // value = Boolean(value)
            // console.log(Boolean(value))
            value = value == "female" ? true : false
        }
        if (name == "totalQuantityOfPrintedProduct") {
            if (Number(value) < 1) {
                value = 1
            } else {

            }
        }

        console.log(name + ": " + value)
        setFormData({ ...formData, [name]: value });
        // console.log("formdata" + ": " + JSON.stringify(formData))
        validation({ [name]: value })
        // validation(formData)
    }
    const handleChangeDob = (date) => {
        setDobSelected(date)
        // console.log(date)
    }
    const validation = (fieldValues = formData) => {
        const temp = { ...helperValid };
        if ('username' in fieldValues) temp.username = fieldValues.username && fieldValues.username.length > 0 ? "" : "Tên người dùng là bắt buộc"
        if ('email' in fieldValues) temp.email = fieldValues.email && fieldValues.email.length > 0 && config.useRegex.regexEmail.test(fieldValues.email) ? "" : "Email không hợp lệ"
        if ('password' in fieldValues) temp.password = fieldValues.password && fieldValues.password.length >= 8 && fieldValues.password.length <= 20 && regexPassword.test(fieldValues.password) ? "" : "Mật khẩu là bắt buộc (8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
        if ('rePassword' in fieldValues) {
            temp.rePassword = fieldValues.rePassword
                && fieldValues.rePassword.length >= 8
                && fieldValues.rePassword.length <= 20
                && regexPassword.test(fieldValues.rePassword)
                ? "" : "Mật khẩu là bắt buộc(8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt";
        }
        if ('password' in fieldValues && 'rePassword' in fieldValues) {
            // console.log("rePassword:" + fieldValues.rePassword)
            // console.log("password:" + fieldValues.password)
            // if (fieldValues.rePassword == fieldValues.password) console.log("equal")
            if (temp.rePassword == "") {
                temp.rePassword = fieldValues.rePassword == fieldValues.password
                    ? "" : "Mật khẩu này phải giống với mật khẩu ở trên"
            }

        }

        if ('dob' in fieldValues) {
            const currentYear = new Date().getFullYear();
            const compareYear = currentYear >= dobSelected.getFullYear();
            // console.log("validDob: " + compareYear)
            temp.dob = compareYear ? "" : "Ngày sinh không hợp lệ"
        }

        if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName && fieldValues.firstName.length > 0 ? "" : "Tên là bắt buộc"
        if ('lastName' in fieldValues) temp.lastName = fieldValues.lastName && fieldValues.lastName.length > 0 ? "" : "Họ là bắt buộc"
        if ('address' in fieldValues) temp.address = fieldValues.address && fieldValues.address.length > 0 ? "" : "Địa chỉ là bắt buộc"
        if ('phone' in fieldValues) temp.phone = fieldValues.phone && fieldValues.phone.length > 9 && fieldValues.phone.length < 12 && regexPhone.test(fieldValues.phone) ? "" : "Số điện thoại không hợp lệ"




        if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 ? "" : "Mô tả là bắt buộc"





        setHelperValid({ ...temp });
        return Object.values(temp).every(val => val == "")
    }

    return {
        formData, setFormData, handleInputChange, helperValid, validation, dobSelected, setDobSelected, handleChangeDob, setHelperValid
    }
}


 // if ('serviceID' in fieldValues) temp.serviceID = fieldValues.serviceID && fieldValues.serviceID.length > 0 ? "" : "Vui lòng chọn dịch vụ"
        // if ('rawProductID' in fieldValues) temp.rawProductID = fieldValues.rawProductID && fieldValues.rawProductID.length > 0 ? "" : "Vui lòng chọn trong danh sách"

// const useStyles = makeStyles(theme => ({
//     rootForm: {
//         '& .MuiFormControl-root': {
//             width: '80%',
//             margin: theme.spacing(1)
//         }
//     }
// }))
// export const Form = (props) => {
//     const classes = useStyles();
//     return (
//         <>
//             <form noValidate onSubmit={props.handleSubmit} className={classes.root}>
//                 {props.children}
//             </form>
//         </>
//     )
// }
