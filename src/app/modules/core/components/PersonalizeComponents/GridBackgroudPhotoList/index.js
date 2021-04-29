/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import config from 'src/environments/config'
import { useLoadPhotoList } from 'src/app/utils'
import { GridSelectPhotoList } from '../GridSelectPhotoList'
import { Loader } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'
import { hi } from 'date-fns/esm/locale'

const useStyles = makeStyles(theme => ({

}))

export const GridBackgroudPhotoList = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const classes = useStyles()

    const { recordForBackgroudPhotoList, setBgPhoto } = props

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    useEffect(() => {
        loadInit()
        // console.log("recordForBackgroudPhotoList:" + JSON.stringify(recordForBackgroudPhotoList))
    }, [recordForBackgroudPhotoList])


    const loadInit = async () => {
        if (recordForBackgroudPhotoList && recordForBackgroudPhotoList != null) {
            showLoader()

            const { orderCode, orderDetailCode, categoryCode, rawProductCode, createdBy, customersRawProductUploadFiles, personalizeType } = recordForBackgroudPhotoList

            switch (personalizeType) {
                case config.usePersonalizeType.createYourOwn: {
                    if (customersRawProductUploadFiles && customersRawProductUploadFiles != null && customersRawProductUploadFiles.length > 0) {
                        setPhotoList(customersRawProductUploadFiles.map((photo) => photo.src))
                    }
                }
                    break;
                case config.usePersonalizeType.studioRawProductDetail: {

                    let bucketName = ""
                    let folder = ""
                    let fileKey = ''

                    switch (createdBy) {
                        case "Khách hàng":
                            bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                            folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["CUSTOMER'SRAWPRODUCT"]
                            fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                            break;
                        case "Quản lý":
                            bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                            folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]
                            fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                            break;
                    }

                    await loadPhotoList(bucketName, fileKey)
                }


                    break;

                case config.usePersonalizeType.technicalCartItem: {
                    let bucketName = ""
                    let folder = ""
                    let fileKey = ''

                    switch (createdBy) {
                        case "Khách hàng":
                            bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                            folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["CUSTOMER'SRAWPRODUCT"]
                            fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                            break;
                        case "Quản lý":
                            bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                            folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]
                            fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                            break;
                    }

                    await loadPhotoList(bucketName, fileKey)
                }
                    break;
            }


        }



        // console.log("recordForBackgroudPhotoList: " + JSON.stringify(recordForBackgroudPhotoList))
        hideLoader()
    }



    return (
        <>
            {loading.status && < Loader loading={loading} zIndexValue={2350} />}
            {
                photoList && photoList != null && photoList.length > 0 &&
                < GridSelectPhotoList photoList={photoList} setBgPhoto={setBgPhoto} />
            }
        </>
    )
}
