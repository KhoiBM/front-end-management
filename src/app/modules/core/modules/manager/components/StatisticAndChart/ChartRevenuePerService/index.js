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
    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
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
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err} `,)
        }
    }


    return (
        <>
            <Loader loading={loading} />

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
                            onClick: {}
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





// const { optionsChart, titleChart } = useOptionsRevenueServiceChart()

// const [options, setOptions] = useState(optionsChart)




// options={{
//     ...options,
//     title: titleChart("TRONG TUẦN"),
// }}

// options={{
//     ...options,
//     title: titleChart("TRONG THÁNG"),
// }}

// options={{
//     ...options,
//     title: titleChart("TRONG NĂM"),
// }}

// ,
//     revenuePerServiceContainer: {
//         minWidth: 275,

//         // background: "blue",
//         display: "flex",
//         alignItems: "center",
//         gap: theme.spacing(2)
//     },
//     titileRevenuePerServiceContainer: {
//         width: "100%",
//         height: "50px",
//         marginBottom: theme.spacing(2),
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//     }



// const intervalID = setInterval(() => {
//     // setRefresh((prev) => !prev)
//     loadInit()
// }, 10000)
// categories: ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"]
// dataLabels: {
//     enabled: true,
//     style: {
//         colors: ['red']
//     },
//     offsetX: 300
// },
// dataLabels: {
//     style: {
//         fontSize: '200px',
//         fontWeight: 'bold',
//     },
//     background: {
//         enabled: true,
//         foreColor: '#000',
//         borderRadius: 2,
//         padding: 4,
//         opacity: 0.9,
//         borderWidth: 1,
//         borderColor: '#fff'
//     },
// },
// dataLabels: {
//     enabled: true,
//         textAnchor: 'start',
//             formatter: function (val, opt) {
//                 return val
//             },
//     offsetX: 0,
//             },
// , '#69d2e7'

// const [optionsWeek, setOptionsWeek] = useState({
//     ...options,
//     title: titleChart("TRONG TUẦN"),
// }
// )


{/* <Typography variant={"subtitle1"} className={classes.titleChart}>Năm</Typography> */ }
{/* <Typography variant={"subtitle1"} className={classes.titleChart}>Tháng</Typography> */ }
{/* <Typography variant={"subtitle1"} className={classes.titleChart} color="textSecondary">Tuần</Typography> */ }




{/* <Button onClick={() => {
                    dataWeek = ["20.123.123", "21.123.123", "29.123.123", "10.123.123"]
                    setSeriesWeek(
                        [
                            {
                                name: 'Doanh thu',
                                data: dataWeek
                            }
                        ]
                    )
                }} >change series</Button> */}

{/* <div className={classes.revenuePerServiceContainer}>
                    <Card className={classes.titileRevenuePerServiceContainer}>
                        <Box className={classes.titileRevenuePerServiceWrapper} >
                            <Typography variant="h6">
                                DOANH THU TRÊN MỖI DỊCH VỤ
                            </Typography>

                        </Box>
                    </Card>
                </div> */}

//     // ["12123123", "13123123", "19123123", "10123123", "10123123"]
// let dataMonth = ["35123123", "39123123", "32123123", "30123123", "30123123"]
// let dataYear = ["399123123", "310123123", "350123123", "300123123", "300123123"]