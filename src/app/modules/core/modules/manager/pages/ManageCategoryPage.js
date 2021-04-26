import React, { useEffect, useState } from 'react'
import CanActive from 'src/app/components/CanActive'

import config from 'src/environments/config'
import { useLocation } from 'react-router-dom'
import { ManageCategory } from '../components/Manage'
import { useOpendrawer, useLoadingEffect } from 'src/app/utils'
import { MainBar } from '../../../components'
import { Loader } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'

const ManageCategoryPage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {/* <p>ManagerPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            <Loader loading={loading} />
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageCategory />
            </MainBar>
        </>
    )
}

export default ManageCategoryPage
