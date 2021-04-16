/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles, Box, AppBar, Tabs, Tab } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    tablePanel: {
        // width: "100%",
        width: "100%",
        // backgroundColor: "red",
        minHeight: "600px",
        height: "auto",
        boxShadow: "none",
        padding: "0"

    },
    TabContainer: {
        background: "#fff",
        // backgroundColor: "red",
        // borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
    },
    boxContentTabPanel: {
        padding: theme.spacing(3),

    }
}))
export const useTab = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        // console.log(newValue)
    };
    function a11yProps(index) {
        return {
            id: `tab-${index}`
        };
    }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        const classes = useStyles();

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                // id={`tabpanel-${index}`}
                // {...other}
                className={classes.tablePanel}
            >
                {value === index && (
                    <Box className={classes.boxContentTabPanel} >
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    const TabBar = (props) => {
        const classes = useStyles()

        // props.tabArr.forEach((val, index) => {

        //     // console.log("val:" + val)
        //     // console.log("index:" + index)
        // })

        return (
            <AppBar position="static" className={classes.TabContainer} elevation={0} >
                <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" variant="fullWidth">
                    {
                        props.tabArr && props.tabArr.map((val, index) => {
                            // console.log(val)
                            return (<Tab label={val.label} {...a11yProps(index)} key={index} onClick={val.onClick} />)
                            // return (<p>test</p>)
                        })
                    }

                </Tabs>
            </AppBar>
        )
    }
    return { TabPanel, TabBar, value, handleChange }
}


{/* <Tab label={props.label[1]}  {...a11yProps(1)} />
                    <Tab label={props.label[2]}  {...a11yProps(2)} /> */}