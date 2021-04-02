import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'
export class ManageStatisticServices {
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


    static viewOverallRevenue = () => {
        return useHttpModule().get(config.useApiPath.api.manageStatisticServices.viewOverallRevenue)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 overall: 1232323,
        //                 inWeek: 1323,
        //                 inMonth: 14213,
        //                 inYear: 1521221
        //             }
        //         }
        //     }
        // })
    }

    static viewRevenueOfEachService = () => {
        return useHttpModule().get(config.useApiPath.api.manageStatisticServices.viewRevenueOfEachService)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 inWeek:
        //                     [
        //                         {
        //                             x: 'Ảnh',
        //                             y: 12123123
        //                         },
        //                         {
        //                             x: 'Đồ lưu niệm',
        //                             y: 13123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Quần áo',
        //                             y: 19123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Đồ sứ',
        //                             y: 10123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Tạo của riêng bạn',
        //                             y: 10123123
        //                         },
        //                     ],
        //                 inMonth:
        //                     [
        //                         {
        //                             x: 'Ảnh',
        //                             y: 12123123
        //                         },
        //                         {
        //                             x: 'Đồ lưu niệm',
        //                             y: 13123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Quần áo',
        //                             y: 19123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Đồ sứ',
        //                             y: 10123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Tạo của riêng bạn',
        //                             y: 10123123
        //                         }
        //                     ],
        //                 inYear:
        //                     [
        //                         {
        //                             x: 'Ảnh',
        //                             y: 12123123
        //                         },
        //                         {
        //                             x: 'Đồ lưu niệm',
        //                             y: 13123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Quần áo',
        //                             y: 19123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Đồ sứ',
        //                             y: 10123123
        //                         }
        //                         ,
        //                         {
        //                             x: 'Tạo của riêng bạn',
        //                             y: 10123123
        //                         }
        //                     ]
        //             }
        //         }
        //     }
        // })

    }
    static viewNumberOrder = () => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        inWeek: [
                            {
                                x: 'Chủ nhật',
                                y: 12123123
                            },
                            {
                                x: 'Thứ hai',
                                y: 12123123
                            },
                            {
                                x: 'Thứ ba',
                                y: 13123123
                            }
                            ,
                            {
                                x: 'Thứ tư',
                                y: 19123123
                            }
                            ,
                            {
                                x: 'Thứ năm',
                                y: 10123123
                            }
                            ,
                            {
                                x: 'Thứ sáu',
                                y: 10123123
                            }
                            ,
                            {
                                x: 'Thứ bảy',
                                y: 10123123
                            }
                        ],
                        inMonth: [
                            {
                                x: 'Chủ nhật',
                                y: 12123123
                            },
                            {
                                x: 'Thứ hai',
                                y: 12123123
                            },
                            {
                                x: 'Thứ ba',
                                y: 13123123
                            }
                            ,
                            {
                                x: 'Thứ tư',
                                y: 19123123
                            }
                            ,
                            {
                                x: 'Thứ năm',
                                y: 10123123
                            }
                            ,
                            {
                                x: 'Thứ sáu',
                                y: 10123123
                            }
                            ,
                            {
                                x: 'Thứ bảy',
                                y: 10123123
                            }
                        ],
                        inYear: [
                            {
                                x: 'Chủ nhật',
                                y: 12123123
                            },
                            {
                                x: 'Thứ hai',
                                y: 12123123
                            },
                            {
                                x: 'Thứ ba',
                                y: 13123123
                            }
                            ,
                            {
                                x: 'Thứ tư',
                                y: 19123123
                            }
                            ,
                            {
                                x: 'Thứ năm',
                                y: 10123123
                            }
                            ,
                            {
                                x: 'Thứ sáu',
                                y: 10123123
                            }
                            ,
                            {
                                x: 'Thứ bảy',
                                y: 10123123
                            }
                        ]
                    }
                }
            }
        })
    }
}   
