/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { NavLink, useRouteMatch } from "react-router-dom"
import { ListItem, ListItemIcon, ListItemText, Typography, makeStyles, Tooltip, Zoom } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
    activeNavLink: {
        fontWeight: "bold",
        fontSize: "5rem !important",
        color: "#000 !important",
    },
    linkItemText: {
        whiteSpace: "wrap",
        height: "50px",
        // border: "1px solid red",
        display: "flex !important",
        alignItems: "center",
        flexWrap: "wrap"

    }
}))
export const NavLinkMenu = ({ text, icon, link, openDrawer }) => {
    const classes = useStyles();
    const { path } = useRouteMatch();
    const pathSplit = path.split("/");
    const corePath = `${pathSplit[0]}/${pathSplit[1]}/${pathSplit[2]}/${link}`
    // const linkName = path.split("/")[3]
    // const match = linkName == link ? true : false;
    const match = path == corePath ? true : false;
    // console.log("NavLinkMenu:" + path)
    // console.log("linkName:" + linkName)
    // console.log("pathSplit:" + pathSplit)
    // console.log("corePath:" + corePath)
    // console.log("match:" + match)
    return (
        <>
            <NavLink to={
                {
                    pathname: `${link}`,
                    search: "",
                    state: { openDrawer: openDrawer }
                }

            } style={{ textDecoration: "none", color: "#fff" }} activeClassName={classes.activeNavLink}>

                <ListItem button >

                    <Tooltip TransitionComponent={Zoom} placement="top" title={text}>
                        <ListItemIcon style={{
                            color: `${match ? "#000" : "#fff"}`, fontSize: "2rem"
                        }}>

                            {icon}
                        </ListItemIcon>
                    </Tooltip>

                    <ListItemText>
                        <Typography variant={"subtitle2"} className={classes.linkItemText}>{text}</Typography>
                    </ListItemText>

                </ListItem>

            </NavLink >

        </>
    )
}
//