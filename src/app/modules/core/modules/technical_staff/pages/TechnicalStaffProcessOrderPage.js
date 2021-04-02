/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive'
import config from '../../../../../../environments/config';
import { useOpendrawer } from 'src/app/utils';
import { TechnicalStaffProcessOrder } from '../components/Manage'
import { MainBar } from '../../../components';
const TechnicalStaffProcessOrderPage = () => {
    const userRole = config.useUserRole.technicalStaff;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            {/* <Loader loading={loading} /> */}
            {/* <CanActive isRole={config.useRoleName.technicalStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink}>
                <TechnicalStaffProcessOrder />
            </MainBar>
        </>
    )
}

export default TechnicalStaffProcessOrderPage


