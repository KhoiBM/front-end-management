/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive'
import { useOpendrawer } from 'src/app/utils';
import { ManagePrintedProduct } from '../components';
import { MainBar } from '../../../components';
import config from 'src/environments/config';
import { useEffect } from 'react';
const ManagePrintedProductPage = () => {
    const userRole = config.useUserRole.technicalStaff;
    const { openDrawerByLink } = useOpendrawer()



    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            {/* <Loader loading={loading} /> */}
            {/* <CanActive isRole={config.useRoleName.technicalStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                <ManagePrintedProduct />
            </MainBar>
        </>
    )
}

export default ManagePrintedProductPage


