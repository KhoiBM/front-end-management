import React, { useState, useEffect } from 'react'
import config from 'src/environments/config';
import { Tooltip, Zoom, IconButton, Badge, makeStyles, Popover, Typography, Card, Paper, Box } from '@material-ui/core';
import { RiNotification2Line } from 'react-icons/ri';
import { NotificationServices } from 'src/app/services';
import { toast } from 'react-toastify';
import differenceInMinutes from 'date-fns/differenceInMinutes'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import { differenceInDays, parseISO } from 'date-fns';
import differenceInHours from 'date-fns/differenceInHours'
import { NotificationDialog } from '../NotificationDialog';
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
        // background: "red",
        "& .MuiPaper-root": {
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
    }
}));


export const NotificationBar = () => {
    const classes = useStyles();

    const [refresh, setRefresh] = useState(false)

    const [countNoti, setCountNoti] = useState(0)

    const role = localStorage.getItem("role");

    const useRoleName = config.useRoleName;

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
        // console.log("loadNotiInit")

    }, [])

    useEffect(() => {
        loadInit()
        // console.log("loadNotiInitRefresh")
    }, [refresh])

    const loadInit = async () => {
        loadData()
        loadCountNoti()


    }

    const loadCountNoti = async () => {

        try {
            const response = await (await NotificationServices.countNotificationIsToRead()).data

            // console.log("response: " + response)

            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    // console.log("countNoti: " + JSON.stringify(response.info.count))
                    const countNoti = response.info.count
                    setCountNoti(countNoti ? countNoti : 0)

                    // toast.success("Thành công")
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

    }

    const loadData = async () => {

        try {
            const response = await (await NotificationServices.viewNotification()).data

            // console.log("response: " + response)

            if (response && response != null) {

                if (response.result == config.useResultStatus.SUCCESS) {

                    // console.log("records: " + JSON.stringify(response.info.records))

                    const records = response.info.records

                    setRecordsNoti(records && records != null && records.length > 0 ? records : [])

                } else {
                    toast.error(config.useMessage.resultFailure)
                }

            } else {

                throw new Error("Response is null or undefined")

            }

        } catch (err) {

            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)

        }

    }

    // console.log("isView:" + notificationDialog.isView)
    const onIsView = async (isView) => {
        setNotificationDialog({ ...notificationDialog, isOpen: false, isView: true })

        // console.log("passisView" + isView)
        try {
            const response = await (await NotificationServices.isView(isView)).data

            // console.log("response: " + response)

            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    // toast.success("Thành công")
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

    }

    return (
        <>
            <div>
                {
                    role != useRoleName.administrator && role != useRoleName.manager &&
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
                                recordsNoti && recordsNoti != null && recordsNoti.length > 0 && recordsNoti.map((noti, index) => {

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
                                                        isView: noti.isView,
                                                        // createdAt: "22-03-2021 17:13:00",
                                                        createdAt: noti.createdAt,
                                                        onIsView: (isView) => { onIsView(isView) }
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
                            }

                        </Popover>

                    </>

                }

                <NotificationDialog notificationDialog={notificationDialog} setNotificationDialog={setNotificationDialog} />

            </div >

        </>
    )
}



// const intervalID = setInterval(() => {

//     // console.log("setInterval")

//     // loadInit()
//     setRefresh(!refresh)
// }, 1000)

// return () => clearInterval(intervalID);
{/* <Menu
                                id="noti-appbar"
                                anchorEl={anchorElMenuNoti}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                open={openMenuNoti}
                                onClose={handleCloseMenuNoti}
                            >
                                <MenuList>
                                    <MenuItem onClick={() => {
                                        handleCloseMenuNoti();
                                    }}>

                                    </MenuItem>

                                    <MenuItem onClick={() => {
                                        handleCloseMenuNoti();
                                    }}>

                                    </MenuItem>
                                </MenuList>

                            </Menu> */}



// const handleMenuNoti = (event) => {
//     setAnchorElMenuNoti(event.currentTarget);
// };
// const handleCloseMenuNoti = (event) => {
//     setAnchorElMenuNoti(null);
// };
// const [anchorElMenuNoti, setAnchorElMenuNoti] = useState(null);
// const openMenuNoti = Boolean(anchorElMenuNoti);