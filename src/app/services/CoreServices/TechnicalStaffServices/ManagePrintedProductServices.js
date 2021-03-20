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
        // return useHttpModule().get(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                printedProductID: 4,
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
        // return useHttpModule().post(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                printedProductID: 24,
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
        } else {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                printedProductID: 25,
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
}