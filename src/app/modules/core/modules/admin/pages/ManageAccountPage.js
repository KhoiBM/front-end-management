/* eslint-disable react/react-in-jsx-scope */
import config from 'src/environments/config'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ManageAccount } from '../components'
import { MainBar } from '../../../components'
import { Loader } from 'src/app/components/Loader'
import { useLoadingEffect } from 'src/app/utils'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'
import { CanActive } from 'src/app/components'
const ManageAccountPage = () => {
    const userRole = config.useUserRole.administrator;
    let location = useLocation();
    let [openDrawerByLink, setOpenDrawerByLink] = useState(false)
    useEffect(() => {
        if (location?.state?.openDrawer != null && location?.state?.openDrawer != undefined) {
            setOpenDrawerByLink(location.state.openDrawer)
        }
    }, [])

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            <CanActive isRole={config.useRoleName.administrator} >
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                    <Loader loading={loading} />
                    <ManageAccount />
                </MainBar>
            </CanActive>
        </>
    )
}

export default ManageAccountPage
