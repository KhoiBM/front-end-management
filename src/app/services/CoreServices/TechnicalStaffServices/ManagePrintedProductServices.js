import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class ManagePrintedProductServices {
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
        // return useHttpModule().post(config.useApiPath.api.managePrintedProduct.viewPrintedProductList, data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                printedProductID: 1,
                                printedProductCode: "abc123",
                                orderID: 1,
                                orderDetailCode: "123abc",
                                rawProductID: 1,
                                rawProductCode: 1,
                                printedProductName: "abc",
                                totalQuantity: 10,
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                createdAt: "02-02-2020",
                                updatedAt: "02-02-2020"

                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        } else {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                printedProductID: 5,
                                orderID: 1,
                                rawProductID: 1,
                                printedProductName: "abc",
                                totalQuantity: 10,
                                description: "abc",
                                note: "abc",
                                createdAt: "02-02-2020",
                                updatedAt: "02-02-2020"

                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }

    }
    static add = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        orderCode: "orderCode",
                        printedProductCode: "printedProductCode"
                    }
                }
            }
        })
    }
    static edit = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        orderCode: "orderCode",
                        printedProductCode: "printedProductCode"
                    }
                }
            }
        })
    }
    static delete = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static search = (data) => {
        return useHttpModule().post(config.useApiPath.api.managePrintedProduct.viewPrintedProductList, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         printedProductID: 24,
        //                         orderID: 1,
        //                         rawProductID: 1,
        //                         printedProductName: "abc",
        //                         totalQuantity: 10,
        //                         description: "abc",
        //                         note: "abc",
        //                         createdAt: "02-02-2020",
        //                         updatedAt: "02-02-2020"
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
        //                         printedProductID: 25,
        //                         orderID: 1,
        //                         rawProductID: 1,
        //                         printedProductName: "abc",
        //                         totalQuantity: 10,
        //                         description: "abc",
        //                         note: "abc",
        //                         createdAt: "02-02-2020",
        //                         updatedAt: "02-02-2020"
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