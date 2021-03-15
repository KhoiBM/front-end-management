/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import MainBar from '../../../components/MainBar'
import config from '../../../../../../environments/config';
const BusinessStaffPage = () => {
    const userRole = config.useUserRole.businessStaff;
    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            <Loader />
            {/* <CanActive isRole={config.useRoleName.businessStaff} /> */}
            <MainBar userRole={userRole}>
            </MainBar>
        </>
    )
}

export default BusinessStaffPage
