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
        console.log("dataFilterroleIDList: " + JSON.stringify(data.roleIDList))
        // console.log("includes1 : " + data.roleIDList.includes(1))
        return useHttpModule().post(config.useApiPath.api.manageAccountServices.view, data)
    //     if (data.roleIDList.includes(1) && data.roleIDList.includes(2) && data.roleIDList.includes(3) && data.roleIDList.includes(4)) {
    //         if (data.page == 1) {
    //             return Promise.resolve({
    //                 data: {
    //                     result: config.useResultStatus.SUCCESS,
    //                     info: {
    //                         records: [
    //                             { accountID: 15, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", roleName: "manager", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                             { accountID: 25, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                             { accountID: 35, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                             { accountID: 45, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                             { accountID: 55, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
    //                         totalPage: 20,
    //                         page: data.page
    //                     }
    //
    //                 }
    //             })
    //         }
    //         return Promise.resolve({
    //             data: {
    //                 result: config.useResultStatus.SUCCESS,
    //                 info: {
    //                     records: [{ accountID: 65, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                     { accountID: 105, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: true },
    //                     { accountID: 75, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true },
    //                     { accountID: 85, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                     { accountID: 95, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true }],
    //                     totalPage: 20,
    //                     page: data.page
    //                 }
    //
    //             }
    //         })
    //     }
    //     else
    //         if (data.roleIDList.includes(1)) {
    //             if (data.page == 1) {
    //                 return Promise.resolve({
    //                     data: {
    //                         result: config.useResultStatus.SUCCESS,
    //                         info: {
    //                             records: [
    //                                 { accountID: 1, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", roleName: "manager", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 2, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 3, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 4, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 5, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
    //                             totalPage: 10,
    //                             page: data.page
    //                         }
    //
    //                     }
    //                 })
    //             }
    //             return Promise.resolve({
    //                 data: {
    //                     result: config.useResultStatus.SUCCESS,
    //                     info: {
    //                         records: [{ accountID: 6, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                         { accountID: 10, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: true },
    //                         { accountID: 7, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true },
    //                         { accountID: 8, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                         { accountID: 9, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true }],
    //                         totalPage: 10,
    //                         page: data.page
    //                     }
    //
    //                 }
    //             })
    //         } else if (data.roleIDList.includes(2)) {
    //             if (data.page == 1) {
    //                 return Promise.resolve({
    //                     data: {
    //                         result: config.useResultStatus.SUCCESS,
    //                         info: {
    //                             records: [
    //                                 { accountID: 12, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", roleName: "manager", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 22, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 32, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 42, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 52, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
    //                             totalPage: 20,
    //                             page: data.page
    //                         }
    //
    //                     }
    //                 })
    //             }
    //             return Promise.resolve({
    //                 data: {
    //                     result: config.useResultStatus.SUCCESS,
    //                     info: {
    //                         records: [{ accountID: 62, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                         { accountID: 102, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: true },
    //                         { accountID: 72, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true },
    //                         { accountID: 82, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                         { accountID: 92, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true }],
    //                         totalPage: 20,
    //                         page: data.page
    //                     }
    //
    //                 }
    //             })
    //         } else if (data.roleIDList.includes(3)) {
    //             if (data.page == 1) {
    //                 return Promise.resolve({
    //                     data: {
    //                         result: config.useResultStatus.SUCCESS,
    //                         info: {
    //                             records: [
    //                                 { accountID: 13, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", roleName: "manager", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 23, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 33, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 43, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 53, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
    //                             totalPage: 20,
    //                             page: data.page
    //                         }
    //
    //                     }
    //                 })
    //             }
    //             return Promise.resolve({
    //                 data: {
    //                     result: config.useResultStatus.SUCCESS,
    //                     info: {
    //                         records: [{ accountID: 63, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                         { accountID: 103, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: true },
    //                         { accountID: 73, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true },
    //                         { accountID: 83, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                         { accountID: 93, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true }],
    //                         totalPage: 20,
    //                         page: data.page
    //                     }
    //
    //                 }
    //             })
    //         } else if (data.roleIDList.includes(4)) {
    //             if (data.page == 1) {
    //                 return Promise.resolve({
    //                     data: {
    //                         result: config.useResultStatus.SUCCESS,
    //                         info: {
    //                             records: [
    //                                 { accountID: 14, username: "khoibm", email: "fsadfsafdffdsfsfsdfsfd@gmail.com", roleID: "2", roleName: "manager", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 24, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: false, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 34, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 44, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" },
    //                                 { accountID: 54, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true, createdAt: "10-03-2020", updatedAt: "10-3-2020" }],
    //                             totalPage: 20,
    //                             page: data.page
    //                         }
    //
    //                     }
    //                 })
    //             }
    //             return Promise.resolve({
    //                 data: {
    //                     result: config.useResultStatus.SUCCESS,
    //                     info: {
    //                         records: [{ accountID: 64, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                         { accountID: 104, username: "khoibm", email: "fsad@gmail.com", roleID: "3", roleName: "businessStaff", isActive: true },
    //                         { accountID: 74, username: "khoibm", email: "fsad@gmail.com", roleID: "4", roleName: "technicalStaff", isActive: true },
    //                         { accountID: 84, username: "khoibm", email: "fsad@gmail.com", roleID: "2", roleName: "manager", isActive: true },
    //                         { accountID: 94, username: "khoibm", email: "fsad@gmail.com", roleID: "1", roleName: "customer", isActive: true }],
    //                         totalPage: 20,
    //                         page: data.page
    //                     }
    //
    //                 }
    //             })
    //         }
    //
    //
    //
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
        // return useHttpModule().post(config.useApiPath.api.manageAccountServices., data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //
        //     }
        // })
    }
    static edit = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageAccountServices.edit, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //
        //     }
        // })
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


    static getRoleToSelectAddOrEdit = (data = {type:1}) => {
        return useHttpModule().post(config.useApiPath.api.manageAccountServices.viewListRole,data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [
        //                 {
        //                     roleID: "1",
        //                     roleName: "Khách hàng"
        //                 },
        //                 {
        //                     roleID: "2",
        //                     roleName: "Quản lý"
        //                 },
        //
        //                 {
        //                     roleID: "3",
        //                     roleName: "Nhân viên kinh doanh"
        //                 },
        //
        //                 {
        //                     roleID: "4",
        //                     roleName: "Nhân viên kỹ thuật"
        //                 },
        //             ]
        //         }
        //     }
        // })
    }
    static getRoleToFilter = (data = {type:0}) => {
        return useHttpModule().post(config.useApiPath.api.manageAccountServices.viewListRole,data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [
        //                 {
        //                     roleID: 1,
        //                     roleName: "Khách hàng"
        //                 },
        //                 {
        //                     roleID: 2,
        //                     roleName: "Quản lý"
        //                 },
        //
        //                 {
        //                     roleID: 3,
        //                     roleName: "Nhân viên kinh doanh"
        //                 },
        //
        //                 {
        //                     roleID: 4,
        //                     roleName: "Nhân viên kỹ thuật"
        //                 },
        //             ]
        //         }
        //     }
        // })
    }
}