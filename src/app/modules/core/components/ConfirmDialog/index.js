/* eslint-disable react/prop-types */
import React from 'react'
import { Dialog, DialogTitle, DialogContentText, Button, DialogActions, DialogContent, makeStyles, Typography, Fade, Slide } from '@material-ui/core'
import { FiAlertTriangle } from 'react-icons/fi'
import { useLoadingEffect } from 'src/app/utils';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        // position: 'absolute',
        // top: theme.spacing(24),
        whiteSpace: "nowrap"
    },
    dialogTitle: {
        textAlign: "center"
    },
    dialogContent: {
        textAlign: "center"
    },
    dialogAction: {
        // justifyContent: "center"
    }

}))


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const ConfirmDialog = (props) => {
    const classes = useStyles();
    const { confirmDialog, setConfirmDialog } = props

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {/* <Loader loading={loading} /> */}

            <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }} TransitionComponent={Transition}>
                <DialogTitle className={classes.dialogTitle}>

                </DialogTitle>

                <DialogContent className={classes.dialogContent}>
                    <Typography variant="h6">
                        {confirmDialog.title}
                    </Typography>

                    <Typography variant="subtitle2">
                        {/* {confirmDialog.subTitle} */}
                    </Typography>

                </DialogContent>

                <DialogActions className={classes.dialogAction}>
                    <Button onClick={() => {
                        setConfirmDialog({
                            ...confirmDialog,
                            isOpen: false
                        })

                    }} className={classes.buttonCancel}>
                        Huỷ
                    </Button>

                    <Button onClick={() => {
                        confirmDialog.onConfirm()
                    }} className={classes.buttonOK}>
                        Đồng ý
                    </Button>

                </DialogActions>
            </Dialog>

        </>
    )
}
































// // const useStyles = makeStyles(theme => ({
// //     dialogContainer: {
// //         width: "100%",

// //         background: "transparent",
// //         '& .MuiPaper-root': {
// //             width: "25rem",
// //             height: "15rem"
// //             // background: "red"

// //         }
// //     },
// //     dialogTitle: {
// //         background: "#E05F5F",
// //         color: "#fff",
// //     },
// //     dialogContent: {


// //         '& .MuiTypography-root': {
// //             fontSize: "1.5rem",
// //             display: "flex",
// //             alignContent: 'center',
// //             justifyContent: "flex-start",
// //             // background: "blue",
// //             paddingTop: theme.spacing(3),
// //             paddingBottom: theme.spacing(3),
// //             // paddingLeft
// //         }

// //     },
// //     iconAlert: {
// //         marginRight: theme.spacing(4),
// //         marginLeft: theme.spacing(1),
// //         display: "flex",
// //         marginTop: "5px",
// //         transform: "scale(2)",
// //         color: "#E05F5F",

// //     }
// //     , buttonOK: {
// //         cursor: "pointer",
// //         color: "#fff",
// //         backgroundColor: "#E05F5F",
// //         '&:hover': {
// //             backgroundColor: "#E05F5F",
// //             // backgroundColor: "var(--secondary-color-main)",
// //             boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
// //             transform: "scale(1.015)",

// //         },
// //         '&:focus': {
// //             // outline: "1px dashed var(--primary-color-dark)",
// //             outlineOffset: "4px",
// //         }
// //     },
// //     buttonCancel: {
// //         cursor: "pointer",
// //         color: theme.palette.grey[500],
// //         // backgroundColor: "#E05F5F",
// //         border: "1px solid var(--border-secondary-color-main)",
// //         '&:hover': {
// //             border: "1px solid var(--border-secondary-color-main)",
// //             backgroundColor: "#fff",
// //             // backgroundColor: "var(--secondary-color-main)",
// //             boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
// //             transform: "scale(1.015)",

// //         },
// //         '&:focus': {
// //             outlineOffset: "4px",
// //         }
// //     }
// // }))

// // export const ConfirmDeleteDialog = (props) => {
// //     const classes = useStyles();
// //     return (
// //         <>
// //             <Dialog
// //                 open={props.openDialog}
// //                 onClose={props.handleCloseDialog()}
// //                 aria-labelledby="alert-dialog-title"
// //                 aria-describedby="alert-dialog-description"
// //                 className={classes.dialogContainer}
// //             >
// //                 <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>{"Xác nhận"}</DialogTitle>

// //                 <DialogContent className={classes.dialogContent}>

// //                     <DialogContentText id="alert-dialog-description" >
// //                         <span className={classes.iconAlert}><FiAlertTriangle /></span>  Bạn thật sự muốn xoá?
// //                     </DialogContentText>

// //                 </DialogContent>

// //                 <DialogActions>
// //                     <Button onClick={() => {
// //                         props.handleCloseDialog()
// //                         props.setIsConfirm(false)
// //                     }} color="primary" variant="outlined" className={classes.buttonCancel}>
// //                         Huỷ
// //                     </Button>
// //                     <Button onClick={() => {
// //                         props.handleCloseDialog()
// //                         props.setIsConfirm(true)
// //                         props.deleteAction()
// //                     }} color="error" autoFocus variant="contained" className={classes.buttonOK}>
// //                         Đồng ý
// //                     </Button>
// //                 </DialogActions>
// //             </Dialog>
// //         </>
// //     )
// // }
