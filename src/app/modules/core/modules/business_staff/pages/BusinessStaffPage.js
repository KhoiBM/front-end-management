/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import config from '../../../../../../environments/config';
import { useOpendrawer } from 'src/app/utils';
import { BusinessStaffProcessOrder } from '../components/Manage'
import { MainBar } from '../../../components';
const BusinessStaffPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            <Loader />
            {/* <CanActive isRole={config.useRoleName.businessStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink}>
                <BusinessStaffProcessOrder />
            </MainBar>
        </>
    )
}

export default BusinessStaffPage


