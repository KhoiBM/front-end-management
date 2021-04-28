/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Button, Box, Zoom, Tooltip } from '@material-ui/core';
import { Stage } from 'react-konva';
import { StageKonvaContainer } from '../StageKonvaContainer';
import { VscOpenPreview } from 'react-icons/vsc'
import { PreviewDesignedPhoto } from '../PreviewDesignedPhoto';
import { useRefresh, useUploadPhoto } from 'src/app/utils';
import { AiOutlinePlusSquare, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { throttle, debounce } from 'lodash';

const useStyles = makeStyles(theme => ({
    rootGridContainer: {
        width: "100%",
        height: "100%",
        // minHeight: "70vh",
        // background: "red",
        // borderTop: "1px solid rgb(0,0,0,0.23)",

    },
    gridItemStage: {
        borderRight: "1px solid rgba(0, 0, 0, 0.23)",
        display: 'flex',
        justifyContent: "center !important",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        height: "auto",
        padding: theme.spacing(3),
        width: "100%",
        // borderRight: "1px solid #f7f3e9",
    },
    gridItemPreview: {
        width: "100%",
        height: "auto",
        background: "#fff",
        overflow: "scroll",
        padding: theme.spacing(2),
        // backgroundColor: "var(--tertiary-color-main)",
        backgroundColor: "#fff !important",
        // borderLeft: "1px solid rgb(0,0,0,0.23)",

    },
    photoPreview: {
        objectFit: "contain",
        maxWidth: "80%",
        maxHeight: "80%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid rgba(0, 0, 0, 0.23)",

    },
    previewCardWrapper: {
        overflow: "scroll !important",
        width: "100% !important",
        height: "auto",
        maxHeight: "12vh !important",
        display: "flex",
        justifyContent: "center !important",
        alignItems: "center !important",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        marginBottom: theme.spacing(2),
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",

        '&:hover': {
            transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        },
    },
    buttonShowPreview: {
        position: "absolute",
        right: theme.spacing(3),
        bottom: theme.spacing(3),
        zIndex: 5,
        // color: "#fff",
        color: "#000"
    },
    buttonCreatePreviewPhoto: {
        position: "absolute",
        right: theme.spacing(3),
        top: theme.spacing(3),
        zIndex: 5,
        // color: "#fff",
        color: "#000"
    },
    deleteIcon: {
        color: "#fb3640"
    },
    deleteIconWrapper: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(0.5),
        zIndex: 5
    }

}))

