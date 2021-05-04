/* eslint-disable react/react-in-jsx-scope */
import { CanActive } from "../../../../../components";
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { ManagePrintedProduct } from '../components';
import { MainBar } from '../../../components';
import config from 'src/environments/config';
import { useEffect } from 'react';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const ManagePrintedProductPage = () => {
    const userRole = config.useUserRole.technicalStaff;
    const { openDrawerByLink } = useOpendrawer()


    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            <CanActive isRole={config.useRoleName.technicalStaff} >
                <Loader loading={loading} />
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} >
                    <ManagePrintedProduct />
                </MainBar>
            </CanActive>
        </>
    )
}

export default ManagePrintedProductPage


