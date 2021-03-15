import React from 'react'
import { makeStyles } from '@material-ui/core';
import { OverallRevenueStatistic, ChartRevenuePerService, NumberOrderStatistic } from '../../StatisticAndChart/index'
const useStyles = makeStyles(theme => ({
    chartContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "80rem",
        // border: "1px solid #48b7e2",
        margin: "1rem auto"

    }

}))
export const ManageStatistic = () => {
    const classes = useStyles();
    return (
        <>
            <OverallRevenueStatistic />
            <div className={classes.chartContainer}>

                <ChartRevenuePerService />
                <NumberOrderStatistic />
            </div>
        </>
    )
}


