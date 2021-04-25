import React, { useEffect } from 'react'
import CanActive from 'src/app/components/CanActive'
import config from 'src/environments/config'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useOpendrawer, useLoadingEffect } from 'src/app/utils'
import { ManageStatistic } from '../components/Manage'
import { MainBar } from '../../../components'
import { Loader } from 'src/app/components/Loader'

const ManagerPage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()

    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    return (
        <>
            {/* <p>ManagerPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}

            <Loader loading={loading} />

            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageStatistic />
            </MainBar>
        </>
    )
}
export default ManagerPage


   // // console.log(openDrawerByLink)
    // useEffect(() => {
    //     // console.log("opendrawer" + location.state?.openDrawer)
    //     if (location?.state?.openDrawer != null && location?.state?.openDrawer != undefined) {
    //         setOpenDrawerByLink(location.state.openDrawer)
    //         // console.log("open drawer not null not undefied")
    //     } else {
    //         // console.log("open drawer null or undefied")
    //     }
    //     // console.log("openDrawerByLink: " + openDrawerByLink)

    // }, [])