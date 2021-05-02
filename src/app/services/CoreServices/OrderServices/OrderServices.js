import config from '../../../../environments/config'
import {useHttpModule} from "../../HttpServices";
export class OrderServices {
    // static = (data) => {
    //     // return useHttpModule().post(config.useApiPath.api., data)
    //     return Promise.resolve({
    //         data: {
    //             result: config.useResultStatus.SUCCESS,
    //             info: {

    //             }
    //         }
    //     })
    // }
    static getOrderDetailList = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageOrder.viewOrderDetailList, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [{
        //                 orderDetailID: 1,
        //                 orderDetailCode: "orderDetailCode",
        //                 orderID: 1,
        //                 orderCode: "orderCode",
        //                 rawProductID: 1,
        //                 rawProductCode: "productcode",
        //                 rawProductName: "Lorem ipsum dolor sit amet",
        //                 categoryCode: "categoryCode",
        //                 createdBy: "Quản lý",
        //                 size: '1',
        //                 color: "#000",
        //                 unitPrice: 100000,
        //                 servicePrice: 110000,
        //                 quantity: 5,
        //                 note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                 createdAt: "02-02-2021",
        //                 updatedAt: "02-02-2021",
        //             }
        //             ]
        //         }
        //     }
        // })
    }
    static editOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

}
