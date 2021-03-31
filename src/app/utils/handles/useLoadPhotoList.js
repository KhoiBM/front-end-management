/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'

import config from 'src/environments/config'
import { toast } from 'react-toastify'
import { PhotoServices } from 'src/app/services'

export const useLoadPhotoList = (props) => {

    // const [photoList, setPhotoList] = useState([
    //     photoDemo,
    //     photoDemo2,
    //     photoDemo3
    // ])
    const [photoList, setPhotoList] = useState([
    ])

    const loadPhotoList = async (bucketName, fileKey) => {
        try {

            const response = await (await PhotoServices.getPhotoListByLink({
                bucketName,
                fileKey
            })).data

            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    let photoList = response.info.photoList
                    photoList = photoList.filter(url => {
                        const fileName = url.split("/")[6]
                        // console.log("url: " + JSON.stringify(fileName.length > 0))
                        return fileName.length > 0
                    })


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
