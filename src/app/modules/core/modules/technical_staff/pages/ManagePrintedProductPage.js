/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive/CanActive'
import Loader from 'src/app/components/Loader/Loader'
import config from '../../../../../../environments/config';
import { useOpendrawer } from 'src/app/utils';
import { ManagePrintedProduct } from '../components';
import { MainBar } from '../../../components';
const ManagePrintedProductPage = () => {
    const userRole = config.useUserRole.technicalStaff;
    const { openDrawerByLink } = useOpendrawer()
    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            <Loader />
            {/* <CanActive isRole={config.useRoleName.technicalStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink}>
                <ManagePrintedProduct />
            </MainBar>
        </>
    )
}

export default ManagePrintedProductPage


