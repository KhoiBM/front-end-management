import React, { useState, useEffect } from 'react'
import { Paper, makeStyles, CardContent, Card, Typography, Container } from '@material-ui/core'
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ManageStatisticServices } from 'src/app/services/CoreServices/ManagerServices/ManageStatisticServices';


const useStyles = makeStyles(theme => ({
    overallStatisticRoot: {
        marginBottom: theme.spacing(4),
        height: "250px",
        // background: "#48b7e2",
        width: "80rem",
        // border: "3px solid #48b7e2",
        margin: "1rem auto"
    },
    rootCard: {
        minWidth: 275,
        width: "350px",
        height: "150px",
        // background: "#48b7e2",
        border: "3px solid #48b7e2",


    },
    title: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
    subTitle: {
        fontSize: 14,
    },
    CardContainer: {
        display: "flex",
        justifyContent: "space-around",
        gap: theme.spacing(10)

    },
    content: {
        fontSize: "2rem",
        marginTop: theme.spacing(4),
    }
}));
const OverallRevenueStatistic = () => {
    const classes = useStyles();
    const [overallRevenue, setOverallRevenue] = useState({})
    useEffect(async () => {
        try {
            const response = await (await ManageStatisticServices.viewOverallRevenue()).data
            if (response.result == config.useResultStatus.SUCCESS) {
                // toast.success("Thành công")
                setOverallRevenue(overallRevenue)
            } else {
                toast.error(config.useMessage.resultFailure)
            }
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }, [])
    return (
        <>
            <Paper variant="outlined" className={classes.overallStatisticRoot}>


                <Typography variant={"h6"} className={classes.title}>Tổng doanh thu</Typography>
                <div className={classes.CardContainer}>
                    <Card className={classes.rootCard}>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Trong tuần
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {/* {overallRevenue.inWeek} */}{`${11232132312} `}<span>VNĐ</span>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Trong tháng
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {overallRevenue.inMonth}{`${11232132312} `}<span>VNĐ</span>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Trong năm
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {overallRevenue.inYear}{`${11232132312} `}<span>VNĐ</span>
                            </Typography>

                        </CardContent>
                    </Card>
                </div>


            </Paper>

        </>
    )
}

export { OverallRevenueStatistic }
