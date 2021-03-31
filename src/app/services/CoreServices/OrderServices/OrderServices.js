import config from '../../../../environments/config'
export class OrderServices {
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
    static getOrderDetailList = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [{
                        orderDetailID: 1,
                        orderDetailCode: 1,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 1,
                        rawProductName: "Lorem ipsum dolor sit amet",
                        size: '1',
                        color: "#48b7e2",
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    },
                    {
                        orderDetailID: 2,
                        orderDetailCode: 2,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 2,
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    }, {
                        orderDetailID: 1,
                        orderDetailCode: 1,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 1,
                        rawProductName: "Lorem ipsum dolor sit amet",
                        size: '1',
                        color: "#48b7e2",
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    },
                    {
                        orderDetailID: 2,
                        orderDetailCode: 2,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 2,
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    }, {
                        orderDetailID: 1,
                        orderDetailCode: 1,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 1,
                        rawProductName: "Lorem ipsum dolor sit amet",
                        size: '1',
                        color: "#48b7e2",
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    },
                    {
                        orderDetailID: 2,
                        orderDetailCode: 2,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 2,
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    }, {
                        orderDetailID: 1,
                        orderDetailCode: 1,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 1,
                        rawProductName: "Lorem ipsum dolor sit amet",
                        size: '1',
                        color: "#48b7e2",
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    },
                    {
                        orderDetailID: 2,
                        orderDetailCode: 2,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 2,
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    }, {
                        orderDetailID: 1,
                        orderDetailCode: 1,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 1,
                        rawProductName: "Lorem ipsum dolor sit amet",
                        size: '1',
                        color: "#48b7e2",
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    },
                    {
                        orderDetailID: 2,
                        orderDetailCode: 2,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 2,
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    }, {
                        orderDetailID: 1,
                        orderDetailCode: 1,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 1,
                        rawProductName: "Lorem ipsum dolor sit amet",
                        size: '1',
                        color: "#48b7e2",
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    },
                    {
                        orderDetailID: 2,
                        orderDetailCode: 2,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 2,
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    }, {
                        orderDetailID: 1,
                        orderDetailCode: 1,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 1,
                        rawProductName: "Lorem ipsum dolor sit amet",
                        size: '1',
                        color: "#48b7e2",
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    },
                    {
                        orderDetailID: 2,
                        orderDetailCode: 2,
                        orderID: 1,
                        orderCode: 1,
                        rawProductID: 2,
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    }
                    ]
                }
            }
        })
    }
}