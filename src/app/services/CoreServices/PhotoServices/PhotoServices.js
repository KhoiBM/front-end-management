
import config from '../../../../environments/config'
import { useHttpModule, useHttpModuleAWS } from '../../HttpServices'

export class PhotoServices {
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


    static uploadPhotoWithPresignedURL = (url, file) => {

        return useHttpModuleAWS({
            "put": {
                "Content-Type": file.type
            }
        }).put(url, file)

    }


    static getPresignedURLToUpload = (data) => {

        const { bucketName, fileKey, fileType } = data

        return useHttpModule().get(`${config.useApiPath.api.photoServices.getPresignedURLToUpload}?bucketName=${bucketName}&fileKey=${fileKey}&fileType=${fileType}`)
    }


    static getPhotoListByLink = (data) => {

        const { bucketName, fileKey } = data

        // return useHttpModule().post(`${config.useApiPath.api.photoServices.getPhotoListByLink}?bucketName=${bucketName}&fileKey=${fileKey}`)

        // return useHttpModule().post(`${config.useApiPath.api.photoServices.getPhotoListByLink}`, data)

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: []
                }
            }
        })

    }




}