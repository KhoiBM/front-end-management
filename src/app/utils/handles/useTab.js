/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles, Box, AppBar, Tabs, Tab } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    tablePanel: {
        width: "100%",
        // backgroundColor: "red",
    },
    TabContainer: {
        background: "#fff"
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
                id={`tabpanel-${index}`}
                {...other}
                className={classes.tablePanel}
            >
                {value === index && (
                    <Box p={3}>
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
            <AppBar position="static" className={classes.TabContainer} >
                <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" variant="fullWidth">
                    {
                        props.tabArr && props.tabArr.map((val, index) => {
                            // console.log(val)
                            return (<Tab label={val} {...a11yProps(index)} key={index} />)
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