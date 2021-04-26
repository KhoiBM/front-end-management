/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import config from 'src/environments/config'
import { useLoadPhotoList, useTab, useLoadingEffect } from 'src/app/utils'
import { makeStyles, Divider } from '@material-ui/core'
import { GridPhotoList } from '../GridPhotoList'
import { Loader } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'

const useStyles = makeStyles(theme => ({

}))

export const GirdCartItemPhotoList = (props) => {

    const classes = useStyles()

    const { TabPanel, TabBar, value, handleChange } = useTab()

    const { recordForGridCartItemPhotoList } = props

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    useEffect(() => {

        loadInit()

    }, [recordForGridCartItemPhotoList])


    const loadInit = async () => {
        if (recordForGridCartItemPhotoList && recordForGridCartItemPhotoList != null) {
            // console.table(recordForGridCartItemPhotoList)
            const { orderCode, orderDetailCode, categoryCode, rawProductCode } = recordForGridCartItemPhotoList

            let bucketName = ""
            let folder = ""
            let fileKey = ''

            switch (value) {
                case 0:
                    switch (recordForGridCartItemPhotoList.createdBy) {
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

                    break;
                case 1:
                    bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                    folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["ORDER"]
                    fileKey = `${folder}/${orderCode}/${orderDetailCode}/ToPrint/`

                    break;
                case 2:

                    bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                    folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["ORDER"]
                    fileKey = `${folder}/${orderCode}/${orderDetailCode}/Preview/`

                    break;
                case 3:
                    bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                    folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["ORDER"]
                    fileKey = `${folder}/${orderCode}/${orderDetailCode}/Demo/`
                    break;
            }

            loadPhotoList(bucketName, fileKey)


            // console.log("recordForCartItem: " + JSON.stringify(recordForCartItem))
        }

    }


    useEffect(() => {
        // console.table(photoList)
        loadInit()
    }, [value])





    return (
        <>
            {/* <Loader loading={loading} /> */}

            <TabBar tabArr={[
                {
                    label: "Hình sản phẩm thô",

                    onClick: () => { }
                },
                {
                    label: "Hình để in",
                    onClick: () => { }
                },
                {
                    label: "Hình xem trước",
                    onClick: {}
                }
                ,
                {
                    label: "Hình thiết kế mẫu",
                    onClick: {}
                }
            ]} />

            <Divider />

            <TabPanel value={value} index={0}>
                {/* <p>0</p> */}
                <GridPhotoList photoList={photoList} />
            </TabPanel>

            <TabPanel value={value} index={1}>
                {/* <p>1</p> */}
                <GridPhotoList photoList={photoList} />
            </TabPanel>

            <TabPanel value={value} index={2}>
                {/* <p>2</p> */}
                <GridPhotoList photoList={photoList} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                {/* <p>2</p> */}
                <GridPhotoList photoList={photoList} />
            </TabPanel>
        </>
    )
}
