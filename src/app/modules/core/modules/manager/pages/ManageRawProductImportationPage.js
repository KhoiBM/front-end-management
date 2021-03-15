import React, { useEffect, useState } from 'react'

import config from 'src/environments/config';
import Loader from 'src/app/components/Loader/Loader';
import MainBar from '../../../components/MainBar';
import { useLocation } from 'react-router-dom';
import { ManageRawProductImportation } from '../components/Manage';

const ManageRawProductImportationPage = () => {
    const userRole = config.useUserRole.manager;
    let location = useLocation();

    return (
        <>
            {/* <p>ManagerPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            <Loader />
            <MainBar userRole={userRole} openDrawerByLink={location.state.openDrawer} >
                <ManageRawProductImportation />
            </MainBar>
        </>
    )
}

export default ManageRawProductImportationPage
