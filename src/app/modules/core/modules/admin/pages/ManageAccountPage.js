/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import config from 'src/environments/config'
import MainBar from '../../../components/MainBar'
import ManageAccount from '../components/ManageAccount'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
const ManageAccountPage = () => {
    const userRole = config.useUserRole.administrator;
    let location = useLocation();
    let [openDrawerByLink, setOpenDrawerByLink] = useState(false)
    useEffect(() => {
        if (location?.state?.openDrawer != null && location?.state?.openDrawer != undefined) {
            setOpenDrawerByLink(location.state.openDrawer)
        }

    }, [])
    return (
        <>
            {/* <p>ManageAccountPage</p> */}
            {/* <CanActive isRole={config.useRoleName.administrator} /> */}
            <Loader />
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageAccount />
            </MainBar>
        </>
    )
}

export default ManageAccountPage
