
import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class ManageCategoryServices {
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
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records:
                        [
                            {
                                categoryID: "1",
                                categoryName: "abc",
                                description: 'abc',
                                serviceID: 1,
                                serviceName: "abc",
                                isActive: true,
                                createdAt: "02-02-2020",
                                updatedAt: "02-02-2020"
                            },

                            {
                                categoryID: "2",
                                categoryName: "abc2",
                                description: 'abc',
                                serviceID: 1,
                                serviceName: "abc",
                                isActive: true,
                                createdAt: "02-02-2020",
                                updatedAt: "02-02-2020"
                            }
                            ,

                            {
                                categoryID: "3",
                                categoryName: "abc3",
                                description: 'abc',
                                serviceID: 1,
                                serviceName: "abc",
                                isActive: true,
                                createdAt: "02-02-2020",
                                updatedAt: "02-02-2020"
                            }
                        ]
                }
            }
        })
    }
    static getAll = () => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records:
                        [
                            {
                                categoryID: "1",
                                categoryName: "abc"
                            },

                            {
                                categoryID: "2",
                                categoryName: "abc2"
                            }
                            ,

                            {
                                categoryID: "3",
                                categoryName: "abc3"
                            }
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



