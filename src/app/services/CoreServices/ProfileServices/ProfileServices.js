/* eslint-disable no-unused-vars */

import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'

export class ProfileServices {
    // static = (data) => {
    //     // return useHttpModule().post(config.useApiPath.api., data)
    //     return Promise.resolve({
    //         data: {
    //             result: config.useResultStatus.SUCCESS,

    //         }
    //     })
    // }
    static view = () => {
        return useHttpModule().post(config.useApiPath.api.manageProfile.viewProfile)

        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 profileID: 1,
        //                 firstName: "khoi",
        //                 lastName: "bui",
        //                 phone: "0387741552",
        //                 dob: "05-06-1998",
        //                 gender: false,
        //                 address: "tay ninh",
        //             }
        //         }
        //
        //     }
        // })

    }




    static edit = (data) => {
        return useHttpModule().post(config.useApiPath.api.manageProfile.editProfile, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //     }
        // })
    }



}