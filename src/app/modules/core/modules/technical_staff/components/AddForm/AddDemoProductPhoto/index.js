/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, Button, Paper, Grid, Slide, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { useCustomStylesAddEditForm, useUploadPhoto } from 'src/app/utils';
import { DropZoneUpload, PageHeader } from 'src/app/modules/core/components';
import { IconClose } from 'src/app/components';
import { toast } from 'react-toastify';
import config from 'src/environments/config';

const useStyles = makeStyles(theme => ({
    dialog: {
        width: "33rem",
        height: "auto",
        whiteSpace: "nowrap",
    },
    dialogTitle: {
        position: "relative",
        // padding: theme.spacing(2),
    },
    dialogContent: {
        background: "#fff",
        position: "relative",
    },
    dialogAction: {

    },
    rootForm: {
        marginTop: theme.spacing(2),
        width: "100%",
        height: "auto",
        // border: "1px solid red",



    },
    rootGridContainer: {
    },
    gridItemUpload: {
        width: '99.5%',
        height: "auto",
        minHeight: "500px",
        // border: "1px solid red",
    },
    buttonWrapper: {
        // border: "1px solid red",
        width: '100%',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        // marginRight: theme.spacing(1),
    },
    button: {
        cursor: "pointer",
        // marginTop: theme.spacing(2),
        color: "#fff",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            // backgroundColor: "var(--secondary-color-main)",
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const AddDemoProductPhoto = (props) => {
    const classes = useStyles();

    const [uploadFiles, setUploadFiles] = useState([])

    const { uploadPhoto } = useUploadPhoto()

    const { addDemoPhotoModal, setAddDemoPhotoModal } = props

    const { isOpen, recordForDemoPhoto, handleCloseModal } = addDemoPhotoModal

    useEffect(() => {
        console.log("recordForDemoPhoto: " + JSON.stringify(recordForDemoPhoto))
    }, [recordForDemoPhoto])

    const handleSubmit = (event) => {
        event.preventDefault();

        add()
        //test
    }

    const add = async () => {
        uploadFiles.forEach((file) => {
            console.log("name: " + JSON.stringify(file.name))
            console.log("type: " + JSON.stringify(file.type))
        })
        // console.log("uploadFiles: " + JSON.stringify(uploadFiles))
        console.log(uploadFiles)
        try {

            const bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
            const folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["ORDER"]

            const orderCode = recordForDemoPhoto.orderCode
            const orderDetailCode = recordForDemoPhoto.orderDetailCode

            console.log(`${folder}/${orderCode}/${orderDetailCode}/Demo`)

            const uploadInfo = {
                bucketName,
                prefix: `${folder}/${orderCode}/${orderDetailCode}/Demo`,
            }

            if (uploadFiles.length > 0) {
                uploadPhoto(uploadInfo, uploadFiles)
            } else {
                toast.success("Không có tệp để tải lên")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

    }


    return (
        <>
            <Dialog open={isOpen} classes={{ paper: `${classes.dialog}` }} TransitionComponent={Transition}>

                <DialogTitle className={classes.dialogTitle}>

                </DialogTitle>

                <DialogContent className={classes.dialogContent}>

                    <IconClose handleClose={handleCloseModal} />

                    <PageHeader>
                        Tải lên ảnh mẫu
                    </PageHeader>

                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                        <Grid container className={classes.rootGridContainer}>
                            <Grid item xs={12} sm={12} md={12} className={classes.gridItemUpload}>
                                <DropZoneUpload setUploadFiles={setUploadFiles} sizeContainer={{ width: "30rem" }} />
                            </Grid>
                        </Grid>
                        <div className={classes.buttonWrapper}>
                            <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>Tải ảnh lên</Button>
                        </div>
                    </form>

                </DialogContent>

            </Dialog >
        </>
    )
}
