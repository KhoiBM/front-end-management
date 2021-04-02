/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import config from 'src/environments/config'
import { useLoadPhotoList } from 'src/app/utils'

export const GirdCartItemPhotoList = (props) => {
    const { recordForGridCartItemPhotoList } = props

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    useEffect(() => {
        loadInit()
    }, [recordForGridCartItemPhotoList])


    const loadInit = async () => {
        if (recordForGridCartItemPhotoList && recordForGridCartItemPhotoList != null) {
            console.table(recordForGridCartItemPhotoList)
            // const { orderCode, orderDetailCode } = recordForGridCartItemPhotoList

            // let bucketName = ""
            // let folder = ""
            // let categoryCode = recordForGridCartItemPhotoList.categoryCode
            // let rawProductCode = recordForGridCartItemPhotoList.rawProductCode
            // let fileKey = ''

            // switch (recordForGridCartItemPhotoList.createdBy) {
            //     case "Khách hàng":
            //         bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
            //         folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["CUSTOMER'SRAWPRODUCT"]
            //         fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
            //         break;
            //     case "Quản lý":
            //         bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
            //         folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]
            //         fileKey = `${folder}/${categoryCode}/${rawProductCode}/thumbnail`
            //         break;
            // }
            // loadPhotoList(bucketName, fileKey)

            // console.log("recordForCartItem: " + JSON.stringify(recordForCartItem))
        }

    }


    useEffect(() => {
        // console.table(photoList)

    }, [photoList])





    return (
        <>

        </>
    )
}
