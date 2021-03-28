/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive'
import config from 'src/environments/config'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ManageAccount } from '../components'
import { MainBar } from '../../../components'
import { Loader } from 'src/app/components/Loader'
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
            {/* <Loader loading={loading} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageAccount />
            </MainBar>
        </>
    )
}

export default ManageAccountPage
