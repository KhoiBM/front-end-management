import React, { useCallback } from 'react'
import Dropzone from 'react-dropzone'
import { Paper, makeStyles, Typography, List, ListItem } from '@material-ui/core'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import { AiOutlineUpload } from 'react-icons/ai'
const useStyles = makeStyles((theme) => ({
    dropZoneUploadContainer: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        width: "21.9rem",
        minHeight: "100px",
        height: "auto",
        position: "absolute"

    },
    dropZoneUploadWrapper: {
        // border: "1px solid red",
        width: "100%",
        minHeight: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    rootList: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
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


    }
}))


const photoValidator = (file) => {
    const maxLength = 20;
    const MIN_WIDTH = 300

    if (file.name.length > maxLength) {
        return {
            code: "name-too-large",
            message: `Name is larger than ${maxLength} characters`
        };
    }
    // if (file.width < MIN_WIDTH) {
    //     return {
    //         code: "small-width",
    //         message: `Image width must be greater than ${MIN_WIDTH}`,
    //     }
    // }

    return null
}
export const DropZoneUpload = () => {
    const classes = useStyles()

    const mimeTypes = "image/png, image/jpg, image/jpeg"
    // const mimeTypes = ""
    // 5242880    5Mb
    // const maxSize = 1048576;
    const maxSize = 5242880;



    // const onDrop = useCallback(acceptedFiles => {
    //     console.log(acceptedFiles);
    // }, []);

    const onDropAccepted =
        useCallback(acceptedFiles => {
            console.info("acceptedFiles:")
            console.log(acceptedFiles)
        }, []);


    const onDropRejected = useCallback(rejectedFiles => {
        console.log("rejectedFiles: " + JSON.stringify(rejectedFiles))
        console.log(rejectedFiles)
        rejectedFiles.forEach((rejectedFile) => {
            const isFileTooLarge = rejectedFile && rejectedFile.file.size > maxSize;
            // console.log("isFileTooLarge:" + isFileTooLarge)
            if (isFileTooLarge) { toast.error(`Tệp  ${rejectedFile.file.path} quá lớn`) }
            else {
                toast.error(`Tệp ${rejectedFile.file.path} không được chấp nhận!`)
            }

        })

    }, []);




    const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles } = useDropzone({
        accept: mimeTypes,
        minSize: 0,
        maxSize: maxSize,
        onDropAccepted,
        onDropRejected,
        validator: photoValidator

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

            <Paper>

                <List component="ul" className={classes.rootList} >
                    {acceptedFiles.length > 0 && acceptedFiles.map((acceptedFile, index) => (
                        <ListItem key={index}>
                            {acceptedFile.name}
                        </ListItem>

                    ))}

                </List>
            </Paper>

        </>
    )
}


// const mimeTypes = "image/png, image/jpg, image/jpeg"
// // const mimeTypes = ""
// // 5242880    5Mb
// const maxSize = 1048576;
// // const maxSize = 5242880;


// return (
//     <>

//         <Paper elevation={0} className={classes.dropZoneUploadContainer}>
//             <Dropzone
//                 accept={mimeTypes}
//                 minSize={0}
//                 maxSize={maxSize}
//                 multiple

//                 onDropAccepted={
//                     acceptedFiles => {
//                         console.info("acceptedFiles:")
//                         console.log(acceptedFiles)
//                     }
//                 }

//                 onDropRejected={
//                     rejectedFiles => {
//                         console.log("rejectedFiles: " + JSON.stringify(rejectedFiles))
//                         console.log(rejectedFiles)
//                         rejectedFiles.forEach((rejectedFile) => {
//                             toast.error(`Tệp  ${rejectedFile.file.path} quá lớn`)
//                         })

//                     }
//                 }


//             >

//                 {({ getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles }) => {
//                     // const isFileTooLarge = rejectedFiles && rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
//                     return (
//                         <section>
//                             <div {...getRootProps({ className: classes.dropZoneUploadWrapper })}>
//                                 <input {...getInputProps()} />

//                                 <Typography variant={"caption"}>
//                                     {!isDragActive && "Kéo thả tệp vào đây hoặc nhấp chuột để chọn tệp"}
//                                 </Typography>

//                                 <Typography variant={"caption"}>
//                                     {isDragActive && !isDragReject && "Hãy thả nó xuống"}
//                                 </Typography>

//                                 <Typography variant={"caption"} color="error">
//                                     {isDragReject && "Tệp không được chấp nhận!"}
//                                 </Typography>
//                                 {/* 
//                                 <Typography variant={"caption"} color="error">
//                                     {isFileTooLarge && "Tệp quá lớn"}
//                                 </Typography> */}



//                             </div>
//                         </section>
//                     )
//                 }
//                 }
//             </Dropzone>
//         </Paper>

//     </>
// )