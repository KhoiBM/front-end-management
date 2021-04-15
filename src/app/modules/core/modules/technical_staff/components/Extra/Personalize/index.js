/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { PageHeader, DropZoneUploadBar } from 'src/app/modules/core/components'
import { IconClose } from 'src/app/components'
import { DialogContent, DialogTitle, Dialog, Slide, makeStyles, Grid, Button } from '@material-ui/core'
import { useUploadPhoto } from 'src/app/utils'
import { RiCloseFill } from 'react-icons/ri'
import MainPersonalize from 'src/app/modules/core/components/PersonalizeComponents/MainPersonalize'
import useImage from 'use-image'
import { Image, Stage, Layer } from 'react-konva'

const useStyles = makeStyles(theme => ({
    iconCloseWrapper: {
        position: "absolute",
        right: theme.spacing(3),
        top: theme.spacing(0.6),
    },
    iconClose: {
        color: "var(--primary-color-main)",
        // color: "var(--secondary-color-main)",
        transform: "scale(2)",
        transition: " all 0.3s ease 0s",
        '&:hover': {
            color: "var(--primary-color-dark)",
            // color: "var(--secondary-color-main)",
        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
            // transform: "scale(5)",
        }
    },
    dialog: {
        whiteSpace: "nowrap",
        overflow: "hidden !important"
    },
    dialogTitle: {
        height: "20px",
        // background: "red",
        display: "flex",
        alignItems: "center",
        position: "relative"
    },
    dialogContent: {
        background: "#fff",
        overflow: "hidden !important",
        width: "100%",
        height: "auto",
    },
    dialogAction: {

    },
    rootForm: {
        width: "100%",
        height: "auto",
        // background: "red",
        // border: "1px solid red"
    },
    rootGridContainer: {
        width: "100%",
        height: "auto",
        // background: "blue",
        // border: "1px solid blue"
        minHeight: "95vh",
        overflow: "scroll !important",
    },
    gridItemUpload: {
        width: "100%",
        height: "auto",
        // background: "orange",
        display: "flex",
        justifyContent: "center",
        border: "1px solid rgb(0,0,0,0.23)",
        overflow: "scroll !important",
        paddingTop: theme.spacing(2)
    },
    gridItemMain: {
        width: "100%",
        height: "auto",
        borderTop: "1px solid rgb(0,0,0,0.23)",
        borderRight: "1px solid rgb(0,0,0,0.23)",
        borderBottom: "1px solid rgb(0,0,0,0.23)",
        // background: "red",
        overflow: "hidden !important",
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const Personalize = (props) => {

    const classes = useStyles();

    const { personalizeModal, setPersonalizeModal } = props

    const { isOpen, recordForPersonalize, handleCloseModal } = personalizeModal

    const [uploadFiles, setUploadFiles] = useState([])

    const { uploadPhoto } = useUploadPhoto()

    const dragUrl = useRef();

    const stageRef = useRef();

    useEffect(() => {
        // console.log("recordForPersonalize: " + JSON.stringify(recordForPersonalize))
    }, [recordForPersonalize])

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Dialog fullScreen open={isOpen} classes={{ paper: `${classes.dialog}` }} TransitionComponent={Transition}>

                <DialogTitle className={classes.dialogTitle}>
                    <div className={classes.iconCloseWrapper}>
                        <div className={classes.iconClose} onClick={handleCloseModal}>
                            <RiCloseFill />
                        </div>
                    </div>
                    <PageHeader>
                        Cá nhân hoá
                    </PageHeader>
                </DialogTitle>

                <DialogContent className={classes.dialogContent}>

                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                        <Grid container className={classes.rootGridContainer}>
                            <Grid item xs={2} sm={2} md={2} className={classes.gridItemUpload}>
                                <DropZoneUploadBar setUploadFiles={setUploadFiles} sizeContainer={{ width: "15vw" }}
                                    dragUrl={dragUrl}
                                />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} className={classes.gridItemMain}>
                                <MainPersonalize
                                    recordForMainPersonalize={recordForPersonalize}
                                    dragUrl={dragUrl}
                                    stageRef={stageRef}
                                />
                            </Grid>
                        </Grid>



                    </form>

                </DialogContent>

            </Dialog >
        </>
    )
}

{/* <div className={classes.buttonWrapper}>
                            <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>Tải ảnh xuống</Button>
                        </div> */}