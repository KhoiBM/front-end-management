import React, { useEffect } from 'react'
import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import config from 'src/environments/config'
import MainBar from '../../../components/MainBar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ManageStatistic } from '../components/Manage'

const ManagerPage = () => {
    const userRole = config.useUserRole.manager;
    let location = useLocation();
    let [openDrawerByLink, setOpenDrawerByLink] = useState(false)
    // console.log(openDrawerByLink)
    useEffect(() => {
        // console.log("opendrawer" + location.state?.openDrawer)
        if (location?.state?.openDrawer != null && location?.state?.openDrawer != undefined) {
            setOpenDrawerByLink(location.state.openDrawer)
            // console.log("open drawer not null not undefied")
        } else {
            // console.log("open drawer null or undefied")
        }
        // console.log("openDrawerByLink: " + openDrawerByLink)

    }, [])
    return (
        <>
            {/* <p>ManagerPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            <Loader />
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageStatistic />
            </MainBar>
        </>
    )
}

export default ManagerPage
