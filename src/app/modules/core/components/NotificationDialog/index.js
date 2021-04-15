/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import { Paper, makeStyles, Dialog, DialogTitle, DialogContent, Typography, DialogActions, Slide, Button, Link } from '@material-ui/core'
import format from 'date-fns/format'
import parse from 'date-fns/parse'

const useStyles = makeStyles((theme) => ({
    dialog: {
        width: "30rem",
        height: "40rem",
        padding: theme.spacing(2),
        whiteSpace: "nowrap",
        position: 'absolute',
        // top: theme.spacing(24),
    },
    dialogTitle: {
        textAlign: "center"
    },
    dialogContent: {
        whiteSpace: "normal"
    },
    dialogAction: {
        // justifyContent: "center"
    }
}))



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const NotificationDialog = (props) => {
    const classes = useStyles();

    const { notificationDialog, setNotificationDialog } = props

    // console.log(parse(notificationDialog.createdAt, "dd-MM-yyyy HH:mm:ss", new Date()))

    // console.log(format(notificationDialog.createdAt, "dd-MM-yyyy HH:mm:ss"))

    // console.log("noticreated: " + notificationDialog.createdAt)

    return (
        <>
            {notificationDialog &&
                <Dialog open={notificationDialog.isOpen} classes={{ paper: classes.dialog }} TransitionComponent={Transition} onClose={() => {

                    notificationDialog.onIsView(true)
                }}>
                    <DialogTitle className={classes.dialogTitle}>
                        {notificationDialog.title}
                    </DialogTitle>

                    <DialogContent className={classes.dialogContent}>


                        <Typography variant={"caption"} color="textSecondary">Loại thông báo: {notificationDialog.type}</Typography>
                        <br />
                        <Typography variant={"caption"} color="textSecondary">Ngày tạo: {notificationDialog.createdAt}</Typography>
                        <br />
                        <Typography variant={"caption"} color="textSecondary">
                            Trạng thái: {`${notificationDialog.isView ? 'đã đọc' : 'chưa đọc'}`}
                        </Typography>
                        <br />
                        <br />
                        <Typography variant={"subtitle1"} color="textPrimary"> Nội dung:</Typography>
                        <Typography className={classes.contentNoti}>
                            {notificationDialog.content}
                        </Typography>
                        <br />

                        {
                            notificationDialog.actionLink && <Typography>
                                Vui lòng truy cập: <Link href={notificationDialog.actionLinK}>{notificationDialog.actionLink} </Link>
                            </Typography>
                        }

                    </DialogContent>

                    <DialogActions className={classes.dialogAction}>
                        <Button onClick={() => {
                            notificationDialog.onIsView(true)
                        }} className={classes.buttonCancel} variant="text">
                            Đóng
                    </Button>
                    </DialogActions>
                </Dialog>
            }

        </>
    )
}
