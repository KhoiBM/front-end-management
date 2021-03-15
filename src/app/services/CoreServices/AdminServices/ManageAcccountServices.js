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
    static viewAccount = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            { id: 1, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", role: "manager", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { id: 2, username: "khoibm", email: "fsad@gmail.com", roleID: "3", role: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { id: 3, username: "khoibm", email: "fsad@gmail.com", roleID: "4", role: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { id: 4, username: "khoibm", email: "fsad@gmail.com", roleID: "2", role: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { id: 5, username: "khoibm", email: "fsad@gmail.com", roleID: "1", role: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
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
    static viewAccountTest = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            { id: 1, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", role: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { id: 2, username: "khoibm", email: "fsad@gmail.com", roleID: "3", role: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { id: 3, username: "khoibm", email: "fsad@gmail.com", roleID: "4", role: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { id: 4, username: "khoibm", email: "fsad@gmail.com", roleID: "2", role: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
                            { id: 5, username: "khoibm", email: "fsad@gmail.com", roleID: "1", role: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
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
    static addAccount = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,

            }
        })
    }
    static editAccount = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,

            }
        })
    }
    static activeAccount = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,


            }
        })
    }

    static deActiveAccount = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,

            }
        })
    }

}