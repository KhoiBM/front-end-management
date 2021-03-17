/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import MainBar from '../../../components/MainBar'
import config from '../../../../../../environments/config';
import { useOpendrawer } from 'src/app/utils';
import { ManageCustomersRawProduct } from '../components/Manage'
const ManageCustomersRawProductPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            <Loader />
            {/* <CanActive isRole={config.useRoleName.businessStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink}>
                <ManageCustomersRawProduct />
            </MainBar>
        </>
    )
}

export default ManageCustomersRawProductPage


