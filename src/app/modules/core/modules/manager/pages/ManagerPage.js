import React, { useEffect } from 'react'
import config from 'src/environments/config'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useOpendrawer, useLoadingEffect } from 'src/app/utils'
import { ManageStatistic } from '../components/Manage'
import { MainBar } from '../../../components'
import { Loader } from 'src/app/components/Loader'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'
import { CanActive } from 'src/app/components'

const ManagerPage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            <CanActive isRole={config.useRoleName.manager}>
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                    <Loader loading={loading} />
                    <ManageStatistic />
                </MainBar>
            </CanActive>
        </>
    )
}
export default ManagerPage

