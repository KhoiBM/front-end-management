import React, { useEffect, useState } from 'react'

import CanActive from 'src/app/components/CanActive'

import config from 'src/environments/config'
import { useLocation } from 'react-router-dom'
import { ManageRawProduct } from '../components/Manage'
import { useOpendrawer, useLoadingEffect } from 'src/app/utils'
import { MainBar } from '../../../components'
import { Loader } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'
const ManageRawProductPage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    return (
        <>
            {/* <p>ManageRawProductPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            <Loader loading={loading} />
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageRawProduct />
            </MainBar>
        </>
    )
}

export default ManageRawProductPage
