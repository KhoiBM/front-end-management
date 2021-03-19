/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuthAction } from 'src/app/stores/actions'
import config from 'src/environments/config'
import { AppBar, Toolbar, IconButton, Menu, MenuItem, makeStyles, Typography, ListItemIcon, ListItem, ListItemText, List, Divider, useTheme, Drawer, Hidden } from '@material-ui/core'
import { RiAccountBoxLine } from 'react-icons/ri';
import { MdSupervisorAccount, MdChevronLeft, MdChevronRight, MdMenu } from 'react-icons/md'
import bgAuth from "src/app/assets/image/bg_auth.jpeg"
import { HeaderBar } from '../HeaderBar'
import { SideMenuBar } from '../SideMenuBar'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: 'auto',
        // flexShrink: 0,
        // border: "1px solid red",

    },
    bg: {
        backgroundImage: `url(${bgAuth})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // background: "red"
        // overflowY: "hidden"
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        overflow: "hidden"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        // backgroundColor: "red",
        minHeight: theme.spacing(105),
        color: "#fff",
        overflow: "hidden"
    }
}));

export const MainBar = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };
    useEffect(() => {
        document.body.classList.add(classes.bg)
        // if (props?.openDrawerByLink != null && props?.openDrawerByLink != undefined) {
        //     console.log("open drawer not null not undefied")
        //     console.log("props?.openDrawerByLink: " + props?.openDrawerByLink)
        setOpenDrawer(props.openDrawerByLink)
        // } else {
        //     console.log("open drawer null or undefied")
        // }

    }, [])
    return (
        <>
            <div className={classes.root}>

                <HeaderBar openDrawer={openDrawer} handleDrawerOpen={handleDrawerOpen} />

                <SideMenuBar openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} userRole={props.userRole} />

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {props.children}
                </main>
            </div>
        </>
    )
}



