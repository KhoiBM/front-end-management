import React, { useEffect, useState } from 'react'

import config from 'src/environments/config';
import Loader from 'src/app/components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { ManageService } from '../components/Manage';
import { useOpendrawer } from 'src/app/utils';
import { MainBar } from '../../../components';

const ManageServicePage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>ManagerPage</p> */}
            {/* <CanActive isRole={config.useRoleName.manager} /> */}
            <Loader />
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageService />
            </MainBar>
        </>
    )
}

export default ManageServicePage
