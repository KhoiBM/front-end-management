/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Menu, MenuItem, makeStyles, Typography, ListItemIcon, ListItem, ListItemText, List, Divider, useTheme, Drawer, Zoom, Tooltip, MenuList } from '@material-ui/core'
import { RiAccountBoxLine, RiNotification2Line } from 'react-icons/ri';
import { MdSupervisorAccount, MdChevronLeft, MdChevronRight, MdMenu } from 'react-icons/md'
import clsx from 'clsx';

import config from '../../../../../environments/config'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthService } from 'src/app/services/AuthServices/AuthService';
import { AiOutlineProfile, AiOutlineLogout } from 'react-icons/ai';

const drawerWidth = config.useStyles.drawerWidth;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        // backgroundColor: theme.palette.common.white
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },

}));

const HeaderBar = (props) => {
    const history = useHistory();
    const classes = useStyles();

    const role = localStorage.getItem("role");
    const useRoleName = config.useRoleName;

    const [anchorElMenuAccount, setAnchorElMenuAccount] = useState(null);
    const [anchorElNotiAccount, setAnchorElNotiAccount] = useState(null);

    const openMenuAccount = Boolean(anchorElMenuAccount);
    const openNotiAccount = Boolean(anchorElNotiAccount);

    const handleMenuAccount = (event) => {
        setAnchorElMenuAccount(event.currentTarget);
    };

    const handleCloseMenuAccount = () => {
        setAnchorElMenuAccount(null);
    };


    const handleMenuNoti = (event) => {
        setAnchorElNotiAccount(event.currentTarget);
    };

    const handleCloseNotiAccount = (event) => {
        setAnchorElNotiAccount(null);
    };

    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.openDrawer
                })}
            >
                <Toolbar>


                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: props.openDrawer
                        })}
                    >
                        <MdMenu />
                    </IconButton>


                    <div style={{
                        position: "absolute",
                        right: "16px",
                        top: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >





                        <div>
                            {
                                role != useRoleName.administrator &&
                                <Tooltip TransitionComponent={Zoom} placement="left" title="Thông báo">
                                    <IconButton
                                        aria-label="noti"
                                        aria-controls="noti-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenuNoti}
                                        color="inherit"
                                    >
                                        <RiNotification2Line />
                                    </IconButton>
                                </Tooltip>

                            }
                            {/* <Menu
                                id="noti-appbar"
                                anchorEl={anchorElNotiAccount}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                open={openNotiAccount}
                                onClose={handleCloseNotiAccount}
                            >
                                <MenuList>
                                    <MenuItem onClick={() => {
                                        handleCloseNotiAccount();
                                    }}>

                                    </MenuItem>

                                    <MenuItem onClick={() => {
                                        handleCloseNotiAccount();
                                    }}>

                                    </MenuItem>
                                </MenuList>

                            </Menu> */}
                        </div>








                        <div>
                            <Tooltip TransitionComponent={Zoom} placement="left" title="Tài khoản">
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenuAccount}
                                    color="inherit"
                                >
                                    <RiAccountBoxLine />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElMenuAccount}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openMenuAccount}
                                onClose={handleCloseMenuAccount}
                            >

                                <MenuItem onClick={() => {
                                    handleCloseMenuAccount();
                                    history.push('/core/profile')
                                }}><span style={{ marginRight: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}><AiOutlineProfile /></span>
                            Hồ sơ của tôi
                            </MenuItem>

                                <MenuItem onClick={() => {
                                    handleCloseMenuAccount();
                                    AuthService.signOut()
                                    toast.success("Đăng xuất thành công")
                                    history.push('/auth/signin')
                                }}>
                                    <span style={{ marginRight: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}><AiOutlineLogout />
                                    </span>Đăng xuất
                            </MenuItem>
                            </Menu>
                        </div>





                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default HeaderBar



