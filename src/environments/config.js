/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { MdSupervisorAccount, MdShowChart, MdImportExport } from "react-icons/md";
import { GrBusinessService, GrCatalog, GrCatalogOption, GrServices } from 'react-icons/gr/'
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineWindows, AiOutlineBorder, AiOutlineAppstore, AiOutlineTag, AiOutlineSync } from 'react-icons/ai'
import { FcProcess } from 'react-icons/fc'
const useApiPath = {
    "apiEndpoint": "https://tyadtos4x2.execute-api.ap-southeast-1.amazonaws.com/dev/",
    "api": {
        "auth": {
            "signIn": "user/login",
            "signUp": "user/signup",
            "confirmCode": "user/confirm-email",
            "forgotPassword": "user/forgot-password",
            "confirmForgotPassword": "user/confirm-forgor-password"
        },
        "manageServiceServices": {
            view: ""
        },
        "manageRawProductServices": {
            view: "homepage/get-list-product"
        },
        "manageStatisticServices": {
            viewOverallRevenue: "manager/overall-revenue",
            viewRevenueOfEachService: "manager/service-revenue"
        },
        "photoServices": {
            getPresignedURLToUpload: "manage/product/upload-photo",
            getPhotoListByLink: ""
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
    // regexPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    regexPassword: /./,
    // regexEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    regexEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
    regexPhone: /^[+]?(\([0-9]{1,4}\))?[0-9]{10,16}$/,
    regexUsername: /^(?=.{4,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    regexAddress: /^([0-9]*[a-zA-Z]+[\s,-]?)+$/
}
//      link: "/core/admin/manage_account"
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
    drawerWidth: 350
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
const useStatusOrder = {
    "BUSINESS_STAFF": {
        "FILTER": ["Đang chờ", "Đã được duyệt"],
        "CHANGE": ["Đã được duyệt", "Huỷ đơn", "Đang làm mẫu"]
    },
    "TECHINICAL_STAFF": {
        "FILTER": ["Đang làm mẫu", "Đã hoàn thành mẫu"],
        "CHANGE": ["Đã hoàn thành mẫu", "Đang in chính thức"]
    },
    "CUSTOMER": ["Abc", "CBA"],

}

const config = { useApiPath, useRoleName, useResultStatus, useRegex, useUserRole, useStyles, useMessage, useConfigAWS, useStatusOrder }
export default config



// toast.error(config.useMessage.invalidData);