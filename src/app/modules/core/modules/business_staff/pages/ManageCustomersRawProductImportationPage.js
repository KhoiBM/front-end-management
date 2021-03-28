/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive'
import config from '../../../../../../environments/config';
import { useOpendrawer } from 'src/app/utils';
import { ManageCustomersRawProductImportation } from '../components/Manage'
import { MainBar } from '../../../components';
import { Loader } from 'src/app/components';
const ManageCustomerRawProductImportationPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            {/* <Loader loading={loading} /> */}
            {/* <CanActive isRole={config.useRoleName.businessStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink}>
                <ManageCustomersRawProductImportation />
            </MainBar>
        </>
    )
}

export default ManageCustomerRawProductImportationPage


