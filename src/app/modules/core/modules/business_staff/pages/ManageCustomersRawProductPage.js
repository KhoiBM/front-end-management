/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive'
import config from '../../../../../../environments/config';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { ManageCustomersRawProduct } from '../components/Manage'
import { MainBar } from '../../../components';
import { Loader } from 'src/app/components';
const ManageCustomersRawProductPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()
    const drawerWidth = config.useStyles.drawerWidthBusinessStaff;

    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()


    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            <Loader loading={loading} />
            {/* <CanActive isRole={config.useRoleName.businessStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} drawerWidth={drawerWidth}>
                <ManageCustomersRawProduct />
            </MainBar>
        </>
    )
}

export default ManageCustomersRawProductPage


