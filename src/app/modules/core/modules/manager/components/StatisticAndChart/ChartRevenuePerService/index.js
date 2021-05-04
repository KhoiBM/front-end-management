/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Paper, makeStyles, Typography, AppBar, Tabs, Tab, Box, Card, Button } from '@material-ui/core'
import Chart from "react-apexcharts";

import { useTab, useOptionsRevenueServiceChart, useLoadingEffect } from 'src/app/utils'
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { useFormat } from 'src/app/utils'
// import { BiExport } from 'react-icons/bi';

import { ManageStatisticServices } from 'src/app/services/CoreServices/ManagerServices/ManageStatisticServices.js'
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';


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
        // width: "38rem",
        width: "39.8rem",
        minHeight: "40rem",
        height: "auto"
        // marginTop: theme.spacing(5)
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

    }
}))





const ChartRevenuePerService = () => {
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()
    const classes = useStyles();

    const [refresh, setRefresh] = useState(false)

    const { TabPanel, TabBar, value, handleChange } = useTab()


    const [dataWeek, setDataWeek] = useState([])
    const [dataMonth, setDataMonth] = useState([])
    const [dataYear, setDataYear] = useState([])



    const seriesWeek =
        [
            {
                name: 'Doanh thu',
                data: dataWeek
            }
        ]



    const seriesMonth =
        [
            {
                name: 'Doanh thu',
                data: dataMonth
            }
        ]

    const seriesYear =
        [
            {
                name: 'Doanh thu',
                data: dataYear
            }
        ]

    useEffect(() => {
        loadInit()
    }, [refresh])


    const loadInit = async () => {
        showLoader()
        console.log("Loadinit")
        try {
            const response = await (await ManageStatisticServices.viewRevenueOfEachService()).data
            // console.log("response: " + response)
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    const record = response.info.record
                    const inWeek = record.inWeek
                    const inMonth = record.inMonth
                    const inYear = record.inYear
                    // console.log("----chartService")
                    // console.log("inWeek:" + JSON.stringify(inWeek))
                    // console.log("inMonth:" + JSON.stringify(inMonth))
                    // console.log("inYear:" + JSON.stringify(inYear))
                    // console.log("----chartService")
                    setDataWeek(inWeek)
                    setDataMonth(inMonth)
                    setDataYear(inYear)
                    // toast.success("Thành công")
                } else {
                    toast.error(`${config.useMessage.resultFailure} + ${response.errorInfo}`)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err} `,)
        }
        hideLoader()
    }


    return (
        <>


            <div className={classes.chartContainer}>

                <div className={classes.rootTab}>
                    <TabBar tabArr={[
                        {
                            label: "Tuần",
                            onClick: () => { }
                        },
                        {
                            label: "Tháng",
                            onClick: () => { }
                        },
                        {
                            label: "Năm",
                            onClick: () => { }
                        }
                    ]} />

                    <TabPanel value={value} index={0}>
                        <Paper className={classes.rootChart}>
                            <Chart
                                options={useOptionsRevenueServiceChart("TRONG TUẦN")}
                                series={seriesWeek}
                                type="bar"
                                height={dataWeek.length * 100}
                                className={classes.chart}
                            />
                        </Paper>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <Paper className={classes.rootChart}>

                            <Chart
                                options={useOptionsRevenueServiceChart("TRONG THÁNG")}
                                series={seriesMonth}
                                type="bar"
                                height={dataWeek.length * 100}
                                className={classes.chart}
                            />
                        </Paper>
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <Paper className={classes.rootChart}>

                            <Chart
                                options={useOptionsRevenueServiceChart("TRONG NĂM")}
                                series={seriesYear}
                                type="bar"
                                height={dataWeek.length * 100}
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


