/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { MdSupervisorAccount, MdShowChart, MdImportExport } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineTag, AiOutlineSync } from 'react-icons/ai'
import { RiProductHuntLine } from "react-icons/ri";
const useApiPath = {
    "apiEndpoint": "https://tyadtos4x2.execute-api.ap-southeast-1.amazonaws.com/dev/",
    "api": {
        "auth": {
            "signIn": "user/login",
            "forgotPassword": "user/forgot-password",
            "confirmForgotPassword": "user/confirm-forgot-password",
            SignOut: "user/logout"
        },
        "manageAccountServices": {
            view: "manage/account/get-account-list",
            viewListRole: "manage/account/get-role-list",
            edit: "manage/account/update-account-info",
            viewAll: "manager/get-all-service",
            createAccount: "manage/account/create-account"
        },
        "manageServiceServices": {
            view: "manager/view-service",
            add: "manager/add-service",
            edit: "manager/edit-service",
            viewAll: "manager/get-all-service"
        },
        "manageRawProductServices": {
            viewStudioRawProductList: "manager/studio-raw-product-list",
            viewSearch: "manager/studio-raw-product-search-list",
            viewDetail: "manager/studio-raw-product-info",
            editStudioRawProduct: "manager/edit-studio-raw-product",
            addStudioRawProduct: "manager/add-studio-raw-product",
            deleteStudioRawProduct: "manager/delete-studio-raw-product"
        },
        "manageCusRawProductServices": {
            viewCusRawProductList: "businessstaff/customer-raw-product-list",
            viewSearch: "businessstaff/search-customer-raw-product-list",
            editCusRawProduct: "businessstaff/edit-customer-raw-product",
            deleteCusRawProduct: "businessstaff/delete-customer-raw-product"
        },
        "manageStatisticServices": {
            viewOverallRevenue: "manager/overall-revenue",
            viewRevenueOfEachService: "manager/service-revenue",
            viewNumberOrder: "manager/number-order"
        },
        "manageImportedRawProductServices": {
            viewImportedRawProduct: "manager/imported-studio-raw-product-list",
            addImportedRawProduct: "manager/add-quantity-studio-raw-product"
        },
        "manageImportedCusRawProductServices": {
            viewImportedCusRawProduct: "businessstaff/imported-customer-raw-product-list",
            updateImportedCusRawProduct: "businessstaff/update-customer-raw-product"
        },
        "photoServices": {
            getPresignedURLToUpload: "manage/upload-photo",
            getPhotoListByLink: "manage/get-list-photo"
        },
        "manageCategoryServices": {
            view: "manager/view-category",
            add: "manager/add-category",
            edit: "manager/edit-category",
            viewAll: "manager/get-all-category"
        },
        "manageProfile": {
            viewProfile: "manager/view-profile",
            editProfile: "manager/edit-profile"
        },
        "manageOrder": {
            viewOrderList: "staff/get-order-list",
            changeStatus: "manage/order/update-order-info",
            viewOrderDetailList: "order/get-list-order-detail",
            changeStatusPayment: "staff/change-order-status-payment",
            sendEmail: "order/send-email-confirm"
        },
        "managePrintedProduct": {
            viewPrintedProductList: "technicalstaff/get-printed-product"
        },
        "notification": {
            viewAndCountNoti: "notification/get-list-notification",
            viewedNoti: "notification/view"
        }

    }
}
const useRoleName = {
    administrator: "Administrator",
    manager: "Manager",
    businessStaff: "Business Staff",
    technicalStaff: "Technical Staff"
};

const useResultStatus = {
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE"
}

const useRegex = {
    // regexPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
    // regexEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
    // regexPhone: /^\d{10,11}$/,
    // // regexPrice: /^([\d]{1,3})([.]\d{3})*$/,
    // regexPrice: /^\d{1,}$/,

    regexPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    // regexEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    regexEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
    regexPhone: /^[+]?(\([0-9]{1,4}\))?[0-9]+$/,
    regexUsername: /^(?=.{1,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    // regexUsername: /^[a-zA-Z0-9]+$/,
    regexName: /^((?!\s{2})[a-zA-Z\s])+$/,
    regexVietnameseName: /^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]((?![\s]{2})[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s])*)*$/,
    regexVietnamese: /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]((?![\s]{2})[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s])*)*$/,
    regexAddress: /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]((?![\s]{2})[a-zA-Z0-9_.,ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s])*)*$/,
    regexHexColor: /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    regexInteger: /^([\\-]?[0-9]+)$/,
    regexPositiveInteger: /^[0-9]+$/,
    regexNumber: /^[0-9]+\.?[0-9]*$/,
    regexCode: /^[a-zA-Z0-9]+$/,
    regexPositiveNumber: /^([0-9]+\.?[0-9]*)$/
}

