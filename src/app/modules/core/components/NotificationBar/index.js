import React, { useState, useEffect } from 'react'
import config from 'src/environments/config';
import { Tooltip, Zoom, IconButton, Badge, makeStyles } from '@material-ui/core';
import { RiNotification2Line } from 'react-icons/ri';
import { NotificationServices } from 'src/app/services';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({

    icon: {
        // filter: "invert(100%)",
    },
    badgeNoti: {
        // textColor: "#fff"
    }
}));


export const NotificationBar = () => {
    const classes = useStyles();

    const [refresh, setRefresh] = useState(false)

    const [countNoti, setCountNoti] = useState(0)

    const role = localStorage.getItem("role");
    const useRoleName = config;

    const [anchorElMenuNoti, setAnchorElMenuNoti] = useState(null);

    const openMenuNoti = Boolean(anchorElMenuNoti);


    // const intervalID = setInterval(() => {
    //     // setRefresh(!refresh)
    //     loadInit()
    // }, 1000)



    // const intervalID = setInterval(() => {
    //     // setRefresh(!refresh)
    //     // console.log("setInterval")
    //     // setCountNoti((prev) => prev + 1)
    //     // loadInit()
    // }, 4000)

    useEffect(() => {

        loadInit()

        return () => {
            // clearInterval(intervalID);
        }
    }, [])

    useEffect(() => {
        loadInit()
    }, [refresh])


    const loadInit = async () => {
        console.log("loadInit")
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
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`,)
        }

    }






    const handleMenuNoti = (event) => {
        setAnchorElMenuNoti(event.currentTarget);
    };

    const handleCloseMenuNoti = (event) => {
        setAnchorElMenuNoti(null);
    };



    return (
        <>
            <div>
                {
                    role != useRoleName.administrator &&
                    <Tooltip TransitionComponent={Zoom} placement="left" title="Thông báo">

                        <IconButton
                            onClick={handleMenuNoti}
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

                }
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
            </div >


        </>
    )
}
