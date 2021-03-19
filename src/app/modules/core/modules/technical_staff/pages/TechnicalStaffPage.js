/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import config from '../../../../../../environments/config';
import { useOpendrawer } from 'src/app/utils';
import { TechnicalStaffProcessOrder } from '../components';
import { MainBar } from '../../../components';
const TechnicalStaffPage = () => {
    const userRole = config.useUserRole.technicalStaff;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>TechnicalStaffPage</p> */}
            <Loader />
            {/* <CanActive isRole={config.useRoleName.technicalStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink}>
                <TechnicalStaffProcessOrder />
            </MainBar>
        </>
    )
}

export default TechnicalStaffPage
