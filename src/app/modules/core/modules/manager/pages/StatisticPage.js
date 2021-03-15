import React, { useEffect, useState } from 'react'
import config from 'src/environments/config';
import Loader from 'src/app/components/Loader/Loader';
import MainBar from '../../../components/MainBar';
import { useLocation } from 'react-router-dom';
import { ManageStatistic } from '../components/Manage/index'
import { makeStyles } from '@material-ui/core';

const StatisticPage = () => {
    const userRole = config.useUserRole.manager;
    let location = useLocation();

    return (
        <>
            {/* <p>StatisticPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            <Loader />
            <MainBar userRole={userRole} openDrawerByLink={location.state.openDrawer} >
                <ManageStatistic />
            </MainBar>
        </>
    )
}

export default StatisticPage







// // let [openDrawerByLink, setOpenDrawerByLink] = useState(false)
// // console.log(location.state.openDrawer)
// useEffect(() => {
//     // console.log("opendrawer" + location.state?.openDrawer)
//     // if (location?.state?.openDrawer != null && location?.state?.openDrawer != undefined) {
//     // setOpenDrawerByLink(location.state.openDrawer)
//     // console.log("open drawer not null not undefied")
//     // console.log("locationopenDrawer: " + location.state.openDrawer)
//     // } else {
//     // console.log("open drawer null or undefied")
//     // }
//     // console.log("openDrawerByLink: " + openDrawerByLink)

// }, [])