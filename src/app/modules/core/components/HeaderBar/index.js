/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Menu, MenuItem, makeStyles, Zoom, Tooltip } from '@material-ui/core'
import { RiAccountBoxLine } from 'react-icons/ri';
import { MdMenu } from 'react-icons/md'
import clsx from 'clsx';


import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthService } from 'src/app/services/AuthServices/AuthService';
import { AiOutlineProfile, AiOutlineLogout } from 'react-icons/ai';

import brandLogo from 'src/app/assets/image/brand.svg';
import config from 'src/environments/config';
import { NotificationBar } from '../NotificationBar';

const drawerWidth = config.useStyles.drawerWidth;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        // backgroundColor: theme.palette.common.white
        backgroundColor: "var(--secondary-color-main)"

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
    logoContainer: {
        width: "800px",
        margin: "0 auto",
        transition: "all 50s ease 0s"

    },
    logoWrapper: {


        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid var(--color-black)",
        transition: "all 50s ease 0s"
    }
    ,
    brandLogo: {
        width: "25px",
        height: "auto",
        filter: "invert(100%)",
    },
    menuAccount: {
        // background: "red",
        position: "relative",
        "& .MuiMenu-paper": {
            // background: "blue",
            position: "absolute !important",
            top: "70px !important"
        }
    }
}));

export const HeaderBar = (props) => {
    const history = useHistory();
    const classes = useStyles();



    const [anchorElMenuAccount, setAnchorElMenuAccount] = useState(null);


    const openMenuAccount = Boolean(anchorElMenuAccount);


    const handleMenuAccount = (event) => {
        setAnchorElMenuAccount(event.currentTarget);
    };

    const handleCloseMenuAccount = () => {
        setAnchorElMenuAccount(null);
    };


    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.openDrawer
                })}
            // color="primary"
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
                    <div className={classes.logoContainer}>
                        <div className={classes.logoWrapper}>
                            <img src={brandLogo} className={classes.brandLogo} alt="logo of brand" />
                        </div >
                    </div>


                    <div style={{
                        position: "absolute",
                        right: "16px",
                        top: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >







                        <NotificationBar />




                        <div>
                            <Tooltip TransitionComponent={Zoom} placement="left" title="Tài khoản">
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenuAccount}
                                    color="inherit"
                                >
                                    <RiAccountBoxLine className={classes.icon} />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElMenuAccount}
                                // anchorOrigin={{
                                //     vertical: 'bottom',
                                //     horizontal: 'right',
                                // }}
                                keepMounted
                                open={openMenuAccount}
                                onClose={handleCloseMenuAccount}
                                className={classes.menuAccount}
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





                    </div >
                </Toolbar >
            </AppBar >
        </>
    )
}





