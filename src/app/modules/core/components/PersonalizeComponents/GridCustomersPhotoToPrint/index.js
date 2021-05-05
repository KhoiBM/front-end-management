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



export const GridCustomersPhotoToPrint = (props) => {



    const { recordForCustomersPhotoToPrint, dragUrl, sizeContainer = { width: "21.9vw" } } = props

    const classes = useStyles({ widthContainer: sizeContainer.width })

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()


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
                    {photoList && photoList != null && photoList.length > 0 && photoList.map((url, index) => {



                        return (

                            <Card elevation={0} key={index} className={classes.photoPreviewCard}>
                                <img src={url} className={classes.photoPreview}
                                    draggable="true"
                                    onDragStart={(e) => {
                                        e.stopPropagation()



                                        const data = {
                                            url,
                                            src: e.target.src
                                        }

                                        dragUrl.current = data

                                        console.log("dragUrl: " + JSON.stringify(dragUrl.current))



                                    }}
                                    key={index}
                                />

                            </Card>


                        )
                    })}
                </Paper>
            }
        </>
    )
}
