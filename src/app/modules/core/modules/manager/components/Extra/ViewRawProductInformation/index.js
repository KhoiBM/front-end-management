/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, Typography, Container, Box } from '@material-ui/core'
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { PhotoServices } from 'src/app/services';
import { PageHeader, GridPhotoList } from 'src/app/modules/core/components';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IconClose } from 'src/app/components';
import photoDemo from 'src/app/assets/image/demoPhoto.jpeg'
import photoDemo2 from 'src/app/assets/image/demoPhoto2.jpg'
import photoDemo3 from 'src/app/assets/image/demoPhoto3.jpg'
import { useFormat, useLoadPhotoList } from 'src/app/utils';

const useStyles = makeStyles(theme => ({
    pageViewInfomationContainer: {
        width: "100%",
        minHeight: "800px",
        height: "auto",  //  làm mất goc paper ở dưới 
        // background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "scroll",

    },
    pageViewInfomationWrapper: {
        width: "100%",
        padding: theme.spacing(3),
        height: "auto",
        minHeight: "800px",
        // background: "blue",

    },
    rootGrid: {
        marginTop: theme.spacing(3),
        width: "100%",
        minHeight: "700px",
        height: "auto",
        // border: "1px solid red",
        '& .MuiFormControl-root': {
            width: '200%',
            height: "auto",
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
    },
    gridItem1: {
        // background: "blue",
        padding: 0

    },
    gridItem2: {
        // background: "red",

    },
    titleContainer: {
        width: "100%",
        // background: "red",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    descriptionContainer: {
        width: "77%",
        textAlign: "justify",

        // background: "red",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        "& .MuiTypography-body1 ": {
            lineHeight: "2 !important",
        }
    }, dateTimeContainer: {

    },
    gridItemContent: {
        width: "100%",
        height: "150px",
        // background: "red",
        paddingTop: theme.spacing(2),
    },
    categoryContainer: {
        // background: "red",
        marginBottom: theme.spacing(1),
        fontWeight: "300",
    },
    contentWrapper: {
        marginTop: theme.spacing(3),
        maxWidth: "300px",
        width: "200px",
        height: "50px",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        // border: "1px solid var(--primary-color-main)",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "500",
        fontSize: "1.25rem"
    }
}))
// const [rawProductPhotoList, setRawProductPhotoList] = useState([])

