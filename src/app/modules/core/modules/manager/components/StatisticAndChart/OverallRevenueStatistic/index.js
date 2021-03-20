import React, { useState, useEffect } from 'react'
import { Paper, makeStyles, CardContent, Card, Typography, Container, Box, IconButton, Tooltip, Zoom } from '@material-ui/core'
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ManageStatisticServices } from 'src/app/services/CoreServices/ManagerServices/ManageStatisticServices';
import { MdAttachMoney } from 'react-icons/md';
import { CSVLink, CSVDownload } from "react-csv";
import { BiExport } from 'react-icons/bi'
const useStyles = makeStyles(theme => ({
    titleContainer: {
        // marginBottom: theme.spacing(8),
        // height: "180px",
        // background: "#B6E2F3",
        width: "80rem",
        // border: "3px solid #48b7e2",
        margin: "1rem auto"
    },
    titleWrapper: {
        width: "12rem",
    },
    overallStatisticRoot: {
        marginBottom: theme.spacing(8),
        // height: "180px",
        // background: "#B6E2F3",
        width: "80rem",
        // border: "3px solid #48b7e2",
        margin: "1rem auto"
    },
    rootCard: {
        minWidth: 275,
        // width: "350px",
        width: "300px",
        // height: "100px",
        height: "120px",
        // background: "#48b7e2",
        // border: "3px solid #48b7e2",
        position: "relative"


    },
    title: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
    CardContainer: {
        maxWidth: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        // gap: theme.spacing(11),
        flexWrap: "wrap",
        flex: 1,
        // background: "red",

    },
    subTitle: {
        fontSize: 18,
        textAlign: "right",
        fontWeight: "100",
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2)

    },
    content: {
        fontSize: 24,
        // marginTop: theme.spacing(4),
        textAlign: "right",
        color: "#333333"
    },
    iconCardContainer: {
        width: "60px",
        height: "60px",
        // border: "1px solid black",
        // background: "#DBECDA",
        borderRadius: "9999px",
        position: "absolute",
        top: 25,
        left: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    iconCard: {
        fontSize: "40px",


    },
    iconExport: {
        // filter: "invert(100)"
        color: "rgba(0, 0, 0, 0.54) !important",
        textDecoration: "none !important"
    },
    iconExportWrapper: {
        // background: "blue",
        // position: "absolute"


    },
    iconExportIconButton: {
        width: "100%"
    },
    iconExportContainer: {
        width: "4rem",
        height: "50px",
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"


    },
    overallContainer: {
        minWidth: 275,
        width: "300px",
        // background: "blue",
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2)
    },
    titleOverallContainer: {
        width: "250px",
        height: "50px",
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));
const OverallRevenueStatistic = () => {
    const classes = useStyles();

    const [overallRevenue, setOverallRevenue] = useState({})

    useEffect(async () => {
        try {
            const response = await (await ManageStatisticServices.viewOverallRevenue()).data
            if (response.result == config.useResultStatus.SUCCESS) {
                const overallRevenue = response.info.record
                // toast.success("Thành công")
                // console.log(JSON.stringify(overallRevenue))
                setOverallRevenue(overallRevenue)
            } else {
                toast.error(config.useMessage.resultFailure)
            }
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }, [])

    const getCsvData = () => {
        const csvData = [['Doanh thu'], ['Tổng doanh thu', 'Tuần', 'Tháng', 'Năm']];

        csvData.push([`${overallRevenue.overall}`, `${overallRevenue.inWeek}`, `${overallRevenue.inMonth}`, `${overallRevenue.inYear}`]);

        return csvData;
    };


    return (
        <>

            <div className={classes.overallStatisticRoot}>
                <div className={classes.overallContainer}>
                    <Card className={classes.iconExportContainer}>
                        <Box className={classes.iconExportWrapper} >
                            <Tooltip TransitionComponent={Zoom} placement="left" title="Xuất doanh thu ra tệp csv">
                                <IconButton className={classes.iconExportIconButton} >
                                    <CSVLink filename="Doanh Thu.csv" data={getCsvData()} className={classes.iconExport} >
                                        <BiExport />
                                    </CSVLink>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Card>

                    <Card className={classes.titleOverallContainer}>
                        <Box className={classes.titleOverallWrapper} >
                            <Typography variant="h6">
                                Doanh thu
                            </Typography>

                        </Box>
                    </Card>

                </div>

                <div className={classes.CardContainer}>

                    <Card className={classes.rootCard}>

                        <Box component="div" className={classes.iconCardContainer} style={{ background: "#DBECDA " }}>
                            <div className={classes.iconCardWrapper}>
                                <MdAttachMoney className={classes.iconCard} style={{ color: "#67AC5B" }} />
                            </div>
                        </Box>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Tổng doanh thu
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {overallRevenue.overall}<span>đ</span>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <Box component="div" className={classes.iconCardContainer} style={{ background: "#CCE2FC " }}>
                            <div className={classes.iconCardWrapper}>
                                <MdAttachMoney className={classes.iconCard} style={{ color: "#327DF6" }} />
                            </div>
                        </Box>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Tuần
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {overallRevenue.inWeek}<span>đ</span>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <Box component="div" className={classes.iconCardContainer} style={{ background: "#FDF1CC " }}>
                            <div className={classes.iconCardWrapper}>
                                <MdAttachMoney className={classes.iconCard} style={{ color: "#F6C244" }} />
                            </div>
                        </Box>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Tháng
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {overallRevenue.inMonth}<span>đ</span>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <Box component="div" className={classes.iconCardContainer} style={{ background: "#F1D3D6 " }}>
                            <div className={classes.iconCardWrapper}>
                                <MdAttachMoney className={classes.iconCard} style={{ color: "#CB444A" }} />
                            </div>
                        </Box>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Năm
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {overallRevenue.inYear}<span>đ</span>
                            </Typography>

                        </CardContent>
                    </Card>


                </div>
            </div>

        </>
    )
}

export { OverallRevenueStatistic }
