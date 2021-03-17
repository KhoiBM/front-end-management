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
    static viewProfile = () => {
        // return useHttpModule().get(config.useApiPath.api., data)

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        id: 1,
                        firstName: "khoi",
                        lastName: "bui",
                        phone: "0387741552",
                        dob: "05-06-1998",
                        gender: "male",
                        address: "tay ninh",
                    }
                }

            }
        })

    }




    static editProfile = (data) => {
        // return useHttpModule().post(config.useApiPath.api.editProfile, data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
            }
        })
    }



}