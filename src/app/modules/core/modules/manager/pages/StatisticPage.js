import React, { useEffect, useState } from 'react'
import config from 'src/environments/config';
import { useLocation } from 'react-router-dom';
import { ManageStatistic } from '../components/Manage/index'
import { makeStyles } from '@material-ui/core';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { MainBar } from '../../../components';
import { CanActive, Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';



const StatisticPage = () => {
    const userRole = config.useUserRole.manager;
    const { openDrawerByLink } = useOpendrawer()

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            <CanActive isRole={config.useRoleName.manager}>
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                    <Loader loading={loading} />
                    <ManageStatistic />
                </MainBar>
            </CanActive>
        </>
    )
}

export default StatisticPage


