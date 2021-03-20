/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Paper, makeStyles, Typography, AppBar, Tabs, Tab, Box, Card } from '@material-ui/core'
import Chart from "react-apexcharts";

import { useTab } from 'src/app/utils'

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
        width: "38rem",
        marginTop: theme.spacing(5)
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

    revenuePerServiceContainer: {
        minWidth: 275,

        // background: "blue",
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2)
    },
    titileRevenuePerServiceContainer: {
        width: "100%",
        height: "50px",
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}))


const ChartRevenuePerService = () => {
    const classes = useStyles();


    const { TabPanel, TabBar, value, handleChange } = useTab()
    const [series, setSeries] = useState(
        [
            {
                data: [21, 22, 10, 28, 16, 21, 13]
            }
        ]
    )
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"]
        }
    }
    )


    return (
        <>
            <div className={classes.chartContainer}>


                <div className={classes.revenuePerServiceContainer}>
                    <Card className={classes.titileRevenuePerServiceContainer}>
                        <Box className={classes.titileRevenuePerServiceWrapper} >
                            <Typography variant="h6">
                                Doanh thu trên dịch vụ
                            </Typography>

                        </Box>
                    </Card>
                </div>

                <div className={classes.rootTab}>
                    <TabBar tabArr={["Tuần", "Tháng", "Năm"]} />
                    <TabPanel value={value} index={0}>
                        <Paper className={classes.rootChart}>
                            {/* <Typography variant={"subtitle1"} className={classes.titleChart} color="textSecondary">Tuần</Typography> */}
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
                            {/* <Typography variant={"subtitle1"} className={classes.titleChart}>Tháng</Typography> */}
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
                            {/* <Typography variant={"subtitle1"} className={classes.titleChart}>Năm</Typography> */}
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

export { ChartRevenuePerService } 
