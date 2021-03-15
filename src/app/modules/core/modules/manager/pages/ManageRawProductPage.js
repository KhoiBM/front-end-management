import React, { useEffect, useState } from 'react'

import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import config from 'src/environments/config'
import MainBar from '../../../components/MainBar'
import { useLocation } from 'react-router-dom'
import { ManageRawProduct } from '../components/Manage'
const ManageRawProductPage = () => {
    const userRole = config.useUserRole.manager;
    let location = useLocation();

    return (
        <>
            {/* <p>ManagerPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            <Loader />
            <MainBar userRole={userRole} openDrawerByLink={location.state.openDrawer} >
                <ManageRawProduct />
            </MainBar>
        </>
    )
}

export default ManageRawProductPage
