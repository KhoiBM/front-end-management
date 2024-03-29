import React, { useEffect, useState } from 'react'
import config from 'src/environments/config';
import { useLocation } from 'react-router-dom';
import { ManageService } from '../components/Manage';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { MainBar } from '../../../components';
import { CanActive, Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const ManageServicePage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    return (
        <>
            <CanActive isRole={config.useRoleName.manager}>
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                    <Loader loading={loading} />
                    <ManageService />
                </MainBar>
            </CanActive>
        </>
    )
}

export default ManageServicePage
