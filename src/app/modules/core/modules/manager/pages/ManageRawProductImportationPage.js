import React, { useEffect, useState } from 'react'

import config from 'src/environments/config';
import { useLocation } from 'react-router-dom';
import { ManageRawProductImportation } from '../components/Manage';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { MainBar } from '../../../components';
import { Loader, CanActive } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const ManageRawProductImportationPage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            <CanActive isRole={config.useRoleName.manager}>
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                    <Loader loading={loading} />
                    <ManageRawProductImportation />
                </MainBar>
            </CanActive>
        </>
    )
}

export default ManageRawProductImportationPage
