import React, { useEffect, useState } from 'react'

import CanActive from 'src/app/components/CanActive'

import config from 'src/environments/config'
import { useLocation } from 'react-router-dom'
import { ManageRawProduct } from '../components/Manage'
import { useOpendrawer } from 'src/app/utils'
import { MainBar } from '../../../components'
const ManageRawProductPage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>ManageRawProductPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            {/* <Loader loading={loading} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageRawProduct />
            </MainBar>
        </>
    )
}

export default ManageRawProductPage
