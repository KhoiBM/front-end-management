
// /* eslint-disable react/prop-types */
// import React, { useState } from 'react'
// import { Paper, makeStyles, Typography, AppBar, Tabs, Tab, Box, Card, Tooltip } from '@material-ui/core'
// import Chart from "react-apexcharts";
// import { useTab } from 'src/app/utils';

// const useStyles = makeStyles(theme => ({
//     rootChart: {
//         // border: "1px solid red",
//         width: "100%",
//         transition: "transition: all 0.3s ease 0s;"
//     },
//     chart: {
//         width: "100%"
//     },
//     chartContainer: {
//         // display: "flex",
//         // justifyContent: "center",
//         // gap: theme.spacing(7)
//         // border: "1px solid red",
//         width: "38rem",
//         // marginTop: theme.spacing(5)  
//     },
//     titleChart: {
//         // border: "1px solid black",
//         paddingLeft: theme.spacing(2),
//         fontSize: theme.typography.fontSize,
//         fontWeight: 100,
//         background: "#B6E2F3",
//         color: "#fff"
//     },
//     rootTab: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//         // backgroundColor: "red",
//         width: "100%",

//     },
//     tablePanel: {
//         width: "100%",
//         // backgroundColor: "red",
//     },
//     TabContainer: {
//         background: "#fff"
//     },

//     numberOrderContainer: {
//         minWidth: 275,

//         // background: "blue",
//         display: "flex",
//         alignItems: "center",
//         gap: theme.spacing(2)
//     },
//     titlenumberOrderContainer: {
//         width: "100%",
//         height: "50px",
//         marginBottom: theme.spacing(2),
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//     }
// }))



// const NumberOrderStatistic = () => {
//     const classes = useStyles();


//     const { TabPanel, TabBar, value, handleChange } = useTab()

//     const { optionsChart, titleChart } = useOptionsRevenueServiceChart()
//     const [options, setOptions] = useState(optionsChart)





//     return (
//         <>
//             <div className={classes.chartContainer}>

//                 <div className={classes.rootTab}>
//                     <TabBar tabArr={["Tuần", "Tháng", "Năm"]} />
//                     <TabPanel value={value} index={0}>
//                         <Paper className={classes.rootChart}>
//                             <Chart
//                                 options={{
//                                     ...options,
//                                     title: titleChart("TRONG TUẦN"),
//                                 }}
//                                 series={seriesWeek}
//                                 type="bar"
//                                 // height={300}
//                                 height={dataWeek.length * 100}
//                                 className={classes.chart}
//                             />
//                         </Paper>
//                     </TabPanel>

//                     <TabPanel value={value} index={1}>
//                         <Paper className={classes.rootChart}>

//                             <Chart
//                                 options={{
//                                     ...options,
//                                     title: titleChart("TRONG THÁNG"),
//                                 }}
//                                 series={seriesMonth}
//                                 type="bar"
//                                 // height={250}
//                                 height={dataWeek.length * 100}
//                                 className={classes.chart}
//                             />
//                         </Paper>
//                     </TabPanel>

//                     <TabPanel value={value} index={2}>
//                         <Paper className={classes.rootChart}>

//                             <Chart
//                                 options={{
//                                     ...options,
//                                     title: titleChart("TRONG NĂM"),
//                                 }}
//                                 series={seriesYear}
//                                 type="bar"
//                                 // height={250}
//                                 height={dataWeek.length * 100}
//                                 className={classes.chart}
//                             />
//                         </Paper>
//                     </TabPanel>
//                 </div>
//             </div>


//         </>
//     )
// }

// export { NumberOrderStatistic }





// {/* <div className={classes.numberOrderContainer}>
//                     <Card className={classes.titlenumberOrderContainer}>
//                         <Box className={classes.titlenumberOrderlWrapper} >
//                             <Typography variant="h6">
//                                 Số lượng đơn hàng
//                             </Typography>

//                         </Box>
//                     </Card>
//                 </div> */}



// // function a11yProps(index) {
// //     return {
// //         id: `tab-${index}`
// //     };
// // }

// // function TabPanel(props) {
// //     const { children, value, index, ...other } = props;
// //     const classes = useStyles();

// //     return (
// //         <div
// //             role="tabpanel"
// //             hidden={value !== index}
// //             id={`tabpanel-${index}`}
// //             {...other}
// //             className={classes.tablePanel}
// //         >
// //             {value === index && (
// //                 <Box p={3}>
// //                     {children}
// //                 </Box>
// //             )}
// //         </div>
// //     );
// // }



// {/* <AppBar position="static" className={classes.TabContainer}>
//                         <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" variant="fullWidth">
//                             <Tab label="Tuần" {...a11yProps(0)} />
//                             <Tab label="Tháng" {...a11yProps(1)} />
//                             <Tab label="Năm" {...a11yProps(2)} />
//                         </Tabs>
//                     </AppBar> */}



//                         // const [value, setValue] = useState(0);

//     // const handleChange = (event, newValue) => {
//     //     setValue(newValue);
//     // };