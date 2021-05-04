/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { DialogContent, DialogTitle, Dialog, Slide, makeStyles, Grid, Button, Box } from '@material-ui/core'
import { useUploadPhoto } from 'src/app/utils'
import { RiCloseFill } from 'react-icons/ri'
import useImage from 'use-image'
import { Image, Stage, Layer } from 'react-konva'
import { DropZoneUploadBar } from '../DropZoneUploadBar'
import MainPersonalize from '../MainPersonalize'
import { IconClose } from 'src/app/components'
import { GridCustomersPhotoToPrint } from '../GridCustomersPhotoToPrint'

const useStyles = makeStyles(theme => ({
    iconCloseWrapper: {
        position: "absolute",
        right: theme.spacing(0),
        top: theme.spacing(0.6),
        "&:hover": {
            color: "#fff"
        }
    },
    dialogContainer: {
        // zIndex: "1101 !important",
        // background: "red",
    },
    dialog: {
        whiteSpace: "nowrap",
        overflow: "hidden !important",
        // backgroundColor: "#f7f3e9 !important",
        // backgroundColor: "var(--tertiary-color-main)",
        // backgroundColor: "var(--secondary-color-main)",
        // background: "var(--tertiary-color-main) !important",
        background: "#fff !important",
    },
    dialogTitle: {
        maxHeight: "0px",
        // position: "relative",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // border: "1px solid red",
        display: "none",
        background: "#fff !important",

    },
    dialogContent: {
        overflow: "hidden !important",
        width: "100%",
        height: "auto",
        // border: "1px solid red",
        padding: 0,
        background: "#fff !important",

    },
    dialogAction: {

    },
    rootForm: {
        width: "100%",
        height: "100%",
        // background: "red",
        // border: "1px solid red"
    },
    rootGridContainer: {
        width: "100%",
        height: "100%",
        // background: "blue",
        // border: "1px solid blue",
        minHeight: "95vh",
        overflow: "scroll !important",
    },
    gridItemUpload: {
        width: "100%",
        height: "100%",
        // background: "orange",
        display: "flex",
        justifyContent: "center",
        // border: "1px solid rgb(0,0,0,0.23)",
        overflow: "scroll !important",
        paddingTop: theme.spacing(2),
        // background: "var(--tertiary-color-main)",
        background: "#fff !important",
        // borderRight: "1px solid #f7f3e9",
        // borderTop: "1px solid #f7f3e9",
        // borderBottom: "1px solid #f7f3e9",
        // borderRight: "1px solid #f7f3e9",
        // borderLeft: "1px solid #f7f3e9",
        borderTop: "1px solid rgb(0,0,0,0.23)",
        borderBottom: "1px solid rgb(0,0,0,0.23)",
        borderRight: "1px solid rgb(0,0,0,0.23)",
        borderLeft: "1px solid rgb(0,0,0,0.23)",


    },
    gridItemMain: {
        width: "100%",
        height: "100%",
        // borderTop: "1px solid rgb(0,0,0,0.23)",
        // borderRight: "1px solid rgb(0,0,0,0.23)",
        // borderBottom: "1px solid rgb(0,0,0,0.23)",
        // background: "red",
        overflow: "hidden !important",
        background: "#fff !important",
    },

    gridItemSideBar: {
        width: "100%",
        height: "auto",
        // background: "orange",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid rgb(0,0,0,0.23)",
        // border: "1px solid blue",
        overflow: "scroll !important",

    },
    uploadZoneWrapper: {
        width: "100%",
        height: "50%",
        paddingTop: theme.spacing(1),
        // border: "1px solid rgb(0,0,0,0.23)",
        display: "flex",
        justifyContent: "center",
        position: "relative"
    },
    customersPhotoToPrintWrapper: {
        width: "100%",
        height: "49%",
        paddingTop: theme.spacing(1),
        // border: "1px solid rgb(0,0,0,0.23)",
        display: "flex",
        justifyContent: "center",

    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const Personalize = (props) => {

    const classes = useStyles();

    const { personalizeModal, setPersonalizeModal } = props

    const { isOpen, recordForPersonalize, handleCloseModal, setRecordRawProduct } = personalizeModal

    const [uploadFiles, setUploadFiles] = useState([])

    const { uploadPhoto } = useUploadPhoto()

    const dragUrl = useRef();

    const stageRef = useRef();

    const [recordToUse, setRecordToUse] = useState({})

    // console.log("recordToUse: " + JSON.stringify(recordToUse))
    // console.log("isOpen: " + JSON.stringify(isOpen))

    useEffect(() => {
        console.log("recordForPersonalize: " + JSON.stringify(recordForPersonalize))
        if (recordForPersonalize && recordForPersonalize != null) {
            setRecordToUse(recordForPersonalize)
        }
    }, [recordForPersonalize])


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Dialog fullScreen open={isOpen}
                classes={{ paper: classes.dialog }}
                // className={classes.dialogContainer}
                TransitionComponent={Transition}>

                <DialogTitle className={classes.dialogTitle}>

                </DialogTitle>

                <DialogContent className={classes.dialogContent}>
                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>

                        <Grid container className={classes.rootGridContainer}>
                            <Grid item xs={2} sm={2} md={2} className={classes.gridItemSideBar}>
                                <Box className={classes.uploadZoneWrapper}>
                                    <DropZoneUploadBar
                                        setUploadFiles={setUploadFiles}
                                        sizeContainer={{ width: "15vw" }}
                                        dragUrl={dragUrl}
                                    />
                                </Box>
                                <Box className={classes.customersPhotoToPrintWrapper}>
                                    <GridCustomersPhotoToPrint
                                        recordForCustomersPhotoToPrint={{ orderCode: recordToUse.orderCode, orderDetailCode: recordToUse.orderDetailCode }}
                                        sizeContainer={{ width: "15vw" }}
                                        dragUrl={dragUrl}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={10} sm={10} md={10} className={classes.gridItemMain}>
                                <MainPersonalize
                                    recordForMainPersonalize={recordToUse}
                                    dragUrl={dragUrl}
                                    stageRef={stageRef}
                                    handleCloseModal={handleCloseModal}
                                    setRecordRawProduct={setRecordRawProduct}
                                />
                            </Grid>
                        </Grid>



                    </form>


                </DialogContent>

            </Dialog >
        </>
    )
}



{/* <Grid item xs={2} sm={2} md={2} className={classes.gridItemUpload}>
        <DropZoneUploadBar setUploadFiles={setUploadFiles} sizeContainer={{ width: "15vw" }}
            dragUrl={dragUrl}
        />
    </Grid> */}