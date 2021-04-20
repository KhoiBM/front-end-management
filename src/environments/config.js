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
            "signUp": "user/signup",
            "confirmCode": "user/confirm-email",
            "forgotPassword": "user/forgot-password",
            "confirmForgotPassword": "user/confirm-forgot-password"
        },
        "manageAccountServices": {
            view: "manage/account/get-account-list",
            viewListRole: "manage/account/get-role-list"
        },
        "manageServiceServices": {
            view: "manager/view-service",
            add: "manager/add-service"
        },
        "manageRawProductServices": {
            view: "manager/studio-raw-product-list",
            viewSearch: "manager/studio-raw-product-search-list",
            viewDetail: "manager/studio-raw-product-info"
        },
        "manageStatisticServices": {
            viewOverallRevenue: "manager/overall-revenue",
            viewRevenueOfEachService: "manager/service-revenue",
            viewNumberOrder: "manager/number-order"
        },
        "manageImportedRawProductServices": {
            viewImportedRawProduct: "manager/imported-studio-raw-product-list"
        },
        "photoServices": {
            getPresignedURLToUpload: "manage/upload-photo",
            getPhotoListByLink: "manage/get-list-photo"
        },
        "manageCategoryServices": {
            view: "manager/view-category",
            add: "manager/add-category"
        }

    }
}
const useRoleName = {
    administrator: "administrator",
    manager: "manager",
    businessStaff: "businessStaff",
    technicalStaff: "technicalStaff"
};

const useResultStatus = {
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE"
}

const useRegex = {
    regexPassword: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
    regexEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
    regexPhone: /^\d{10,11}$/,
    // regexPrice: /^([\d]{1,3})([.]\d{3})*$/,
    regexPrice: /^\d{1,}$/,
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
    uploadPhotoFailure: "Có lỗi xảy ra khi tải ảnh lên server "
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
        "CHANGE": ["Đơn được duyệt", "Huỷ đơn", "Đang làm mẫu", "Chờ xác nhận mẫu", "Đang in sản phẩm", "Đang giao hàng",
            "Hoàn thành đơn hàng"]
    },
    "TECHNICAL_STAFF": {
        "FILTER": ["Đang làm mẫu", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu", "Chấp nhận mẫu",
            "Đang in sản phẩm", "Hoàn thành in sản phẩm", "Đang lưu trữ"],
        "CHANGE": ["Hoàn thành mẫu", "Hoàn thành in sản phẩm", "Đang lưu trữ"]
    },
    "CUSTOMER": {
        "FILTER": ["Đơn chờ duyệt", "Hủy đơn", "Đơn được duyệt", "Đang làm mẫu", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu",
            "Chấp nhận mẫu", "Đang in sản phẩm", "Hoàn thành in sản phẩm", "Đang lưu trữ", "Đang giao hàng", "Hoàn thành đơn hàng"],
        "CHANGE": ["Hủy đơn", "Từ chối mẫu", "Chấp nhận mẫu"]
    }



}


// const useCustomeStyles = {
//     customStylesAddEditForm: (theme) => ({

//     })


// }

const config = { useApiPath, useRoleName, useResultStatus, useRegex, useUserRole, useStyles, useMessage, useConfigAWS, useStatusOrder }
export default config



// toast.error(config.useMessage.invalidData);