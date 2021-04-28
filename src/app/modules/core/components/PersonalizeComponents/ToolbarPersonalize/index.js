/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Box, Button } from '@material-ui/core';
import { PageHeader } from 'src/app/modules/core/components';
import { toast } from 'react-toastify';
const useStyles = makeStyles(theme => ({
    rootGridContainer: {
        width: "100%",
        height: "100%",
        // minHeight: "10vh",
        // background: "var(--tertiary-color-main)",
        backgroundColor: "#fff !important",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // background: "orange",

    },
    gridItem1: {
        width: "100%",
        height: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // background: "orange",
        // border: "1px solid rgb(0,0,0,0.23)",
        // borderRight: "1px solid #f7f3e9",
        borderRight: "1px solid rgb(0,0,0,0.23)",

    },
    gridItem2: {
        width: "100%",
        height: "100%",
        // background: "red",
        // border: "1px solid rgb(0,0,0,0.23)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonActionWrapper: {
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(1),
        width: "100%",
        height: "100%"

    },
    buttonSave: {
        width: "100px",
        height: "35px",
        // border: "1px solid rgb(0,0,0,0.23)",
        // color: "#fff",
        // backgroundColor: "#fff",
        background: "var(--primary-color-main)",
        bordeRadius: "5px",
        // background: "#010606",
        whitespace: "nowrap",
        padding: '14px 48px',
        color: "#fff",
        outline: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.2s ease-in-out",

        "&:hover": {
            position: "relative",
            top: "0.5px",
            transition: "all 0.2s ease-in-out",
            // background: "#fff",
            // color: "var(--primary-color-main)",
            color: "#fff",
            background: "var(--primary-color-main)",
        },
        '&:focus': {
            transform: "scale(1.025)",
            // background: "#fff",
            // color: "var(--primary-color-main)",
            color: "#fff",
            background: "var(--primary-color-main)",
        },


    },
    buttonClose: {
        width: "100px",
        height: "35px",
        // border: "1px solid rgb(0,0,0,0.23)",
        // color: "#fff",
        backgroundColor: "#fff",
        // background: "var(--primary-color-main)",
        // bordeRadius: "5px",
        // // background: "#010606",
        // whitespace: "nowrap",
        // padding: '14px 48px',
        // color: "#fff",
        // outline: "none",
        // border: "none",
        // cursor: "pointer",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // transition: "all 0.2s ease-in-out",

        "&:hover": {
            position: "relative",
            top: "0.5px",
            transition: "all 0.2s ease-in-out",
            backgroundColor: "#fff",

        },
        '&:focus': {
            transform: "scale(1.025)",
            backgroundColor: "#fff",
        },


    },
    titleWrapper: {
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: theme.spacing(3),
        color: "#fff !important"

    }


}))



export const ToolbarPersonalize = (props) => {
    const classes = useStyles();
    const { stageRef, handleExport, handleUpload, handleCloseModal, setRecordRawProduct, photoCustomerUploadList, setPhotoCustomerUploadList, photoDataURLPreviews, setPhotoDataURLPreviews } = props

    useEffect(() => {

    }, [photoCustomerUploadList, photoDataURLPreviews])

    return (
        <>
            <Grid container className={classes.rootGridContainer}>
                <Grid item xs={10} sm={10} md={10} className={classes.gridItem1}>
                    <Box className={classes.titleWrapper}>
                        <PageHeader>Cá nhân hoá</PageHeader>
                    </Box>
                    {/* <Box className={classes.filterWrapper}>

                    </Box>
                    <Box className={classes.historyWrapper}>

                    </Box> */}
                </Grid>
                <Grid item xs={2} sm={2} md={2} className={classes.gridItem2}>
                    <Box className={classes.buttonActionWrapper}>
                        <Button size="small" variant="outlined" color="primary" className={classes.buttonSave} onClick={async () => {

                            console.log("photoCustomerUploadList")
                            console.log(photoCustomerUploadList)
                            console.log("photoDataURLPreviews")
                            console.log(photoDataURLPreviews)

                            if (photoDataURLPreviews.length > 1) {
                                toast.info("Chỉ cho phép lưu một ảnh xem trước thiết kế. Vui lòng xoá và chỉ giữ lại một ảnh mà bạn thích nhất")
                            } else {

                                if (photoCustomerUploadList && photoCustomerUploadList != null && photoCustomerUploadList.length > 0 && photoDataURLPreviews && photoDataURLPreviews != null && photoDataURLPreviews.length > 0) {
                                    await setRecordRawProduct(prev => ({
                                        ...prev,
                                        toPrintPhotoList: photoCustomerUploadList,
                                        createdPreviewPhotoList: photoDataURLPreviews
                                    }))

                                    handleCloseModal()
                                    await setPhotoCustomerUploadList([])
                                    await setPhotoDataURLPreviews([])
                                } else {
                                    toast.info("Vui lòng tạo ảnh xem trước thiết kế với ảnh để in trước khi muốn lưu")
                                }

                            }


                        }}>Lưu</Button>
                        <Button size="small" variant="outlined" color="primary" className={classes.buttonClose} onClick={handleCloseModal}>Đóng</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
