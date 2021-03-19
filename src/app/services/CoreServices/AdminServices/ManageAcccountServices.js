/* eslint-disable no-unused-vars */
import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'

export class ManageAccountServices {
    // static = (data) => {
    //     // return useHttpModule().post(config.useApiPath.api., data)
    //     return Promise.resolve({
    //         data: {
    //             result: config.useResultStatus.SUCCESS,

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
                            { accountID: 1, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", roleName: "manager", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { accountID: 2, username: "khoibm", email: "fsad@gmail.com", roleID: "3", role: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { accountID: 3, username: "khoibm", email: "fsad@gmail.com", roleID: "4", role: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { accountID: 4, username: "khoibm", email: "fsad@gmail.com", roleID: "2", role: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { accountID: 5, username: "khoibm", email: "fsad@gmail.com", roleID: "1", role: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
                        totalPage: 20,
                        page: data.page
                    }

                }
            })
        }
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [{ accountID: 6, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
                    { accountID: 10, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: true },
                    { accountID: 7, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true },
                    { accountID: 8, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
                    { accountID: 9, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true }],
                    totalPage: 20,
                    page: data.page
                }

            }
        })


    }
    static viewAccountTest = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            { accountID: 1, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", role: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { accountID: 2, username: "khoibm", email: "fsad@gmail.com", roleID: "3", role: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { accountID: 3, username: "khoibm", email: "fsad@gmail.com", roleID: "4", role: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { accountID: 4, username: "khoibm", email: "fsad@gmail.com", roleID: "2", role: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { accountID: 5, username: "khoibm", email: "fsad@gmail.com", roleID: "1", role: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
                        totalPage: 20,
                        page: data.page
                    }

                }
            })
        }
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [{ id: 6, username: "khoibm", email: "fsad@gmail.com", roleID: "2", role: "manager", isActive: true }, { id: 10, username: "khoibm", email: "fsad@gmail.com", roleID: "3", role: "businessStaff", isActive: true }, { id: 7, username: "khoibm", email: "fsad@gmail.com", roleID: "4", role: "technicalStaff", isActive: true }, { id: 8, username: "khoibm", email: "fsad@gmail.com", roleID: "2", role: "manager", isActive: true }, { id: 9, username: "khoibm", email: "fsad@gmail.com", roleID: "1", role: "customer", isActive: true }],
                    totalPage: 20,
                    page: data.page
                }

            }
        })
    }
    static add = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,

            }
        })
    }
    static edit = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,

            }
        })
    }
    static active = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,


            }
        })
    }

    static deActive = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,

            }
        })
    }

}