/* eslint-disable react/react-in-jsx-scope */
import config from '../../../../../../environments/config';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { BusinessStaffProcessOrder } from '../components/Manage'
import { MainBar } from '../../../components';
import { useEffect } from 'react';

import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
import { Loader, CanActive } from 'src/app/components';

const BusinessStaffPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()

    const drawerWidth = config.useStyles.drawerWidthBusinessStaff;

    useEffect(() => {
        if (drawerWidth && drawerWidth != null) {
            console.log("drawerWidth: " + drawerWidth)
        }
    }, [drawerWidth])

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()



    return (
        <>

            <CanActive isRole={config.useRoleName.businessStaff} >
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} drawerWidth={drawerWidth}>
                    <Loader loading={loading} />
                    <BusinessStaffProcessOrder />
                </MainBar>
            </CanActive>

        </>
    )
}

export default BusinessStaffPage


