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


    static viewOverallRevenue = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        inWeek: 122122,
                        inMonth: 13213232,
                        inYear: 2121221
                    }
                }
            }
        })
    }
    static viewRevenueOfEachService = () => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        inWeek: {},
                        inMonth: {},
                        inYear: {}
                    }
                }
            }
        })
    }
    static viewNumberOrder = () => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        inWeek: {},
                        inMonth: {},
                        inYear: {}
                    }
                }
            }
        })
    }
}   