export const MainStageBar = (props) => {
    const classes = useStyles();

    const { bgPhoto, dragUrl, stageRef, photoCustomerUploadList, setPhotoCustomerUploadList, photoDataURLPreviews, setPhotoDataURLPreviews, recordForMainStageBar } = props
    const { personalizeType } = recordForMainStageBar

    const [previewDesignedPhotoModal, setPreviewDesignedPhotoModal] = useState({ isOpen: false })

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [photoPreviews, setPhotoPreviews] = useState([]);

    // const [photoPreview, setPhotoPreview] = useState([]);

    const [isPressCreatePreviewPhoto, setIsPressCreatePreviewPhoto] = useState(false);
    const [isPressDeletePreviewPhoto, setIsPressDeletePreviewPhoto] = useState(false);

    const [seletedPhotoID, setSeletedPhotoID] = useState(null);

    const [photoPreviewID, setPhotoPreviewID] = useState(null)

    const { uploadPhoto } = useUploadPhoto()

    const [toPrintInStageImages, setToPrintInStageImages] = useState([]);

    useEffect(() => {

    }, [refresh])


    // setIsPressCreatePreviewPhoto(false)
    // setIsPressDeletePreviewPhoto(false)


    useEffect(() => {
        console.log("photoPreviews: ")
        console.log(photoPreviews)
    }, [photoPreviews])


    useEffect(() => {
        console.log("bgPhoto: " + bgPhoto)
    }, [bgPhoto, stageRef,])

    useEffect(() => {
        console.log("seletedPhotoID: ")
        console.log(seletedPhotoID)
    }, [seletedPhotoID])

    useEffect(() => {

        console.log("afterhandleDeletePreviewPhotoDATAURL");

        console.log("photoCustomerUploadList:")
        console.log(photoCustomerUploadList)
        console.log("photoDataURLPreviews:")
        console.log(photoDataURLPreviews)

    }, [isPressDeletePreviewPhoto])


    useEffect(() => {
        // console.log("afterhandleCreatePreviewPhotoDATAURL");

        // console.log("photoCustomerUploadList:" )
        // console.log(photoCustomerUploadList)
        // console.log("photoDataURLPreviews:")
        // console.log(photoDataURLPreviews)

    }, [isPressCreatePreviewPhoto])


    useEffect(() => {

        console.log("changePhotoDataURLPreviews");

        console.log("photoDataURLPreviews:")
        console.log(photoDataURLPreviews)

    }, [photoDataURLPreviews])

    useEffect(() => {

        console.log("changePhotoCustomerUploadList");

        console.log("photoCustomerUploadList:")
        console.log(photoCustomerUploadList)

    }, [photoCustomerUploadList])



    const handleCreatePreviewPhoto = debounce(async () => {

        handleRefresh()

        await setIsPressCreatePreviewPhoto(prev => !prev)
        // await setIsPressCreatePreviewPhoto(true)

        // handleRefresh()

        const createPreviewPhoto = async () => {
            const uuid = await uuidv4()
            const isToImage = await photoPreviews && photoPreviews.length < 5 && photoDataURLPreviews && photoDataURLPreviews.length < 5
            const isBg = bgPhoto && bgPhoto != null && bgPhoto.length > 0
            const isToPrintPhoto = toPrintInStageImages && toPrintInStageImages != null && toPrintInStageImages.length > 0

            if (isToImage) {
                console.log("toImage");
                // if (isBg) {
                //     if (isToPrintPhoto) {
                const image = stageRef.current.toImage({
                    callback(img) {
                        // console.log("toImage");
                        // console.log(img);

                        setPhotoPreviewID(uuid)
                        setPhotoPreviews(photoPreviews.concat({
                            id: uuid,
                            img: img
                        }))
                    },
                    quality: 1,
                    pixelRatio: 2
                });
                const uri = stageRef.current.toDataURL({
                    quality: 1,
                    pixelRatio: 2,
                    mimeType: "image/jpeg",
                    callback(uri) {
                        console.log("setPhotoDataURLPreviews")
                        setPhotoDataURLPreviews(prev => prev.concat({ photoPreviewID: uuid, dataURL: uri }))
                        // console.log("handleCreatePreviewPhotoDATAURL");
                        // console.log(uri);
                    },
                });
                //         } else {
                //             toast.info("Không thể tạo ảnh xem trước thiết kế khi không có ảnh để in")
                //         }
                //     } else {
                //         toast.info("Không thể tạo ảnh xem trước thiết kế khi không có ảnh nền sản phẩm")
                // }
            } else {
                toast.info("Bạn chỉ có thể tạo tối đa 5 ảnh xem trước thiết kế")
            }
        }

        if (seletedPhotoID != null && seletedPhotoID.length > 0) {

            await handleRefresh()


        }

        createPreviewPhoto()






    }, 1000);

    const handlePreview = () => {
        const image = stageRef.current.toImage({
            async callback(img) {
                console.log(img);

                setPreviewDesignedPhotoModal({
                    isOpen: true,
                    photoPreview: img,
                    handleCloseModal
                })
            },
            quality: 1,
            pixelRatio: 2
        });


    };



    const handleCloseModal = () => {
        setPreviewDesignedPhotoModal({ isOpen: false })
        handleRefresh()
    }


    return (
        <>
            <Grid container className={classes.rootGridContainer}>

                <Grid item xs={12} sm={12} md={10} className={classes.gridItemStage}>

                    <Tooltip TransitionComponent={Zoom} placement="left" title={" Tạo ảnh xem trước thiết kế"} style={{ zIndex: "3500 !important" }}>
                        <Button type="button" size="small" className={classes.buttonCreatePreviewPhoto} onClick={handleCreatePreviewPhoto}>
                            <AiOutlinePlusSquare style={{ fontSize: "30px" }} />
                        </Button>
                    </Tooltip>

                    <StageKonvaContainer
                        bgPhoto={bgPhoto}
                        dragUrl={dragUrl}
                        stageRef={stageRef}
                        isPressCreatePreviewPhoto={isPressCreatePreviewPhoto}
                        setIsPressCreatePreviewPhoto={setIsPressCreatePreviewPhoto}
                        setSeletedPhotoID={setSeletedPhotoID}
                        setPhotoCustomerUploadList={setPhotoCustomerUploadList}
                        photoPreviewID={photoPreviewID}
                        setPhotoPreviewID={setPhotoPreviewID}
                        isPressDeletePreviewPhoto={isPressDeletePreviewPhoto}
                        setIsPressDeletePreviewPhoto={setIsPressDeletePreviewPhoto}
                        photoCustomerUploadList={photoCustomerUploadList}
                        toPrintInStageImages={toPrintInStageImages}
                        setToPrintInStageImages={setToPrintInStageImages}
                        personalizeType={personalizeType}
                    />

                    <Tooltip TransitionComponent={Zoom} placement="left" title={"Xem trước"} >
                        <Button size="small" className={classes.buttonShowPreview} onClick={handlePreview}>
                            <VscOpenPreview style={{ fontSize: "30px" }} />
                        </Button>
                    </Tooltip>


                </Grid>

                <Tooltip TransitionComponent={Zoom} placement="top" title="Ảnh xem trước thiết kế">
                    <Grid item xs={12} sm={12} md={2} className={classes.gridItemPreview}>
                        {
                            (() => {
                                const reversePhotoPreviews = [...photoPreviews].reverse()
                                return (
                                    reversePhotoPreviews && reversePhotoPreviews != null && reversePhotoPreviews.length > 0 &&
                                    reversePhotoPreviews.map((photo, index) => (
                                        <Box key={index} className={classes.previewCardWrapper} >
                                            <Tooltip TransitionComponent={Zoom} placement="left" title={"Xoá ảnh thiết kế"} >
                                                <Box className={classes.deleteIconWrapper}  >
                                                    <AiOutlineDelete className={classes.deleteIcon} onClick={async (e) => {
                                                        e.stopPropagation()
                                                        await setIsPressDeletePreviewPhoto(prev => !prev)
                                                        // await setIsPressDeletePreviewPhoto(true)
                                                        await setPhotoPreviews(photoPreviews.filter((val) => val.id != photo.id))
                                                        await setPhotoCustomerUploadList(prev => prev.filter((val) => val.photoPreviewID != photo.id))
                                                        await setPhotoDataURLPreviews(prev => prev.filter((val) => {
                                                            // console.log("val.photoPreviewID: " + val.photoPreviewID)
                                                            // console.log("photo.id: " + photo.id)
                                                            return val.photoPreviewID != photo.id
                                                        }))

                                                        handleRefresh()
                                                    }} />

                                                </Box>
                                            </Tooltip>
                                            <img
                                                src={photo.img.src}
                                                className={classes.photoPreview}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setPreviewDesignedPhotoModal({
                                                        isOpen: true,
                                                        photoPreview: photo.img,
                                                        handleCloseModal
                                                    })

                                                }}
                                                crossOrigin="Anonymous"
                                            />
                                        </Box>

                                    ))
                                )

                            })()

                        }
                    </Grid>
                </Tooltip>

            </Grid>



            {<PreviewDesignedPhoto previewDesignedPhotoModal={previewDesignedPhotoModal} setPreviewDesignedPhotoModal={setPreviewDesignedPhotoModal} />}

        </>
    )
}


{/* <img
                        style={{ height: "100px" }}
                        src={bgPhoto && bgPhoto != null ? bgPhoto : ""}
                        onClick={() => {

                        }}
                    /> */}