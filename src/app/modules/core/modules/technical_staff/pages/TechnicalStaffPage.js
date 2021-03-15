/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import MainBar from '../../../components/MainBar'
import config from '../../../../../../environments/config';
const TechnicalStaffPage = () => {
    const userRole = config.useUserRole.technicalStaff;
    return (
        <>
            {/* <p>TechnicalStaffPage</p> */}
            <Loader />
            {/* <CanActive isRole={config.useRoleName.technicalStaff} /> */}
            <MainBar userRole={userRole}>
            </MainBar>
        </>
    )
}

export default TechnicalStaffPage
