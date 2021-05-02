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
        return useHttpModule().post(config.useApiPath.api.manageOrder.viewOrderList, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         orderID: 1,
        //                         orderCode: 1,
        //                         username: "KhoiBM",
        //                         customerID: 1,
        //                         customerCode: 23334,
        //                         customerName: "KhoiBM",
        //                         note: "không có",
        //                         statusOrder: "Đang làm mẫu",
        //                         statusPayment: true,
        //                         shipAt: "2021-04-30",
        //                         phone: "0313823823",
        //                         address: "Tây Ninh",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
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
        //                         orderID: 1,
        //                         orderCode: 1,
        //                         username: "KhoiBM",
        //                         customerID: 1,
        //                         customerCode: 23334,
        //                         customerName: "KhoiBM",
        //                         note: "không có",
        //                         statusOrder: "Đang làm mẫu",
        //                         statusPayment: true,
        //                         shipAt: "2021-04-30",
        //                         phone: "0313823823",
        //                         address: "Tây Ninh",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
        //                     }
        //
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }

    }



    static searchAcceptedOrder = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageOrder.viewOrderList, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         orderID: 1,
        //                         orderCode: 1,
        //                         username: "KhoiBM",
        //                         customerID: 1,
        //                         customerCode: 23334,
        //                         customerName: "KhoiBM",
        //                         note: "không có",
        //                         statusOrder: "Đang làm mẫu",
        //                         statusPayment: true,
        //                         shipAt: "2021-04-30",
        //                         phone: "0313823823",
        //                         address: "Tây Ninh",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
        //                     }
        //                 ],
        //                 totalPage: 10
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
        //                         orderID: 1,
        //                         orderCode: 1,
        //                         username: "KhoiBM",
        //                         customerID: 1,
        //                         customerCode: 23334,
        //                         customerName: "KhoiBM",
        //                         note: "không có",
        //                         statusOrder: "Đang làm mẫu",
        //                         statusPayment: true,
        //                         shipAt: "2021-04-30",
        //                         phone: "0313823823",
        //                         address: "Tây Ninh",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
        //                     }
        //
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }
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
        return useHttpModule().post(config.useApiPath.api.manageOrder.viewOrderList, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //
        //         }
        //     }
        // })
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