// (?=[\\.])
const useUserRole = {
    administrator:
        [
            {
                text: "Quản lý Tài Khoản",
                icon: <MdSupervisorAccount />,
                link: "manage_account"
            }
        ],
    manager:
        [{
            text: "Thống kê",
            icon: <MdShowChart />,
            link: "statistics"
        },
        {
            text: "Quản lý dịch vụ",
            icon: < AiOutlineAppstore />,
            link: "manage_service"
        },
        {
            text: "Quản lý thể loại",
            icon: <AiOutlineTag />,
            link: 'manage_category'
        }
            ,
        {
            text: "Quản lý sản phẩm thô",
            icon: <RiProductHuntLine />,
            link: "manage_raw_product"
        },
        {
            text: "Quản lý nhập sản phẩm thô ",
            icon: <MdImportExport />,
            link: "manage_raw_product_importation"
        }
        ],
    businessStaff: [
        {
            text: "Xử lý đơn hàng",
            icon: <AiOutlineSync />,
            link: "business_staff_process_order"
        },
        {
            text: "Quản lý sản phẩm thô của khách hàng",
            icon: < RiProductHuntLine />,
            link: "manage_customer’s_raw_product"
        },
        {
            text: "Quản lý nhập sản phẩm thô của khách hàng",
            icon: < MdImportExport />,
            link: "manage_customer’s_raw_product_importation"
        }
    ],
    technicalStaff: [
        {
            text: "Xử lý đơn hàng",
            icon: <AiOutlineSync />,
            link: "technical_staff_process_order"
        },
        {
            text: "Quản lý sản phẩm đã in",
            icon: < RiProductHuntLine />,
            link: "manage_printed_product"
        },


    ]
}
const useStyles = {
    drawerWidth: 350,
    drawerWidthBusinessStaff: 400,
}

const useMessage = {
    invalidData: "Dữ liệu không hợp lệ",
    fetchApiFailure: "Có lỗi xảy ra khi gọi api",
    resultFailure: `Có lỗi xảy ra bên server`,
    uploadPhotoFailure: "Có lỗi xảy ra khi tải ảnh lên server ",
    uploadPhotoFiles: "Vui lòng tải ảnh lên ",

}

const useConfigAWS = {
    STUDIOBUCKET: {
        BUCKETNAME: "photo-upload-album-1",
        FOLDER: {
            "STUDIO'SRAWPRODUCT": "Studio'sRawProduct",
            "PRINTEDPRODUCT": "PrintedProduct",
            "SERVICE": "Service",
            "CATEGORY": "Category"
        }
    },
    CUSTOMERBUCKET: {
        BUCKETNAME: "photo-order-customer",
        FOLDER: {
            "CUSTOMER'SRAWPRODUCT": "Customer'sRawProduct",
            "ORDER": "Order"
        }
    },

}

// const useStatusOrder = {
//     "BUSINESS_STAFF": {
//         "FILTER": ["Đơn chờ duyệt", "Hủy đơn", "Đơn được duyệt", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu",
//             "Chấp nhận mẫu", "Hoàn thành in sản phẩm", "Đang lưu trữ", "Đang giao hàng", "Hoàn thành đơn hàng"],
//         "CHANGE": ["Đơn được duyệt", "Huỷ đơn", "Đang in mẫu", "Chờ xác nhận mẫu", "Đang in sản phẩm", "Đang giao hàng",
//             "Hoàn thành đơn hàng"]
//     },
//     "TECHNICAL_STAFF": {
//         "FILTER": ["Đơn được duyệt", "Đang làm mẫu", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu", "Chấp nhận mẫu",
//             "Đang in sản phẩm", "Hoàn thành in sản phẩm", "Đang lưu trữ", "Đang giao hàng", "Hoàn thành đơn hàng"],
//         "CHANGE": ["Hoàn thành mẫu", "Hoàn thành in sản phẩm", "Đang lưu trữ"]
//     },
//     "CUSTOMER": ["Đơn chờ duyệt", "Hủy đơn", "Đơn được duyệt", "Đang in mẫu", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu",
//         "Chấp nhận mẫu", "Đang in sản phẩm", "Hoàn thành in sản phẩm", "Đang lưu trữ", "Đang giao hàng", "Hoàn thành đơn hàng"],

// }

const useStatusOrder = {
    "BUSINESS_STAFF": {
        "FILTER": ["Đơn được duyệt", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu",
            "Chấp nhận mẫu", "Hoàn thành in sản phẩm", "Đang lưu trữ", "Đang giao hàng", "Hoàn thành đơn hàng"],
        "CHANGE": ["Đơn được duyệt", "Đang làm mẫu", "Chờ xác nhận mẫu", "Đang in sản phẩm", "Đang giao hàng",
            "Hoàn thành đơn hàng"]
    },
    "TECHNICAL_STAFF": {
        "FILTER": ["Đang làm mẫu", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu", "Chấp nhận mẫu",
            "Đang in sản phẩm", "Hoàn thành in sản phẩm", "Đang lưu trữ"],
        "CHANGE": ["Hoàn thành mẫu", "Hoàn thành in sản phẩm", "Đang lưu trữ"]
    },
    "ALL": {
        "FILTER": ["Đơn chờ duyệt", "Hủy đơn", "Đơn được duyệt", "Đang làm mẫu", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu",
            "Chấp nhận mẫu", "Đang in sản phẩm", "Hoàn thành in sản phẩm", "Đang lưu trữ", "Đang giao hàng", "Hoàn thành đơn hàng"],
        "CHANGE": ["Đơn chờ duyệt", "Hủy đơn", "Đơn được duyệt", "Đang làm mẫu", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu",
            "Chấp nhận mẫu", "Đang in sản phẩm", "Hoàn thành in sản phẩm", "Đang lưu trữ", "Đang giao hàng", "Hoàn thành đơn hàng"],
    }



}


// const useCustomeStyles = {
//     customStylesAddEditForm: (theme) => ({

//     })


// }

const usePersonalizeType = {
    "createYourOwn": "1",
    "studioRawProductDetail": "2",
    "technicalCartItem": "3"
}

const useCreatedBy = {
    customer: "Khách hàng",
    manager: "Quản lý"
}

const config = { useApiPath, useRoleName, useResultStatus, useRegex, useUserRole, useStyles, useMessage, useConfigAWS, useStatusOrder, usePersonalizeType, useCreatedBy }
export default config



// toast.error(config.useMessage.invalidData);