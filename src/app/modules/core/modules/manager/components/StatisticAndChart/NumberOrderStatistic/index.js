
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Paper, makeStyles, Typography, AppBar, Tabs, Tab, Box } from '@material-ui/core'
import Chart from "react-apexcharts";
import { useTab } from 'src/app/utils';

const useStyles = makeStyles(theme => ({
    rootChart: {
        // border: "1px solid red",
        width: "100%",
        transition: "transition: all 0.3s ease 0s;"
    },
    chart: {
        width: "100%"
    },
    chartContainer: {
        // display: "flex",
        // justifyContent: "center",
        // gap: theme.spacing(7)
        // border: "1px solid red",
        width: "38rem"
    },
    titleChart: {
        // border: "1px solid black",
        paddingLeft: theme.spacing(2),
        fontSize: theme.typography.fontSize,
        fontWeight: 100,
        background: "#B6E2F3",
        color: "#fff"
    },
    rootTab: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        // backgroundColor: "red",
        width: "100%",

    },
    tablePanel: {
        width: "100%",
        // backgroundColor: "red",
    },
    TabContainer: {
        background: "#fff"
    }
}))

// function a11yProps(index) {
//     return {
//         id: `tab-${index}`
//     };
// }

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//     const classes = useStyles();

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`tabpanel-${index}`}
//             {...other}
//             className={classes.tablePanel}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     {children}
//                 </Box>
//             )}
//         </div>
//     );
// }

const NumberOrderStatistic = () => {
    const classes = useStyles();

    // const [value, setValue] = useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    const { TabPanel, TabBar, value, handleChange } = useTab()

    const [series, setSeries] = useState(
        [
            {
                data: [21, 22, 10, 28, 16, 21, 13, 30]
            }
        ]
    )
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    }
    )


    return (
        <>
            <div className={classes.chartContainer}>
                <div className={classes.rootTab}>
                    {/* <AppBar position="static" className={classes.TabContainer}>
                        <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" variant="fullWidth">
                            <Tab label="Tuần" {...a11yProps(0)} />
                            <Tab label="Tháng" {...a11yProps(1)} />
                            <Tab label="Năm" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar> */}
                    <TabBar tabArr={["Tuần", "Tháng", "Năm"]} />
                    <TabPanel value={value} index={0}>
                        <Paper className={classes.rootChart}>
                            <Typography variant={"subtitle1"} className={classes.titleChart} color="textSecondary">Tuần</Typography>
                            <Chart
                                options={options}
                                series={series}
                                type="bar"
                                height={250}
                                className={classes.chart}
                            />
                        </Paper>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Paper className={classes.rootChart}>
                            <Typography variant={"subtitle1"} className={classes.titleChart}>Tháng</Typography>
                            <Chart
                                options={options}
                                series={series}
                                type="bar"
                                height={250}
                                className={classes.chart}
                            />
                        </Paper>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Paper className={classes.rootChart}>
                            <Typography variant={"subtitle1"} className={classes.titleChart}>Năm</Typography>
                            <Chart
                                options={options}
                                series={series}
                                type="bar"
                                height={250}
                                className={classes.chart}
                            />
                        </Paper>
                    </TabPanel>
                </div>
            </div>


        </>
    )
}

export { NumberOrderStatistic } 
