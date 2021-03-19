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
        // return useHttpModule().post(config.useApiPath.api.manageRawProductServices.view, data)
        if (data.page == 1) {
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

                                categoryID: "1",
                                categoryName: "abc",
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
                                categoryID: "2",
                                categoryName: "ab2",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            }
                            ,
                            {
                                rawProductID: 3,
                                rawProductName: "abc",
                                unitPrice: 1,
                                totalQuantity: 10,
                                size: "M",
                                color: "xanh",
                                description: "d",
                                categoryID: "3",
                                categoryName: "abc",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

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

                            },
                            {
                                rawProductID: 5,
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
                        totalPage: 20

                    }
                }
            })
        }

    }
    static viewDetail = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }
    static getAll = (data) => {
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
}