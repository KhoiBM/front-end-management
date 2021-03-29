/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'
import photoDemo from 'src/app/assets/image/demoPhoto.jpeg'
import photoDemo2 from 'src/app/assets/image/demoPhoto2.jpg'
import photoDemo3 from 'src/app/assets/image/demoPhoto3.jpg'
import config from 'src/environments/config'
import { toast } from 'react-toastify'
import { PhotoServices } from 'src/app/services'

export const useLoadPhotoList = (props) => {

    const [photoList, setPhotoList] = useState([
        photoDemo,
        photoDemo2,
        photoDemo3
    ])

    const loadPhotoList = async (bucketName, fileKey) => {
        try {

            const response = await (await PhotoServices.getPhotoListByLink({
                bucketName,
                fileKey
            })).data

            // console.log("response: " + response)
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    const photoList = response.info.records
                    console.log("photoList: " + photoList)
                    setPhotoList(photoList)
                    // toast.success("Thành công")
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
    }
    return { loadPhotoList, photoList, setPhotoList }
}