export const ViewRawProductInformation = (props) => {

    const classes = useStyles();

    const { recordForViewInformation } = props
    const bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
    const folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]
    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()



    useEffect(() => {
        if (recordForViewInformation && recordForViewInformation != null) {
            const categoryCode = recordForViewInformation.categoryCode
            const rawProductCode = recordForViewInformation.rawProductCode
            const fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
            loadPhotoList(bucketName, fileKey)
            // console.log("loadPhotoList")
        }
    }, [])


    return (
        <>
            <div className={classes.pageViewInfomationContainer}>
                <Paper elevation={5} className={classes.pageViewInfomationWrapper}>

                    <IconClose handleClose={props.handleClose} />

                    <PageHeader>
                        Xem thông tin chi tiết sản phẩm thô
                    </PageHeader>

                    <Grid container spacing={4} className={classes.rootGrid}>

                        <Grid item xs={6} sm={6} md={6} className={classes.gridItem1}>
                            {photoList && photoList != null && <GridPhotoList photoList={photoList} />}
                        </Grid>


                        <Grid item xs={6} sm={6} md={6} className={classes.gridItem2}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Box className={classes.categoryContainer}>
                                        <Typography variant={"subtitle1"} color={"textSecondary"}>Mã Code: {recordForViewInformation.rawProductCode}</Typography>
                                    </Box>
                                    <Box className={classes.titleContainer}>
                                        <Typography variant={"h3"}>{recordForViewInformation.rawProductName}</Typography>
                                    </Box>

                                </Grid >

                                <Grid item xs={12} sm={12} md={12}>
                                    <Box className={classes.descriptionContainer}>
                                        <Typography variant={"body1"}>{recordForViewInformation.description}</Typography>
                                    </Box>

                                </Grid>

                                <Grid item xs={12} sm={12} md={12}>
                                    <Grid container>
                                        <Grid item xs={6} sm={6} md={6} className={classes.gridItemContent}>
                                            <Box >
                                                <Typography variant={"h5"} color={"textSecondary"}>Giá</Typography>
                                                <Box className={classes.contentWrapper}>
                                                    <Typography variant={"body1"} >{useFormat().formatMoney(recordForViewInformation.unitPrice)} đ</Typography>
                                                </Box>

                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} className={classes.gridItemContent}>
                                            <Box>
                                                <Typography variant={"h5"} color={"textSecondary"}>Tổng số lượng</Typography>
                                                <Box className={classes.contentWrapper}>
                                                    <Typography variant={"body1"}>{recordForViewInformation.totalQuantity}</Typography>
                                                </Box>

                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={6} sm={6} md={6} className={classes.gridItemContent}>
                                            <Box>
                                                <Typography variant={"h5"} color={"textSecondary"}>Kích thước</Typography>
                                                <Box className={classes.contentWrapper}>
                                                    <Typography variant={"body1"}>{recordForViewInformation.size}</Typography>                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} className={classes.gridItemContent}>
                                            <Box>
                                                <Typography variant={"h5"} color={"textSecondary"}>Màu sắc </Typography>
                                                <Box className={classes.contentWrapper}>
                                                    <RiCheckboxBlankCircleFill style={{ color: `${recordForViewInformation.color}` }} />

                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={6} sm={6} md={6} className={classes.gridItemContent}>
                                            <Box>
                                                <Typography variant={"h5"} color={"textSecondary"}>Thể loại:</Typography>
                                                <Box className={classes.contentWrapper}>
                                                    <Typography variant={"body1"}>{recordForViewInformation.categoryName}</Typography>                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} className={classes.gridItemContent}>
                                            <Box>
                                                <Typography variant={"h5"} color={"textSecondary"}>Tạo bởi:</Typography>
                                                <Box className={classes.contentWrapper}>
                                                    <Typography variant={"body1"}>{recordForViewInformation.createdBy}</Typography>                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={6} sm={6} md={6} className={classes.gridItemContent}>
                                            <Box>
                                                <Typography variant={"h5"} color={"textSecondary"}>Ngày tạo:</Typography>
                                                <Box className={classes.contentWrapper}>
                                                    <Typography variant={"body1"}>{recordForViewInformation.createdAt}</Typography>                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} className={classes.gridItemContent}>
                                            <Box>
                                                <Typography variant={"h5"} color={"textSecondary"}>Ngày sửa đổi:</Typography>
                                                <Box className={classes.contentWrapper}>
                                                    <Typography variant={"body1"}>{recordForViewInformation.updatedAt}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>


                </Paper>
            </div>

        </>
    )
}



// const [photoList, setPhotoList] = useState([
//     {
//         photoID: 1,
//         rawProductID: 1,
//         orderDetailID: "",
//         printedProductID: "",
//         photoTypeID: 1,
//         photoTypeName: "Ảnh của sản phẩm",
//         photoLink: photoDemo,
//         createdAt: "03-03-2021",
//         updatedAt: "03-03-2021",
//     }, {
//         photoID: 1,
//         rawProductID: 1,
//         orderDetailID: "",
//         printedProductID: "",
//         photoTypeID: 1,
//         photoTypeName: "Ảnh của sản phẩm",
//         photoLink: photoDemo2,
//         createdAt: "03-03-2021",
//         updatedAt: "03-03-2021",
//     },
//     {
//         photoID: 1,
//         rawProductID: 1,
//         orderDetailID: "",
//         printedProductID: "",
//         photoTypeID: 1,
//         photoTypeName: "Ảnh của sản phẩm",
//         photoLink: photoDemo3,
//         createdAt: "03-03-2021",
//         updatedAt: "03-03-2021",
//     }
// ])
//   {/* <Typography variant={"body1"}>{}</Typography> */}