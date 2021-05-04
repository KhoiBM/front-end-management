/* eslint-disable react/react-in-jsx-scope */
import { CanActive, Loader } from 'src/app/components';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { ManageCustomersRawProduct } from '../components/Manage'
import { MainBar } from '../../../components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
import config from 'src/environments/config';
const ManageCustomersRawProductPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()
    const drawerWidth = config.useStyles.drawerWidthBusinessStaff;

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    return (
        <>
            <CanActive isRole={config.useRoleName.businessStaff} >
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} drawerWidth={drawerWidth}>
                    <Loader loading={loading} />
                    <ManageCustomersRawProduct />
                </MainBar>
            </CanActive>
        </>
    )
}

export default ManageCustomersRawProductPage


