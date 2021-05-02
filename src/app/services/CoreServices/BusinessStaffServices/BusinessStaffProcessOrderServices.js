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
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "24-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
        //                     }
        //
        //
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
        //
        //                     {
        //                         orderID: 1,
        //                         orderCode: 1,
        //                         username: "KhoiBM",
        //                         customerID: 1,
        //                         customerCode: 23334,
        //                         customerName: "KhoiBM",
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "24-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }

    }

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
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "24-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }

    }

    static viewCanceledOrder = (data) => {
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
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "24-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
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
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "24-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }
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
        // return useHttpModule().post(config.useApiPath.api., data)
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
        return useHttpModule().post(config.useApiPath.api.manageOrder.changeStatus, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //
        //         }
        //     }
        // })
    }

    static rejectNewOrder = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageOrder.changeStatus, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //
        //         }
        //     }
        // })
    }

    static changeStatusOrder = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageOrder.changeStatus, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //
        //         }
        //     }
        // })
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
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "24-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
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
        //
        //                     {
        //                         orderID: 1,
        //                         orderCode: 1,
        //                         username: "KhoiBM",
        //                         customerID: 1,
        //                         customerCode: 23334,
        //                         customerName: "KhoiBM",
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "24-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }
    }

    static searchNewOrder = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageOrder.viewOrderList, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //
        //                     {
        //                         orderID: 1,
        //                         orderCode: 1,
        //                         username: "KhoiBM",
        //                         customerID: 1,
        //                         customerCode: 23334,
        //                         customerName: "KhoiBM",
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "02-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
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
        //                         note: "abc",
        //                         statusOrder: "abc",
        //                         statusPayment: false,
        //                         shipAt: "24-12-2021",
        //                         phone: "0313823823",
        //                         address: "hcm",
        //                         createdAt: "20-02-2021",
        //                         updatedAt: "20-02-2021"
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
