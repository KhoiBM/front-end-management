import React from 'react'
import { toast } from 'react-toastify'
import config from 'src/environments/config.js'
import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';
import { PhotoServices } from 'src/app/services/CoreServices/PhotoServices/index.js'
export const useUploadPhoto = () => {
    const uploadPhoto = async (uploadInfo, uploadFiles) => {
        try {
            getPresignedURLToUpload(uploadInfo, uploadFiles, uploadPhotoWithPresignedURL)
        } catch (err) {
            toast.error(`${config.useMessage.uploadPhotoFailure} + ${err}`)
        }
    }

    const getPresignedURLToUpload = async (uploadInfo, uploadFiles, uploadPhotoWithPresignedURL) => {

        try {
            uploadFiles.forEach(async (uploadFile, index) => {


                const uuid = `${uuidv5(uploadFile.name, uuidv4())}`
                const fileNameCustom = uploadFile.name.indexOf("thumbnail") != -1 ? uploadFile.name : `${uploadFile.name.trim().split(/(\s+)/).join('')}`
                // console.log("fileNameCustom: " + fileNameCustom)



                const { bucketName, prefix } = uploadInfo

                const data = {
                    bucketName,
                    fileType: uploadFile.type,
                    fileKey: `${prefix}/${fileNameCustom}`
                }

                const responsePresignedURLToUpload = await (await PhotoServices.getPresignedURLToUpload(data)).data

                // console.log("responsePresignedURLToUpload: " + JSON.stringify(responsePresignedURLToUpload))

                if (responsePresignedURLToUpload && responsePresignedURLToUpload != null) {

                    if (responsePresignedURLToUpload.result == config.useResultStatus.SUCCESS) {
                        const presignedURL = await responsePresignedURLToUpload.info.url
                        // toast.success("Thành công")
                        console.log("presignedURL: " + presignedURL)

                        uploadPhotoWithPresignedURL(presignedURL, uploadFile)

                    } else {
                        toast.error(`${config.useMessage.resultFailure} - ${responsePresignedURLToUpload.errorInfo.message}`)
                    }

                } else {
                    throw new Error("responsePresignedURLToUpload is null or undefined")
                }
            })


        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err} `,)
        }
    }

    const uploadPhotoWithPresignedURL = async (presignedURL, uploadFile) => {
        try {

            const responseUploadPhotoWithPresignedURL = await (await PhotoServices.uploadPhotoWithPresignedURL(presignedURL, uploadFile))

            // console.log("responseUploadPhotoWithPresignedURL: " + JSON.stringify(responseUploadPhotoWithPresignedURL))

            if (responseUploadPhotoWithPresignedURL && responseUploadPhotoWithPresignedURL != null) {
                if (responseUploadPhotoWithPresignedURL.status == 200) {

                    toast.success(`Tải lên ảnh ${uploadFile.name} thành công`)

                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("responseUploadPhotoWithPresignedURL is null or undefined")
            }



        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err} `)
        }
    }
    return { uploadPhoto }
}
