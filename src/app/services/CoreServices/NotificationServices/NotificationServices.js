
import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'

export class NotificationServices {
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


    static viewNotification = (data) => {
        return useHttpModule().post(config.useApiPath.api.notification.viewAndCountNoti, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [
        //                 {
        //                     title: "Có đơn hàng mới1 ",
        //                     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                     actionLink: "http://localhost:3000/core/manager/statistics",
        //                     type: "Thông báo từ hệ thống",
        //                     isView: "false",
        //                     createdAt: "22-03-2021 17:13:00"
        //
        //                 },
        //                 {
        //                     title: "Có đơn hàng mới ",
        //                     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                     actionLink: "http://localhost:3000/core/manager/statistics",
        //                     type: "Thông báo từ hệ thống",
        //                     isView: "false",
        //                     createdAt: "22-03-2021 17:13:00"
        //
        //                 },
        //                 {
        //                     title: "Có đơn hàng mới ",
        //                     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                     actionLink: "http://localhost:3000/core/manager/statistics",
        //                     type: "Thông báo từ hệ thống",
        //                     isView: "false",
        //                     createdAt: "22-03-2021 17:13:00"
        //
        //                 },
        //                 {
        //                     title: "Có đơn hàng mới ",
        //                     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                     actionLink: "http://localhost:3000/core/manager/statistics",
        //                     type: "Thông báo từ hệ thống",
        //                     isView: "false",
        //                     createdAt: "22-03-2021 17:13:00"
        //
        //                 },
        //                 {
        //                     title: "Có đơn hàng mới ",
        //                     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                     actionLink: "http://localhost:3000/core/manager/statistics",
        //                     type: "Thông báo từ hệ thống",
        //                     isView: "false",
        //                     createdAt: "22-03-2021 17:13:00"
        //
        //                 },
        //             ]
        //
        //         }
        //     }
        // })
    }
    static viewNotificationDetail = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static countNotificationIsToRead = (data) => {
        return useHttpModule().post(config.useApiPath.api.notification.viewAndCountNoti, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             count: 11
        //         }
        //     }
        // })
    }

    static isView = (data) => {
        return useHttpModule().post(config.useApiPath.api.notification.viewedNoti, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //         }
        //     }
        // })
    }



}