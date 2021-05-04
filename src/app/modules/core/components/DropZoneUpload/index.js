/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from 'react'
import Dropzone from 'react-dropzone'
import { Paper, makeStyles, Typography, List, ListItem, CardMedia, Divider, Card, Tooltip, Zoom, Box } from '@material-ui/core'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import { AiOutlineUpload } from 'react-icons/ai'
const useStyles = makeStyles((theme) => ({
    dropZoneUploadContainer: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        // width: "21.9rem",
        width: props => props.widthContainer ? `${props.widthContainer}` : "21.9rem",
        minHeight: "100px",
        height: "auto",
        position: "absolute",
        background: "transparent"

    },
    dropZoneUploadWrapper: {
        // border: "1px solid red",
        width: "100%",
        minHeight: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff !important",
        borderRadius: "4px"

    },
    rootListPreview: {

        // backgroundColor: "red",
        // display: "flex",
        // justifyContent: "flex-start",
        // flexWrap: "wrap",
        // gap: theme.spacing(2),

    },
    iconUploadWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    iconUpload: {
        fontSize: "40px",
        color: theme.palette.grey[700],

    },
    titleUpload: {


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
    dropZonePreviewContainer: {
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        // width: "21.9rem",
        width: props => props.widthContainer ? `${props.widthContainer}` : "21.9rem",
        height: "auto",
        // background: "red",
        position: "absolute",
        top: theme.spacing(24),
        // width: '100%',
        // height: "auto",
        minHeight: "345px",
        maxHeight: "345px",
        overflow: "scroll",
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        border: "1px solid rgba(0, 0, 0, 0.23)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: theme.spacing(1)
    }
}))


const photoValidator = (file) => {
    // let message = ''
    const maxLength = 40;
    const MIN_WIDTH = 300
    const MIN_HEIGHT = 300
    // console.log("validatorfile: " + JSON.stringify(file))
    // console.log("withfile: " + JSON.stringify(file.width))
    // console.log("heightfile: " + JSON.stringify(file.height))
    if (file.name.length > maxLength) {
        toast.error(`Tên tệp quá lớn - ${file.path} !`)
        return {
            code: "name-too-large",
            message: `Name is larger than ${maxLength} characters`
        };
    }

    const i = new Image()

    i.onload = () => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            console.log("imagefile")
            console.log({
                src: file.preview,
                width: i.width,
                height: i.height,
                data: reader.result
            })
        }
    }

    i.src = file.preview
    if (file.width < MIN_WIDTH) {
        toast.error("Chiều rộng của hình phải lớn hơn 300px!")
        return {
            code: "small-width",
            message: `Image width must be greater than ${MIN_WIDTH}`,
        }
    }
    if (file.height < MIN_HEIGHT) {
        toast.error("Chiều cao của hình phải lớn hơn 300px!")
        return {
            code: "small-height",
            message: `Image height must be greater than ${MIN_HEIGHT}`,
        }
    }
    return null
}
const getFilesFromEvent = async (event) => {
    const files = event.target.files
    const promises = []
    for (let index = 0; index < files.length; index++) {
        const file = files[index]
        const promise = new Promise((resolve, reject) => {
            const image = new Image()
            let url = URL.createObjectURL(file)
            image.src = url
            image.onload = function () {
                file.width = image.width
                file.height = image.height
                file.src = image.src
                resolve(file)
            }
        })
        promises.push(promise)
    }

    return await Promise.all(promises)
}


export const DropZoneUpload = (props) => {
    const { sizeContainer = { width: "21.9rem" } } = props
    const classes = useStyles({ widthContainer: sizeContainer.width })

    const { setUploadFiles } = props
    const mimeTypes = "image/png, image/jpg, image/jpeg"
    // const mimeTypes = ""
    // 5242880    5Mb
    const maxSize = 10485760;
    // const maxSize = 5242880;

    useEffect(() => {
        setUploadFiles([])
    }, [])


    // const onDrop = useCallback(acceptedFiles => {
    //     console.log(acceptedFiles);
    // }, []);

    const onDropAccepted =
        useCallback(async acceptedFiles => {
            console.info("acceptedFiles:")
            console.log(acceptedFiles)

            const promises = []
            if (acceptedFiles && acceptedFiles != null) {
                for (let index = 0; index < acceptedFiles.length; index++) {
                    const acceptedFile = acceptedFiles[index]
                    const promise = new Promise((resolve, reject) => {
                        const image = new Image()
                        let url = URL.createObjectURL(acceptedFile)
                        image.src = url
                        image.onload = function () {
                            acceptedFile.width = image.width
                            acceptedFile.height = image.height
                            acceptedFile.src = image.src
                            resolve(acceptedFile)
                        }
                    })
                    promises.push(promise)
                }
            }
            const uploadFiles = await Promise.all(promises)

            // console.info("uploadFiles:")
            // console.log(uploadFiles)

            setUploadFiles(uploadFiles)
        }, []);


    const onDropRejected = useCallback(rejectedFiles => {
        console.log("rejectedFiles: " + JSON.stringify(rejectedFiles))
        console.log(rejectedFiles)
        rejectedFiles.forEach((rejectedFile) => {
            const isFileTooLarge = rejectedFile && rejectedFile.file.size > maxSize;
            // console.log("isFileTooLarge:" + isFileTooLarge)
            if (isFileTooLarge) { toast.error(`Tệp  ${rejectedFile.file.name} quá lớn`) }
            else {
                toast.error(`Tệp ${rejectedFile.file.name} không được chấp nhận!`)
            }

        })

    }, []);




    const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles } = useDropzone({
        accept: mimeTypes,
        minSize: 0,
        maxSize: maxSize,
        onDropAccepted,
        onDropRejected,
        // getFilesFromEvent: getFilesFromEvent,
        validator: photoValidator,

    });





    return (
        <>

            <Paper elevation={0} className={classes.dropZoneUploadContainer}>

                <div {...getRootProps({ className: classes.dropZoneUploadWrapper })}>

                    <input {...getInputProps()} />


                    {!isDragActive &&
                        <>
                            <Typography variant={"caption"} className={classes.titleUpload}>
                                <div className={classes.iconUploadWrapper}>
                                    <p><AiOutlineUpload className={classes.iconUpload} /></p>
                                </div>

                                <p>Kéo thả tệp vào đây hoặc nhấp chuột để chọn tệp</p>
                            </Typography>


                        </>

                    }


                    <Typography variant={"caption"}>
                        {isDragActive && !isDragReject && "Hãy thả nó xuống"}
                    </Typography>

                    <Typography variant={"caption"} color="error">
                        {isDragReject && "Tệp không được chấp nhận!"}
                    </Typography>

                </div>

            </Paper >

            <Paper elevation={0} className={classes.dropZonePreviewContainer}>
                {/* 
                <Box component="div" className={classes.rootListPreview} > */}
                {acceptedFiles.length > 0 && acceptedFiles.map((acceptedFile, index) => (

                    <Card elevation={0} key={index} className={classes.photoPreviewCard}>
                        <Tooltip TransitionComponent={Zoom} placement="left" title={acceptedFile.name} >

                            {/* <CardMedia image={acceptedFile.src} className={classes.photoPreview}
                            /> */}
                            <img src={acceptedFile.src} className={classes.photoPreview} />

                        </Tooltip>
                    </Card>


                ))}

                {/* </Box> */}
            </Paper>

        </>
    )
}
