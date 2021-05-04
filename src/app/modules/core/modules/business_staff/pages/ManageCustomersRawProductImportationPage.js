/* eslint-disable react/react-in-jsx-scope */
import { CanActive, Loader } from 'src/app/components';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { ManageCustomersRawProductImportation } from '../components/Manage'
import { MainBar } from '../../../components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
import config from 'src/environments/config';
const ManageCustomerRawProductImportationPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()
    const drawerWidth = config.useStyles.drawerWidthBusinessStaff;

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {/* <p>BusinessStaffPage</p> */}

            <CanActive isRole={config.useRoleName.businessStaff} >
                {/*{userRole==config.useRoleName.businessStaf &&*/}
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} drawerWidth={drawerWidth}>
                    <Loader loading={loading} />
                    <ManageCustomersRawProductImportation />
                </MainBar>
            </CanActive>

        </>
    )
}

export default ManageCustomerRawProductImportationPage


