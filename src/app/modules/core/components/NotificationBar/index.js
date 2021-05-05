import React, { useState, useEffect } from 'react'
import config from 'src/environments/config';
import { Tooltip, Zoom, IconButton, Badge, makeStyles, Popover, Typography, Card, Paper, Box } from '@material-ui/core';
import { RiNotification2Line, RiNotificationOffLine } from 'react-icons/ri';
import { NotificationServices } from 'src/app/services';
import { toast } from 'react-toastify';
import differenceInMinutes from 'date-fns/differenceInMinutes'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import { differenceInDays, parseISO } from 'date-fns';
import differenceInHours from 'date-fns/differenceInHours'
import { NotificationDialog } from '../NotificationDialog';
import { useRefresh } from 'src/app/utils';
const useStyles = makeStyles((theme) => ({

    icon: {
        // filter: "invert(100%)",
    },
    badgeNoti: {
        // textColor: "#fff"
    },
    rootCard: {
        width: "35rem",
        height: "100px !important",
        background: "#fff",
        border: "1px solid var(--border-color-main)",
        position: "relative",
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center"



    },
    popoverContainer: {
        position: "relative",
        zIndex: "1101 !important",
        // background: "red",

        "& .MuiPaper-root": {
            minWidth: theme.spacing(70),
            height: theme.spacing(70),
            minHeight: "theme.spacing(70)!important",
        }
    },
    contentNoti: {

        width: "33rem",
        // background: "red",
        whiteSpace: "nowrap",
        overflow: "hidden !important",
        textOverflow: "ellipsis !important",
    },
    notiWrapper: {
        // background: "red",
    },
    contentTitle: {
        marginBottom: theme.spacing(1),
        width: "20rem",
        height: "30px",
        // background: "yellow",
        whiteSpace: "nowrap",
        overflow: "hidden !important",
        textOverflow: "ellipsis !important",
    },
    dateAgo: {
        width: "10rem",
        height: "30px",
        // background: "blue",
        overflow: "hidden !important",
        textOverflow: "ellipsis !important",
        textAlign: "right"
    },
    titleWrapper: {
        display: "flex",
        justifyContent: "space-between",
        // background: "red",
        width: "33rem",
        height: "30px",
        marginBottom: theme.spacing(2)
    },
    emptyNotificationContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    emptyNotificationWrapper: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(5)

    }
}));


