/* eslint-disable react/prop-types */
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { makeStyles, Slide, DialogContent, DialogTitle, Dialog, Box } from '@material-ui/core';
import { IconClose } from 'src/app/components';

const useStyles = makeStyles(theme => ({

    dialog: {
        width: "90vw !important",
        maxWidth: "100vw !important",
        height: "auto",
        minHeight: "90vh",
        whiteSpace: "nowrap",
    },
    dialogTitle: {
        position: "relative",
        // // backgroundColor: "red"
        padding: theme.spacing(2),

    },
    dialogContent: {
        background: "#fff",
        position: "relative",
        // border: "1px solid blue",
        width: "100%",
        height: "auto",
    },
    dialogAction: {

    },
    photoPreviewContainer: {
        width: "100%",
        height: "auto",
        minHeight: "100%",
        // border: "1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    cardMedia: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid blue",

    }

}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const PreviewDesignedPhoto = (props) => {
    const classes = useStyles();

    const { previewDesignedPhotoModal, setPreviewDesignedPhotoModal } = props

    const { isOpen, photoPreview, handleCloseModal } = previewDesignedPhotoModal

    const [photoToShow, setPhotoToShow] = useState({})

    useLayoutEffect(() => {


        if (photoPreview && photoPreview != null) {

            setPhotoToShow(photoPreview)
            console.log("photoPreview: " + JSON.stringify(photoPreview))

        }

        // loadInit()

    }, [photoPreview])



    return (
        <>
            <Dialog open={isOpen} classes={{ paper: classes.dialog }} TransitionComponent={Transition}>


                <DialogTitle className={classes.dialogTitle}>
                    <IconClose handleClose={handleCloseModal} />
                    <br />
                </DialogTitle>

                <DialogContent className={classes.dialogContent}>

                    <Box className={classes.photoPreviewContainer}>
                        {photoToShow && photoToShow != null &&
                            <img
                                className={classes.cardMedia}
                                src={photoToShow.src}
                            />
                        }

                    </Box>

                </DialogContent>

            </Dialog >

        </>
    )
}
