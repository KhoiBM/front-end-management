import React from 'react'
import { toast } from 'react-toastify'
import config from 'src/environments/config.js'
import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';
import { PhotoServices } from 'src/app/services/CoreServices/PhotoServices/index.js'
export const useUploadPhoto = () => {
    const uploadPhoto = async (uploadInfo, uploadFiles) => {
        console.log("uploadFiles:" + JSON.stringify(uploadFiles))
        console.log(uploadFiles)

        getPresignedURLToUpload(uploadInfo, uploadFiles, uploadPhotoWithPresignedURL)

    }

    const getPresignedURLToUpload = async (uploadInfo, uploadFiles, uploadPhotoWithPresignedURL) => {

        uploadFiles.forEach(async (uploadFile, index) => {
            console.log("uploadFile:" + JSON.stringify(uploadFile))
            console.log(uploadFile)
            try {

                const uuid = `${uuidv5(uploadFile.name, uuidv4())}`
                // ${uuid}
                const fileNameCustom = uploadFile.name.indexOf("thumbnail") != -1 ? `${uploadFile.name.trim().split(/(\s+)/).join('')}` : `${uploadFile.name.trim().split(/(\s+)/).join('')}`
                // console.log("fileNameCustom: " + fileNameCustom)

                const { bucketName, prefix } = uploadInfo

                const data = {
                    bucketName,
                    fileType: uploadFile.type,
                    fileKey: `${prefix}/${fileNameCustom}`
                }

                console.log("fileKey: " + `${prefix}/${fileNameCustom}`)

                const responsePresignedURLToUpload = await (await PhotoServices.getPresignedURLToUpload(data))

                console.log("responsePresignedURLToUpload: " + JSON.stringify(responsePresignedURLToUpload))
                // console.log(responsePresignedURLToUpload)

                const responseStatus = responsePresignedURLToUpload.status
                // console.log("responseStatus: " + JSON.stringify(responseStatus))

                const responseData = responsePresignedURLToUpload.data



                // if (responseStatus != 200 || responseStatus != 201) throw new Error(`${config.useMessage.resultFailure}`)


                if (responseData && responseData != null) {

                    if (responseData.result == config.useResultStatus.SUCCESS) {
                        const presignedURL = await responseData.info.url
                        // toast.success("Thành công")
                        console.log("presignedURL: " + presignedURL)

                        await uploadPhotoWithPresignedURL(presignedURL, uploadFile)

                        if (index == uploadFiles.length - 1) toast.success("Thành công")

                    } else {
                        // toast.error(`${config.useMessage.resultFailure} - ${responseData.errorInfo}`)
                        throw new Error(`${config.useMessage.resultFailure} - ${responseData.errorInfo}`)
                    }

                } else {
                    throw new Error("responseData is null or undefined")
                }
            } catch (error) {
                console.log(`${"error in getPresignedURLToUpload"} : ${error}`)
                toast.error(`${config.useMessage.uploadPhotoFailure} + ${error}`)
                throw error
            }

        })


    }


    const uploadPhotoWithPresignedURL = async (presignedURL, uploadFile) => {

        const responseUploadPhotoWithPresignedURL = await (await PhotoServices.uploadPhotoWithPresignedURL(presignedURL, uploadFile))
        const responseStatus = responseUploadPhotoWithPresignedURL.status

        // console.log("responseUploadPhotoWithPresignedURL: " + JSON.stringify(responseUploadPhotoWithPresignedURL))

        if (responseUploadPhotoWithPresignedURL && responseUploadPhotoWithPresignedURL != null) {
            if (responseStatus == 200) {

                toast.success(`Tải lên ảnh ${uploadFile.name} thành công`)

            } else {
                // toast.error(config.useMessage.resultFailure)
                throw new Error(`${config.useMessage.resultFailure}`)
            }
        } else {
            throw new Error("responseUploadPhotoWithPresignedURL is null or undefined")
        }

    }


    return { uploadPhoto }
}
