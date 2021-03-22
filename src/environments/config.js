/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { MdSupervisorAccount, MdShowChart, MdImportExport } from "react-icons/md";
import { GrBusinessService, GrCatalog, GrCatalogOption, GrServices } from 'react-icons/gr/'
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineWindows, AiOutlineBorder, AiOutlineAppstore, AiOutlineTag, AiOutlineSync } from 'react-icons/ai'
import { FcProcess } from 'react-icons/fc'
const useApiPath = {
    "apiEndpoint": "https://5ociiz2m81.execute-api.ap-southeast-1.amazonaws.com/dev/",
    "api": {
        "auth": {
            "signIn": "user/login",
            "signUp": "user/signup",
            "confirmCode": "user/confirm-email",
            "forgotPassword": "",
            "confirmForgotPassword": ""
        },
        "manageServiceServices": {
            view: ""
        },
        "manageRawProductServices": {
            view: "homepage/get-list-product"
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
    regexPhone: /^\d{10,11}$/
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
}

const config = { useApiPath, useRoleName, useResultStatus, useRegex, useUserRole, useStyles, useMessage }
export default config



// toast.error(config.useMessage.invalidData);