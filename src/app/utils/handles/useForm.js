/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import config from 'src/environments/config';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
export const useForm = (initialFValues, validOnChange = true) => {
    const regexPassword = config.useRegex.regexPassword
    const regexPhone = config.useRegex.regexPhone

    const [formData, setFormData] = useState(initialFValues);
    const [dobSelected, setDobSelected] = useState(new Date())
    const [shipAtSelected, setShipAtSelected] = useState(new Date())
    const [helperValid, setHelperValid] = useState({});

    const handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.type == 'checkbox'
            ? event.target.checked
            : event.target.value;

        if (value != null) {

            if (name == "gender") {
                // value = Boolean(value)
                // console.log(Boolean(value))
                value = value == "female" ? true : false
            }
            if (name == "totalQuantityOfPrintedProduct") {
                if (Number(value) < 1) {
                    value = 1
                }
            }

            if (name == "unitPrice") {
                if (Number(value) < 0) {
                    value = 0
                }
            }


            if (name == "servicePrice") {
                if (Number(value) < 0) {
                    value = 0
                }
            }


            console.log(name + ": " + value)
            setFormData({ ...formData, [name]: value });
            // console.log("formdata" + ": " + JSON.stringify(formData))
            if (validOnChange) validation({ [name]: value })
            // validation(formData)
        }

    }
    const handleChangeDob = (date) => {
        setDobSelected(date)
        // console.log(date)
    }
    const handleChangeShipAt = (date) => {
        setShipAtSelected(date)

        console.log(date)

        setFormData({ ...formData, shipAt: format(date, "dd-MM-yyyy") });
    }
    const handleChangeColor = (color, event) => {
        setFormData({ ...formData, color: color.hex });
        // console.log(JSON.stringify(color))
    }

    const validation = (fieldValues = formData) => {

        console.log("fieldValues:" + JSON.stringify(fieldValues))

        const temp = { ...helperValid };
        if ('username' in fieldValues) temp.username = fieldValues.username && fieldValues.username != null && fieldValues.username.length > 0 ? "" : "Tên người dùng là bắt buộc"
        if ('email' in fieldValues) temp.email = fieldValues.email && fieldValues.email != null && fieldValues.email.length > 0 && config.useRegex.regexEmail.test(fieldValues.email) ? "" : "Email không hợp lệ"
        if ('password' in fieldValues) temp.password = fieldValues.password && fieldValues.password != null && fieldValues.password.length >= 8 && fieldValues.password.length <= 20 && regexPassword.test(fieldValues.password) ? "" : "Mật khẩu là bắt buộc (8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
        if ('rePassword' in fieldValues) {
            temp.rePassword = fieldValues.rePassword
                && fieldValues.rePassword != null
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
            temp.dob = dobSelected && dobSelected != null && compareYear ? "" : "Ngày sinh không hợp lệ"
        }
        if ('shipAt' in fieldValues) {
            temp.shipAt = shipAtSelected && shipAtSelected != null ? "" : "Ngày giao không hợp lệ"
        }

        if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName && fieldValues.firstName != null && fieldValues.firstName.length > 0 ? "" : "Tên là bắt buộc"
        if ('lastName' in fieldValues) temp.lastName = fieldValues.lastName && fieldValues.lastName != null && fieldValues.lastName.length > 0 ? "" : "Họ là bắt buộc"
        if ('address' in fieldValues) temp.address = fieldValues.address && fieldValues.address != null && fieldValues.address.length > 0 ? "" : "Địa chỉ là bắt buộc"
        if ('phone' in fieldValues) temp.phone = fieldValues.phone && fieldValues.phone != null && fieldValues.phone.length > 9 && fieldValues.phone.length < 12 && regexPhone.test(fieldValues.phone) ? "" : "Số điện thoại không hợp lệ"




        if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description != null && fieldValues.description.length > 0 ? "" : "Mô tả là bắt buộc"


        if ('servicePrice' in fieldValues) temp.servicePrice = fieldValues.servicePrice && fieldValues.servicePrice != null
            && config.useRegex.regexPrice.test(fieldValues.servicePrice)
            ? "" : "Giá dịch vụ không hợp lệ"

        if ('unitPrice' in fieldValues) temp.unitPrice = fieldValues.unitPrice && fieldValues.unitPrice != null
            && config.useRegex.regexPrice.test(fieldValues.unitPrice)
            ? "" : "Giá không hợp lệ"



        setHelperValid({ ...temp });
        return Object.values(temp).every(val => val == "")
    }

    return {
        formData, setFormData, handleInputChange, helperValid, validation, dobSelected, setDobSelected, handleChangeDob, setHelperValid, handleChangeColor, shipAtSelected, setShipAtSelected, handleChangeShipAt
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
