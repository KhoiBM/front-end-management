
import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'

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

        return useHttpModule({ 'Content-Type': file.type }, false).put(url, file)

    }
    static getPresignedURLToUpload = (data) => {
        // return useHttpModule().post(`${config.useApiPath.api.photoServices.getPhotoListByLink}?bucketName=${bucketName}&fileKey=${fileKey}&fileType=${fileType}`)
        const { bucketName, fileKey, fileType } = data
        return useHttpModule().post(config.useApiPath.api.photoServices.getPresignedURLToUpload, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 presignedURL: ""
        //             }
        //         }
        //     }
        // })
    }


    static getPhotoListByLink = (data) => {
        const { bucketName, fileKey } = data
        // return useHttpModule().post(`${config.useApiPath.api.photoServices.getPhotoListByLink}?bucketName=${bucketName}&fileKey=${fileKey}`)
        return useHttpModule().post(`${config.useApiPath.api.photoServices.getPhotoListByLink}`, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 presignedURL: ""
        //             }
        //         }
        //     }
        // })
    }




}