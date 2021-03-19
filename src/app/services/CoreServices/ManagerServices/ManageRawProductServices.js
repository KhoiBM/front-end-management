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
                                categoryName: "ad",
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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

                        }, {
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
                    ]

                }
            }
        })
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
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {

        //         }
        //     }
        // })
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                rawProductID: 10,
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
                                rawProductID: 12,
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
                            ,
                            {
                                rawProductID: 13,
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
        } else {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                rawProductID: 14,
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
                                rawProductID: 15,
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
}