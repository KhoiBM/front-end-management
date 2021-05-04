/* eslint-disable react/prop-types */
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { makeStyles, Slide, DialogContent, DialogTitle, Dialog, Box, Button } from '@material-ui/core';
import { IconClose } from 'src/app/components';
import { useDownLoadURI } from 'src/app/utils';

const useStyles = makeStyles(theme => ({

    dialogContainer: {
        zIndex: "2300 !important",
    },
    dialog: {
        width: "90vw !important",
        maxWidth: "100vw !important",
        height: "auto",
        minHeight: "90vh",
        whiteSpace: "nowrap",
        zIndex: 999
    },
    dialogTitle: {

    },
    dialogContent: {
        background: "#fff",
        // position: "relative",
        // border: "1px solid blue",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    dialogAction: {

    },
    photoPreviewContainer: {
        width: "100%",
        height: "80vh",
        // border: "1px solid rgb(0,0,0,0.23)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",

    },
    cardMedia: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid blue",
        backgroundColor: "#fff"

    },
    buttonActionWrapper: {
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(1),
        width: "100%",
        height: "auto",
        // border: "1px solid blue",
        marginBottom: theme.spacing(2),
        marginTop: 0

    },
    buttonExport: {
        width: "150px",
        height: "40px",
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
    iconCloseWrapper: {
        width: "100px",
        height: "auto",
        border: "1px solid rgb(0,0,0,0.23)",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px"
    },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const PreviewDesignedPhoto = (props) => {
    const classes = useStyles();

    const { previewDesignedPhotoModal, setPreviewDesignedPhotoModal } = props

    const { isOpen, photoPreview, handleCloseModal } = previewDesignedPhotoModal

    const [photoToShow, setPhotoToShow] = useState({})

    const { downloadURI } = useDownLoadURI()

    useLayoutEffect(() => {


        if (photoPreview && photoPreview != null) {

            setPhotoToShow(photoPreview)
            console.log("photoPreview: " + JSON.stringify(photoPreview))

        }

        // loadInit()

    }, [photoPreview])

    const handleExport = () => {

        console.log(photoToShow.src);

        downloadURI(photoToShow.src, 'preview');
    };

    return (
        <>
            <Dialog open={isOpen} classes={{ paper: classes.dialog }} className={classes.dialogContainer} TransitionComponent={Transition}>

                {/* 
                <DialogTitle className={classes.dialogTitle}>

                </DialogTitle> */}

                <DialogContent className={classes.dialogContent}>
                    <Box className={classes.buttonActionWrapper}>

                        <Button size="small" variant="outlined" color="primary" className={classes.buttonExport}
                            onClick={handleExport}
                        >
                            Tải ảnh xuống
                         </Button>

                        <div className={classes.iconCloseWrapper}>
                            <IconClose handleClose={handleCloseModal} />
                        </div>


                    </Box>
                    <Box className={classes.photoPreviewContainer}>
                        {photoToShow && photoToShow != null &&
                            <img
                                className={classes.cardMedia}
                                src={photoToShow.src}
                                crossOrigin="anonymous"
                            />
                        }

                    </Box>

                </DialogContent>

            </Dialog >

        </>
    )
}
