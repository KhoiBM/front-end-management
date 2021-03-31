import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class BusinessStaffProcessOrderServices {
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


    static viewNewOrder = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
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
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }

    }
    static viewAcceptedOrder = (data) => {
        console.log("filterListViewAcceptedOrder: " + data.filterBy)
        // return useHttpModule().get(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [

                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
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
                                orderID: 2,
                                orderCode: 2,
                                customerID: 2,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                statusOrder: "Đã được duyệt",
                                statusPayment: false,
                                shipAt: "02-12-2022",
                                address: "hcm2",
                                createdAt: "20-02-2022",
                                updatedAt: "20-02-2022"
                            }
                            ,
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "Đã được duyệt",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                statusOrder: "Đã được duyệt",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }

    }
    static viewCanceledOrder = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                orderID: 1,
                                customerID: 1,
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 2,
                                customerID: 2,
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
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
                                orderID: 3,
                                customerID: 3,
                                note: "abc2",
                                statusOrder: "abc2",
                                statusPayment: false,
                                shipAt: "02-12-2022",
                                address: "hcm2",
                                createdAt: "20-02-2022",
                                updatedAt: "20-02-2022"
                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }
    }
    static getStatusOrderToFilter = () => {

        const useStatusOrder = config.useStatusOrder.BUSINESS_STAFF
        const statusOrderToFilter = useStatusOrder.FILTER

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: statusOrderToFilter
                }
            }
        })
    }

    static viewOrderDetail = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static checkPayment = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static acceptNewOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static rejectNewOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static changeStatusOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static sendDemoProduct = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }


    static countNewOrder = () => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    count: 10
                }
            }
        })
    }

    static searchAcceptedOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static searchNewOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                orderID: 11,
                                customerID: 11,
                                note: "abc",
                                statusOrder: "",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                address: "hcm",
                                createdAt: "search20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 2,
                                customerID: 2,
                                note: "abc",
                                statusOrder: "abc",
                                statusPayment: false,
                                shipAt: "02-12-2021",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
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
                                orderID: 3,
                                customerID: 3,
                                note: "abc2",
                                statusOrder: "abc2",
                                statusPayment: false,
                                shipAt: "02-12-2022",
                                address: "hcm2",
                                createdAt: "20-02-2022",
                                updatedAt: "20-02-2022"
                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }
    }
}
