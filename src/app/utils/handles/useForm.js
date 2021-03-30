/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import config from 'src/environments/config';

export const useForm = (initialFValues, validOnChange = true) => {
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
    const handleChangeDob = (date) => {
        setDobSelected(date)
        // console.log(date)
    }

    const validation = (fieldValues = formData) => {
        const temp = { ...helperValid };
        if ('username' in fieldValues) temp.username = fieldValues.username && fieldValues.username.length > 0 ? "" : "Tên người dùng là bắt buộc"
        if ('username' in fieldValues) temp.username = fieldValues.username && config.useRegex.regexUsername.test(fieldValues.username) ? "" : "Tên người dùng không hợp lệ"
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
        if ('address' in fieldValues) temp.address = fieldValues.address && config.useRegex.regexAddress.test(fieldValues.address) ? "" : "Địa chỉ không hợp lệ"
        if ('phone' in fieldValues) temp.phone = fieldValues.phone && fieldValues.phone.length > 9 && fieldValues.phone.length < 12 && regexPhone.test(fieldValues.phone) ? "" : "Số điện thoại không hợp lệ"

        if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 ? "" : "Mô tả là bắt buộc"

        if ('providedBy' in fieldValues) temp.providedBy = fieldValues.providedBy && fieldValues.providedBy.length > 0 ? "" : "Tên nhà cung cấp là bắt buộc"

        if ('quantity' in fieldValues) temp.quantity = fieldValues.quantity && fieldValues.quantity > 0 && fieldValues.quantity.length > 0 ? "" : "Yêu cầu nhập lại Số lượng"
        if ('totalQuantity' in fieldValues) temp.totalQuantity = fieldValues.totalQuantity && fieldValues.totalQuantity > 0 && fieldValues.totalQuantity.length > 0 ? "" : "Yêu cầu nhập lại Tổng số lượng"    

        if ('note' in fieldValues) temp.quantity = fieldValues.note && fieldValues.note.length > 0 ? "" : "Chú thích là bắt buộc"
        
        if ('shipAt' in fieldValues) {
            // const currentYear = new Date().getFullYear();
            // const compareYear = currentYear >= dobSelected.getFullYear();
            // // console.log("validDob: " + compareYear)
            const currentDate = new Date();
            const compareDate = currentDate <= dobSelected.getTime();
            // console.log("validDob: " + currentDate)
            temp.dob = currentDate ? "" : "Ngày sinh không hợp lệ"
        }

        var stringArray = ["Pending", "Demo Processing", "Demo Completed", "Official Processing,", "Storaging", "Shipping", "Completed" ];
        if ('statusOrder' in fieldValues) stringArray.includes(fieldValues.statusOrder) ? "" : "Trạng thái không hợp lệ"

        if ('printedProductName' in fieldValues) temp.printedProductName = fieldValues.printedProductName && fieldValues.printedProductName.length > 0 ? "" : "Tên là bắt buộc"

        if ('categoryName' in fieldValues) temp.categoryName = fieldValues.categoryName && fieldValues.categoryName.length > 0 ? "" : "Tên là bắt buộc"

        if ('color' in fieldValues) temp.color = fieldValues.color && fieldValues.color.length > 0 ? "" : "Yêu cầu chọn khách hàng"

        if ('rawProductName' in fieldValues) temp.rawProductName = fieldValues.rawProductName && fieldValues.rawProductName.length > 0 ? "" : "Tên là bắt buộc"
        if ('size' in fieldValues) temp.size = fieldValues.size && fieldValues.size.length > 0 ? "" : "Tên là bắt buộc"
        if ('unitPrice' in fieldValues) temp.unitPrice = fieldValues.unitPrice && fieldValues.unitPrice > 0 && fieldValues.unitPrice.length > 0 ? "" : "Yêu cầu nhập lại Đơn giá"

        if ('serviceName' in fieldValues) temp.serviceName = fieldValues.serviceName && fieldValues.serviceName.length > 0 ? "" : "Tên là bắt buộc"
        if ('servicePrice' in fieldValues) temp.servicePrice = fieldValues.servicePrice && fieldValues.servicePrice > 0 && fieldValues.servicePrice.length > 0 ? "" : "Yêu cầu nhập lại giá cả dịch vụ"

        // if ('customerId' in fieldValues) temp.customerId = fieldValues.customerId && fieldValues.customerId.length > 0 ? "" : "Yêu cầu chọn khách hàng"
        // if ('serviceId' in fieldValues) temp.serviceId = fieldValues.serviceId && fieldValues.serviceId.length > 0 ? "" : "Yêu cầu chọn dịch vụ"
        // if ('orderDetailId' in fieldValues) temp.orderDetailId = fieldValues.orderDetailId && fieldValues.orderDetailId.length > 0 ? "" : "Yêu cầu chọn đơn đặt hàng"
        // if ('categoryId' in fieldValues) temp.categoryId = fieldValues.categoryId && fieldValues.categoryId.length > 0 ? "" : "Yêu cầu chọn loại sản phẩm"
        // if ('managerId' in fieldValues) temp.managerId = fieldValues.managerId && fieldValues.managerId.length > 0 ? "" : "Yêu cầu chọn quản lý"
        // if ('rawProductID' in fieldValues) temp.quantity = fieldValues.quantity && fieldValues.quantity.length > 0 ? "" : "Yêu cầu chọn sản phẩm thô"
        

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
