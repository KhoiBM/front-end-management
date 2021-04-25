import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class ManageRawProductServices {
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


    static view = (data) => {
         return useHttpModule().post(config.useApiPath.api.manageRawProductServices.viewStudioRawProductList, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "Áo thun trắng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "Áo",
        //                         createdBy: "KhoiBM",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 2,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "d",
        //                         categoryID: "2",
        //                         categoryName: "ab2",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     ,
        //                     {
        //                         rawProductID: 3,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "d",
        //                         categoryID: "3",
        //                         categoryName: "abc",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // } else {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 4,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "d",
        //                         categoryName: "ad",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 5,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "d",
        //                         categoryName: "ad",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }

    }
    static viewDetail = (data) => {
        // return useHttpModule().post(config.useApiPath.api.manageRawProductServices.viewDetail, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //
        //         }
        //     }
        // })
    }
    static getAllCustomersRawProduct = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [
                        {
                            rawProductID: 1,
                            rawProductName: "abc",
                            unitPrice: 1,
                            totalQuantity: 10,
                            size: "M",
                            color: "xanh",
                            description: "d",
                            categoryName: "ad",
                            createdAt: "03-03-2021",
                            updatedAt: "03-03-2021"

                        },
                        {
                            rawProductID: 2,
                            rawProductName: "abc",
                            unitPrice: 1,
                            totalQuantity: 10,
                            size: "M",
                            color: "xanh",
                            description: "d",
                            categoryName: "ad",
                            createdAt: "03-03-2021",
                            updatedAt: "03-03-2021"

                        },
                        {
                            rawProductID: 3,
                            rawProductName: "abc",
                            unitPrice: 1,
                            totalQuantity: 10,
                            size: "M",
                            color: "xanh",
                            description: "d",
                            categoryName: "ad",
                            createdAt: "03-03-2021",
                            updatedAt: "03-03-2021"

                        },
                        {
                            rawProductID: 4,
                            rawProductName: "abc",
                            unitPrice: 1,
                            totalQuantity: 10,
                            size: "M",
                            color: "xanh",
                            description: "d",
                            categoryName: "ad",
                            createdAt: "03-03-2021",
                            updatedAt: "03-03-2021"

                        }


                    ],
                    totalPage: 4

                }
            }
        })

    }
    static getAllStudioRawProduct = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [
        //                 {
        //                     rawProductID: 1,
        //                     rawProductName: "abc",
        //                     unitPrice: 1,
        //                     totalQuantity: 10,
        //                     size: "M",
        //                     color: "xanh",
        //                     description: "d",
        //                     categoryName: "ad",
        //                     createdAt: "03-03-2021",
        //                     updatedAt: "03-03-2021"
        //
        //                 },
        //                 {
        //                     rawProductID: 2,
        //                     rawProductName: "abc",
        //                     unitPrice: 1,
        //                     totalQuantity: 10,
        //                     size: "M",
        //                     color: "xanh",
        //                     description: "d",
        //                     categoryName: "ad",
        //                     createdAt: "03-03-2021",
        //                     updatedAt: "03-03-2021"
        //
        //                 },
        //                 {
        //                     rawProductID: 3,
        //                     rawProductName: "abc",
        //                     unitPrice: 1,
        //                     totalQuantity: 10,
        //                     size: "M",
        //                     color: "xanh",
        //                     description: "d",
        //                     categoryName: "ad",
        //                     createdAt: "03-03-2021",
        //                     updatedAt: "03-03-2021"
        //
        //                 },
        //                 {
        //                     rawProductID: 4,
        //                     rawProductName: "abc",
        //                     unitPrice: 1,
        //                     totalQuantity: 10,
        //                     size: "M",
        //                     color: "xanh",
        //                     description: "d",
        //                     categoryName: "ad",
        //                     createdAt: "03-03-2021",
        //                     updatedAt: "03-03-2021"
        //
        //                 }
        //
        //
        //             ],
        //             totalPage: 4
        //
        //         }
        //     }
        // })

    }
    static getAllRawProduct = (data) => {
        // return useHttpModule().post(config.useApiPath.api.manageRawProductServices.viewStudioRawProductList, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [
        //                 {
        //                     rawProductID: 1,
        //                     rawProductName: "abc",
        //                     unitPrice: 1,
        //                     totalQuantity: 10,
        //                     size: "M",
        //                     color: "xanh",
        //                     description: "d",
        //                     categoryName: "ad",
        //                     createdAt: "03-03-2021",
        //                     updatedAt: "03-03-2021"
        //
        //                 },
        //                 {
        //                     rawProductID: 2,
        //                     rawProductName: "abc",
        //                     unitPrice: 1,
        //                     totalQuantity: 10,
        //                     size: "M",
        //                     color: "xanh",
        //                     description: "d",
        //                     categoryName: "ad",
        //                     createdAt: "03-03-2021",
        //                     updatedAt: "03-03-2021"
        //
        //                 },
        //                 {
        //                     rawProductID: 3,
        //                     rawProductName: "abc",
        //                     unitPrice: 1,
        //                     totalQuantity: 10,
        //                     size: "M",
        //                     color: "xanh",
        //                     description: "d",
        //                     categoryName: "ad",
        //                     createdAt: "03-03-2021",
        //                     updatedAt: "03-03-2021"
        //
        //                 },
        //                 {
        //                     rawProductID: 4,
        //                     rawProductName: "abc",
        //                     unitPrice: 1,
        //                     totalQuantity: 10,
        //                     size: "M",
        //                     color: "xanh",
        //                     description: "d",
        //                     categoryName: "ad",
        //                     createdAt: "03-03-2021",
        //                     updatedAt: "03-03-2021"
        //
        //                 }
        //
        //
        //             ],
        //             totalPage: 4
        //
        //         }
        //     }
        // })

    }

    static add = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageRawProductServices.addStudioRawProduct, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //
        //         }
        //     }
        // })
    }

    static edit = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageRawProductServices.editStudioRawProduct, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 categoryCode: "categoryCode",
        //                 rawProductCode: "rawProductCode"
        //             }
        //         }
        //     }
        // })
    }

    static delete = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageRawProductServices.deleteStudioRawProduct, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 categoryCode: "categoryCode",
        //                 rawProductCode: "rawProductCode"
        //             }
        //         }
        //     }
        // })
    }

    static search = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageRawProductServices.viewSearch, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 10,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "xanh",
        //                         description: "d",
        //
        //                         categoryID: "1",
        //                         categoryName: "abc",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 11,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "xanh",
        //                         description: "d",
        //                         categoryID: "2",
        //                         categoryName: "ab2",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     ,
        //                     {
        //                         rawProductID: 12,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "xanh",
        //                         description: "d",
        //                         categoryID: "3",
        //                         categoryName: "abc",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 4
        //
        //             }
        //         }
        //     })
        // } else {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 13,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "xanh",
        //                         description: "d",
        //                         categoryName: "ad",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 14,
        //                         rawProductName: "abc",
        //                         unitPrice: 1,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "xanh",
        //                         description: "d",
        //                         categoryName: "ad",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }

    }
}