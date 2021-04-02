/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { SideMenuBarContainer } from './SideMenuBarElements'
import { Drawer, IconButton, Divider, List, makeStyles, useTheme, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { MdChevronRight, MdChevronLeft, MdSupervisorAccount } from 'react-icons/md'
import config from 'src/environments/config'
import clsx from 'clsx';
import { Link, NavLink, useRouteMatch } from 'react-router-dom'
import { NavLinkMenu } from '../NavLinkMenu'
const drawerWidth = config.useStyles.drawerWidth;

const useStyles = makeStyles((theme) => ({

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        overflowX: "hidden",

        border: "0px solid var()",
        overflowY: "scroll"

    },
    drawerOpen: {
        width: props => props.drawerWidth ? props.drawerWidth : drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),

        background: "var(--primary-color-main) !important",
        overflowX: "hidden",
        border: "0px solid ",
        overflowY: "scroll"
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        },
        background: "var(--primary-color-main)  !important",
        overflowX: "hidden",
        border: "0px solid ",
        overflowY: "scroll"
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        background: "var(--tertiary-color-main) !important",
        // background: "#fff",
        border: "0px solid "

    }
}));

export const SideMenuBar = (props) => {
    const { drawerWidth } = props

    // const []

    const classes = useStyles({ drawerWidth: drawerWidth });
    const theme = useTheme();

    // const { path } = useRouteMatch();
    // console.log(path)
    // console.log("props.opendrawer: " + props.openDrawer)
    useEffect(() => {
        if (drawerWidth && drawerWidth != null) {
            console.log("drawerWidth: " + drawerWidth)
        }
    }, [drawerWidth])

    return (
        <>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.openDrawer,
                    [classes.drawerClose]: !props.openDrawer
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.openDrawer,
                        [classes.drawerClose]: !props.openDrawer
                    })
                }}
                style={{ background: "red" }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <MdChevronRight />
                        ) : (
                                <MdChevronLeft />
                            )}
                    </IconButton>
                </div>

                {/* <Divider /> */}

                <List>
                    {props.userRole.map(({ text, icon, link }, index) => (

                        <NavLinkMenu text={text} icon={icon} link={link} key={text} openDrawer={props.openDrawer} />
                    ))}
                </List>
            </Drawer >
        </>
    )
}



