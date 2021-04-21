import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class TechnicalStaffProcessOrderServices {
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


    static viewAcceptedOrder = (data) => {
        console.log("filterListViewAcceptedOrder: " + data.filterBy)
        // return useHttpModule().post(config.useApiPath.api., data)
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
                                statusOrder: "Đang làm mẫu",
                                statusPayment: true,
                                shipAt: "02-12-2021",
                                phone: "0313823823",
                                address: "hcm",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },
                            {
                                orderID: 2,
                                orderCode: 2,
                                customerID: 2,
                                customerCode: 23334,
                                customerName: "KhoiBM",
                                note: "abc",
                                statusOrder: "Đang làm mẫu",
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
                                orderID: 3,
                                orderCode: 3,
                                customerID: 3,
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



    static searchAcceptedOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
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
                        totalPage: 10

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
                                orderID: 2,
                                orderCode: 2,
                                customerID: 2,
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
                                orderID: 2,
                                orderCode: 2,
                                customerID: 2,
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

    static viewConfirmDemoProduct = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

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
    static addDemoProductPhoto = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static getAllOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records:
                        [
                            {
                                orderID: 1,
                            },
                            {
                                orderID: 2,
                            },
                            {
                                orderID: 3,
                            }
                        ]

                }
            }
        })
    }


    static getStatusOrderToFilter = () => {

        const useStatusOrder = config.useStatusOrder.TECHNICAL_STAFF
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

}