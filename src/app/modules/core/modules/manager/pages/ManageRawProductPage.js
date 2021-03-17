import React, { useEffect, useState } from 'react'

import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import config from 'src/environments/config'
import MainBar from '../../../components/MainBar'
import { useLocation } from 'react-router-dom'
import { ManageRawProduct } from '../components/Manage'
import { useOpendrawer } from 'src/app/utils'
const ManageRawProductPage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>ManageRawProductPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            <Loader />
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageRawProduct />
            </MainBar>
        </>
    )
}

export default ManageRawProductPage
