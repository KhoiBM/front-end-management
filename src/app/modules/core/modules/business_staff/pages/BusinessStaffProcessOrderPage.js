/* eslint-disable react/react-in-jsx-scope */
import {CanActive, Loader} from 'src/app/components';
import config from '../../../../../../environments/config';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { BusinessStaffProcessOrder } from '../components/Manage'
import { MainBar } from '../../../components';

import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const BusinessStaffProcessOrderPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()
    const drawerWidth = config.useStyles.drawerWidthBusinessStaff;

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            {/* <Loader loading={loading} /> */}
             <CanActive isRole={config.useRoleName.businessStaff} >
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} drawerWidth={drawerWidth}>
                <BusinessStaffProcessOrder />
            </MainBar>
             </CanActive>
        </>
    )
}

export default BusinessStaffProcessOrderPage


