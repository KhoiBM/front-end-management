import React, { useEffect, useState } from 'react'

import config from 'src/environments/config';
import { useLocation } from 'react-router-dom';
import { ManageService } from '../components/Manage';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { MainBar } from '../../../components';
import {CanActive, Loader} from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const ManageServicePage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    return (
        <>
            {/* <p>ManagerPage</p> */}
             <CanActive isRole={config.useRoleName.manager} />
            <Loader loading={loading} />
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManageService />
            </MainBar>
        </>
    )
}

export default ManageServicePage
