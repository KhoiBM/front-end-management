/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useLoadPhotoList, useDataUrlToFile } from 'src/app/utils'
import { Paper, Card, makeStyles } from '@material-ui/core'
import config from 'src/environments/config'

const useStyles = makeStyles(theme => ({
    customersPhotoToPrintContainer: {
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        width: props => props.widthContainer ? `${props.widthContainer}` : "21.9rem",
        height: "auto",
        minHeight: "100%",
        maxHeight: "100%",
        overflowY: "scroll !important",
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        border: "1px solid rgba(0, 0, 0, 0.23)",

    },
    photoPreviewCard: {
        width: "100px",
        height: "100px",
        float: "left",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        // backgroundColor: "blue",
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",

        '&:hover': {
            transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        },

    },
    photoPreview: {
        objectFit: "contain",
        maxWidth: "80%",
        maxHeight: "80%",
        width: 'auto',
        height: 'auto',

    },
}))

function getDataUri(url, callback) {
    var image = new Image();

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;

        canvas.getContext('2d').drawImage(this, 0, 0);


        // callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
        const urlArr = url.split("/")
        const fileName = urlArr[urlArr.length - 1]
        console.log("fileName:" + fileName)
        console.log("fileNameSplit:" + JSON.stringify(fileName.split(".")[1]))
        callback(canvas.toDataURL(`image/${fileName.split(".")[1]}`), fileName);
    };

    image.src = url;
}


export const GridCustomersPhotoToPrint = (props) => {



    const { recordForCustomersPhotoToPrint, dragUrl, sizeContainer = { width: "21.9vw" } } = props

    const classes = useStyles({ widthContainer: sizeContainer.width })

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    const { dataURLtoFile } = useDataUrlToFile()

    useEffect(() => {
        console.log("recordForCustomersPhotoToPrint: " + JSON.stringify(recordForCustomersPhotoToPrint))
        loadInit()
    }, [recordForCustomersPhotoToPrint])

    const loadInit = async () => {
        if (recordForCustomersPhotoToPrint && recordForCustomersPhotoToPrint != null) {
            const { orderCode, orderDetailCode } = recordForCustomersPhotoToPrint

            let bucketName = ""
            let folder = ""
            let fileKey = ''
            bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
            folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["ORDER"]
            fileKey = `${folder}/${orderCode}/${orderDetailCode}/ToPrint/`

            loadPhotoList(bucketName, fileKey)
        }

    }
    return (
        <>
            {recordForCustomersPhotoToPrint && recordForCustomersPhotoToPrint != null && Object.keys(recordForCustomersPhotoToPrint).length > 0 &&
                <Paper elevation={0} className={classes.customersPhotoToPrintContainer}>
                    {photoList && photoList != null && photoList.length > 0 && photoList.map((url, index) => (

                        <Card elevation={0} key={index} className={classes.photoPreviewCard}>
                            {/* <img src={url} className={classes.photoPreview}
                                draggable="true"
                                onDragStart={(e) => {
                                    e.stopPropagation()
                                    dragUrl.current = e.target.src;
                                    console.log("dragUrl: " + dragUrl.current)
                                }}
                            /> */}
                            <img src={url} className={classes.photoPreview}
                                draggable="true"
                                onDragStart={(e) => {
                                    e.stopPropagation()

                                    getDataUri(url, (dataURL, fileName) => {
                                        const acceptedFile = dataURLtoFile(dataURL, fileName)

                                        dragUrl.current = {
                                            acceptedFile,
                                            src: e.target.src
                                        }

                                        console.log("dragUrl: " + dragUrl.current)
                                    })


                                }}
                                key={index}
                            />

                        </Card>


                    ))}
                </Paper>
            }
        </>
    )
}
