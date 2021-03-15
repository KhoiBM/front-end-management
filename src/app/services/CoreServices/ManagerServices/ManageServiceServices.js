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
        // return useHttpModule().get(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                id: "1",
                                serviceName: "abc",
                                description: "abc",
                                isActive: true,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
                            },
                            {
                                id: "2",
                                serviceName: "abc",
                                description: "abc",
                                isActive: true,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
                            }
                            ,
                            {
                                id: "3",
                                serviceName: "abc",
                                description: "abc",
                                isActive: true,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
                            }
                            ,
                            {
                                id: "4",
                                serviceName: "abc",
                                description: "abc",
                                isActive: true,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
                            }
                            ,
                            {
                                id: "5",
                                serviceName: "abc",
                                description: "abc",
                                isActive: true,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
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
                                id: "6",
                                serviceName: "abc",
                                description: "abc",
                                isActive: false,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
                            },
                            {
                                id: "7",
                                serviceName: "abc",
                                description: "abc",
                                isActive: false,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
                            }, {
                                id: "8",
                                serviceName: "abc",
                                description: "abc",
                                isActive: false,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
                            }, {
                                id: "9",
                                serviceName: "abc",
                                description: "abc",
                                isActive: false,
                                createdAt: "03-02-2021",
                                updatedAt: "03-02-2021",
                            },
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