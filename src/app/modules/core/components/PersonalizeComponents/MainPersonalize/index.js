/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { ToolbarPersonalize } from '../ToolbarPersonalize';
import { MainStageBar } from '../MainStageBar';
import { FooterBarPersonalize } from '../FooterBarPersonalize';
import { useDownLoadURI, useUploadPhoto } from 'src/app/utils';
import config from 'src/environments/config';

const useStyles = makeStyles(theme => ({
    rootGridContainer: {

    },
    mainPersonalizeContainer: {
        width: "100%",
        height: "auto",
        minHeight: "100%",
        // background: "yellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",

        borderRight: "1px solid #f7f3e9",


    },
    toolbarContainer: {
        width: "100%",
        height: "8vh",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // background: "blue",
        // borderTop: "1px solid #f7f3e9",
        // borderBottom: "1px solid #f7f3e9",
        borderTop: "1px solid rgb(0,0,0,0.23)",
        // borderBottom: "1px solid rgb(0,0,0,0.23)",

    },
    mainStageBarContainer: {
        width: "100%",
        height: "78vh",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // minHeight: "70vh",
        // background: "red",
        // borderTop: "1px solid rgb(0,0,0,0.23)",
        // borderTop: "1px solid #f7f3e9",
        // borderRight: "1px solid #f7f3e9",
        borderTop: "1px solid rgb(0,0,0,0.23)",
        // borderRight: "1px solid rgb(0,0,0,0.23)",

    },
    footerBarContainer: {
        width: "100%",
        height: "14vh",
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: "center",
        // background: "orange",
        // border: "1px solid red",
        // padding: theme.spacing(1)
        // backgroundColor: "#f7f3e9 !important",
        // borderTop: "1px solid #f7f3e9",
        // borderTop: "1px solid #f7f3e9",
        // borderBottom: "1px solid #f7f3e9",
        borderTop: "1px solid rgb(0,0,0,0.23)",
        borderBottom: "1px solid rgb(0,0,0,0.23)",
        // background: "var(--tertiary-color-main) !important",
        backgroundColor: "#fff !important",


    }
}))


const MainPersonalize = (props) => {

    const { uploadPhoto } = useUploadPhoto()


    const classes = useStyles();

    const { recordForMainPersonalize, dragUrl, stageRef, handleCloseModal, setRecordRawProduct } = props

    const { downloadURI } = useDownLoadURI()

    const [recordForMainStageBar, setRecordForMainStageBar] = useState(null)

    const [recordForFooterBarPersonalize, setRecordForFooterBarPersonalize] = useState(null)

    const [bgPhoto, setBgPhoto] = useState(null)

    const [photoCustomerUploadList, setPhotoCustomerUploadList] = useState([])
    const [photoDataURLPreviews, setPhotoDataURLPreviews] = useState([]);

    useEffect(() => {
        console.log("recordForMainPersonalize:" + JSON.stringify(recordForMainPersonalize))
        if (recordForMainPersonalize && recordForMainPersonalize != null) {
            const { orderCode, orderDetailCode, categoryCode, rawProductCode, createdBy, customersRawProductUploadFiles, personalizeType } = recordForMainPersonalize
            console.log("customersRawProductUploadFiles:")
            console.log(customersRawProductUploadFiles)
            switch (personalizeType) {
                case config.usePersonalizeType.createYourOwn: {
                    setRecordForMainStageBar({
                        personalizeType
                    })
                    setRecordForFooterBarPersonalize({
                        customersRawProductUploadFiles,
                        createdBy,
                        personalizeType
                    })
                }
                    break;
                case config.usePersonalizeType.studioRawProductDetail: {
                    setRecordForMainStageBar({
                        personalizeType
                    })
                    setRecordForFooterBarPersonalize({
                        categoryCode,
                        rawProductCode,
                        createdBy,
                        personalizeType
                    })
                }
                    break;

                case config.usePersonalizeType.technicalCartItem: {
                    setRecordForMainStageBar({
                        personalizeType
                    })
                    setRecordForFooterBarPersonalize({
                        categoryCode,
                        rawProductCode,
                        createdBy,
                        personalizeType
                    })
                }
                    break;
            }


        }
    }, [recordForMainPersonalize])

    // const handleExport = () => {
    //     const uri = stageRef.current.toDataURL({
    //         quality: 1,
    //         pixelRatio: 2
    //     });
    //     console.log(uri);

    //     downloadURI(uri, 'design.png');
    // };

    // const handleUpload = () => {
    //     const uri = stageRef.current.toDataURL({
    //         quality: 1,
    //         pixelRatio: 2
    //     });
    //     console.log(uri);

    //     // const bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
    //     // const folder = "TestUploadFile"

    //     // console.log(`${folder}`)

    //     // const uploadInfo = {
    //     //     bucketName,
    //     //     prefix: `${folder}`,
    //     // }

    //     // const uploadFiles = [img]

    //     // if (uploadFiles.length > 0) {
    //     //     uploadPhoto(uploadInfo, uploadFiles)
    //     // } else {
    //     //     toast.success("Không có tệp để tải lên")
    //     // }


    // };


    return (
        <>
            <div className={classes.mainPersonalizeContainer}>

                <div className={classes.toolbarContainer}>
                    <ToolbarPersonalize stageRef={stageRef}
                        // handleExport={handleExport}
                        // handleUpload={handleUpload}
                        handleCloseModal={handleCloseModal}
                        setRecordRawProduct={setRecordRawProduct}
                        photoCustomerUploadList={photoCustomerUploadList}
                        photoDataURLPreviews={photoDataURLPreviews}
                        setPhotoCustomerUploadList={setPhotoCustomerUploadList}
                        setPhotoDataURLPreviews={setPhotoDataURLPreviews}
                    />
                </div>

                <div className={classes.mainStageBarContainer}>
                    {

                        bgPhoto && bgPhoto != null
                        &&
                        < MainStageBar
                            recordForMainStageBar={recordForMainStageBar}
                            bgPhoto={bgPhoto}
                            dragUrl={dragUrl}
                            stageRef={stageRef}
                            photoCustomerUploadList={photoCustomerUploadList}
                            setPhotoCustomerUploadList={setPhotoCustomerUploadList}
                            photoDataURLPreviews={photoDataURLPreviews}
                            setPhotoDataURLPreviews={setPhotoDataURLPreviews}
                        />
                    }
                </div>

                <div className={classes.footerBarContainer}>
                    {
                        recordForFooterBarPersonalize && recordForFooterBarPersonalize != null &&
                        <FooterBarPersonalize
                            recordForFooterBarPersonalize={
                                recordForFooterBarPersonalize
                            }
                            setBgPhoto={setBgPhoto}
                        />
                    }
                </div>

            </div>
        </>
    )
}

export default MainPersonalize