export const NotificationBar = () => {
    const classes = useStyles();

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [countNoti, setCountNoti] = useState(0)

    const [recordsNoti, setRecordsNoti] = useState([])

    const [anchorElPopover, setAnchorElPopover] = useState(null);

    const handleClickPopover = (event) => {
        setAnchorElPopover(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorElPopover(null);
    };

    const openPopover = Boolean(anchorElPopover);



    const [notificationDialog, setNotificationDialog] = useState({
        isOpen: false,
        title: "",
        content: "",
        actionLink: "",
        type: "",
        isView: false,
        createdAt: ""
    })


    useEffect(() => {
        loadInit()
    }, [refresh])

    const loadInit = async () => {
        await loadData()
    }

    const loadData = async () => {

        try {

            const response = await (await NotificationServices.viewNotification()).data

            if (response && response != null) {

                if (response.result == config.useResultStatus.SUCCESS) {

                    const records = response.info.records

                    // console.log("countNoti: " + JSON.stringify(response.info.count))
                    const countNoti = response.info.count
                    setCountNoti(countNoti ? countNoti : 0)

                    setRecordsNoti(records && records != null && records.length > 0 ? records.map((notiRecord) => {
                        const parseCreatedAt = parse(notiRecord.createdAt.split('.')[0], 'yyyy-MM-dd HH:mm:ss', new Date())

                        console.log("parseCreatedAt: " + parseCreatedAt)

                        const formatCreatedAt = format(parseCreatedAt, "dd-MM-yyyy HH:mm:ss")

                        console.log("formatCreatedAt: " + formatCreatedAt)

                        return {
                            ...notiRecord,
                            createdAt: formatCreatedAt
                        }

                    }
                    ) : [])

                } else {
                    // toast.error(config.useMessage.resultFailure)
                }

            } else {

                throw new Error("Response is null or undefined")

            }

        } catch (err) {

            // toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)

        }

    }

    const onIsView = async (notificationID, isView) => {

        setNotificationDialog({ ...notificationDialog, isOpen: false, isView: true })
        try {
            const data = { notificationID, view: isView }

            console.log(data)

            const response = await (await NotificationServices.isView(data)).data
        } catch (err) {
            // toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
        handleRefresh()

    }

    return (
        <>
            <div>
                {

                    <>
                        <Tooltip TransitionComponent={Zoom} placement="left" title="Thông báo">
                            <IconButton
                                onClick={handleClickPopover}
                                color="inherit"
                            >
                                <Badge
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    badgeContent={countNoti}
                                    className={classes.badgeNoti}
                                    color="error">

                                    <RiNotification2Line className={classes.icon} />

                                </Badge>
                            </IconButton>
                        </Tooltip>

                        <Popover
                            id="notificationList"
                            open={openPopover}
                            anchorEl={anchorElPopover}
                            onClose={handleClosePopover}
                            className={classes.popoverContainer}
                            elevation={8}
                            anchorPosition={{ top: 70, left: 1400 }}
                            anchorReference='anchorPosition'
                        >{
                                recordsNoti && recordsNoti != null && recordsNoti.length > 0 ?
                                    recordsNoti.map((noti, index) => {

                                        // console.log("diff: " + differenceInMinutes(new Date(), noti.createdAt))
                                        // console.log(noti.createdAt)
                                        // console.log(parse("22-03-2021 16:40:00", "dd-MM-yyyy HH:mm:ss", new Date()))

                                        // console.log(parse(noti.createdAt, "dd-MM-yyyy HH:mm:ss", new Date()))
                                        // console.log(format(parse(noti.createdAt, "dd-MM-yyyy HH:mm:ss", new Date())))

                                        // console.log(format(noti.createdAt, "dd-MM-yyyy HH:mm:ss"))

                                        const diffMinutes = differenceInMinutes(new Date(), parse(noti.createdAt, "dd-MM-yyyy HH:mm:ss", new Date()))
                                        const diffHours = differenceInHours(new Date(), parse(noti.createdAt, "dd-MM-yyyy HH:mm:ss", new Date()))
                                        const diffDays = differenceInDays(new Date(), parse(noti.createdAt, "dd-MM-yyyy HH:mm:ss", new Date()))

                                        return (

                                            <Paper className={classes.rootCard} key={index} elevation={0}

                                                onClick={(event) => {

                                                    event.stopPropagation();

                                                    setNotificationDialog((prev) => (
                                                        {
                                                            isOpen: true,
                                                            title: noti.title,
                                                            content: noti.content,
                                                            actionLink: noti.actionLink,
                                                            type: noti.type,
                                                            isView: noti.view,
                                                            createdAt: noti.createdAt,
                                                            onIsView: (isView) => { onIsView(noti.notificationID, isView) }
                                                        }
                                                    )
                                                    )

                                                }}

                                            >
                                                <Box className={classes.notiWrapper}>
                                                    <Box className={classes.titleWrapper}>
                                                        <Typography variant={"h6"} className={classes.contentTitle}>{noti.title}</Typography>
                                                        <Typography className={classes.dateAgo} color={"textSecondary"}>
                                                            {
                                                                `${diffMinutes <= 60
                                                                    ? diffMinutes + " phút"
                                                                    : diffHours <= 24
                                                                        ? diffHours + " giờ"
                                                                        : diffDays + " ngày"}  cách đây
                                                                    `
                                                            }
                                                        </Typography>

                                                    </Box>

                                                    <Typography className={classes.contentNoti} variant={"body2"} >
                                                        {noti.content}
                                                    </Typography>
                                                </Box>
                                            </Paper>

                                        )
                                    }
                                    )
                                    :
                                    <>
                                        <Box className={classes.emptyNotificationContainer}>
                                            <Box className={classes.emptyNotificationWrapper}>
                                                <RiNotificationOffLine style={{ fontSize: "200px", color: "var(--primary-color-main)" }} />
                                                <Typography
                                                    variant={"subtitle1"}
                                                    color={"textSecondary"}
                                                >
                                                    Không có thông báo
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </>
                            }

                        </Popover>

                    </>

                }

                <NotificationDialog notificationDialog={notificationDialog} setNotificationDialog={setNotificationDialog} />

            </div >

        </>
    )
}



