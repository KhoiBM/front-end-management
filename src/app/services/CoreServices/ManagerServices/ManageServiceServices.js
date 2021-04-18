import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class ManageServiceServices {
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
        return useHttpModule().post(config.useApiPath.api.manageServiceServices.view, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         serviceID: "1",
        //                         serviceCode: "abc",
        //                         serviceName: "abcd",
        //                         servicePrice: 100,
        //                         description: "abcd",
        //                         isActive: true,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     },
        //                     {
        //                         serviceID: "2",
        //                         serviceName: "abc",
        //                         description: "abc",
        //                         isActive: true,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     }
        //                     ,
        //                     {
        //                         serviceID: "3",
        //                         serviceName: "abc",
        //                         description: "abc",
        //                         isActive: true,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     }
        //                     ,
        //                     {
        //                         serviceID: "4",
        //                         serviceName: "abc",
        //                         description: "abc",
        //                         isActive: true,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     }
        //                     ,
        //                     {
        //                         serviceID: "5",
        //                         serviceName: "abc",
        //                         description: "abc",
        //                         isActive: true,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     }
        //                 ],
        //                 totalPage: 20
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
        //                         serviceID: "6",
        //                         serviceName: "abc6",
        //                         description: "abc",
        //                         isActive: false,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     },
        //                     {
        //                         serviceID: "7",
        //                         serviceName: "abc7",
        //                         description: "abc",
        //                         isActive: false,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     }, {
        //                         serviceID: "8",
        //                         serviceName: "abc8",
        //                         description: "abc",
        //                         isActive: false,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     }, {
        //                         serviceID: "9",
        //                         serviceName: "abc9",
        //                         description: "abc",
        //                         isActive: false,
        //                         createdAt: "03-02-2021",
        //                         updatedAt: "03-02-2021",
        //                     },
        //                 ],
        //                 totalPage: 20
        //             }
        //         }
        //     })
        // }
    }
    static getAll = () => {
        return useHttpModule().post(config.useApiPath.api.manageServiceServices.getAll)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [
        //                 {
        //                     serviceID: "6",
        //                     serviceName: "abc6",
        //                     description: "abc",
        //                     isActive: false,
        //                     createdAt: "03-02-2021",
        //                     updatedAt: "03-02-2021",
        //                 },
        //                 {
        //                     serviceID: "7",
        //                     serviceName: "abc7",
        //                     description: "abc",
        //                     isActive: false,
        //                     createdAt: "03-02-2021",
        //                     updatedAt: "03-02-2021",
        //                 }, {
        //                     serviceID: "8",
        //                     serviceName: "abc8",
        //                     description: "abc",
        //                     isActive: false,
        //                     createdAt: "03-02-2021",
        //                     updatedAt: "03-02-2021",
        //                 }, {
        //                     serviceID: "9",
        //                     serviceName: "abc9",
        //                     description: "abc",
        //                     isActive: false,
        //                     createdAt: "03-02-2021",
        //                     updatedAt: "03-02-2021",
        //                 },
        //             ]

        //         }
        //     }
        // })
    }
    static add = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageServiceServices.add, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 serviceCode: "serviceCode"
        //             }
        //         }
        //     }
        // })
    }



    static edit = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        serviceCode: "serviceCode"
                    }
                }
            }
        })
    }
    static active = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }
    static deActive = (data) => {
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