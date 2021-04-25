import React from 'react'
import { makeStyles } from '@material-ui/core';
import { OverallRevenueStatistic, ChartRevenuePerService, NumberOrderStatistic } from '../../StatisticAndChart/index'
import { useLoadingEffect } from 'src/app/utils';
import { Loader } from 'src/app/components';
const useStyles = makeStyles(theme => ({
    chartContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "82rem",
        // border: "1px solid #48b7e2",
        // margin: "1rem auto",
        margin: "0 auto",
        marginTop: theme.spacing(4),

    }

}))
export const ManageStatistic = () => {
    const classes = useStyles();
    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    return (
        <>
            <Loader loading={loading} />

            <OverallRevenueStatistic />
            <div className={classes.chartContainer}>

                <ChartRevenuePerService />
                <NumberOrderStatistic />
            </div>
        </>
    )
}


