/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive'
import config from '../../../../../../environments/config';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { TechnicalStaffProcessOrder } from '../components/Manage'
import { MainBar } from '../../../components';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const TechnicalStaffProcessOrderPage = () => {
    const userRole = config.useUserRole.technicalStaff;
    const { openDrawerByLink } = useOpendrawer()

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            {/* <CanActive isRole={config.useRoleName.technicalStaff} /> */}
            <Loader loading={loading} />
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink}>
                <TechnicalStaffProcessOrder />
            </MainBar>
        </>
    )
}

export default TechnicalStaffProcessOrderPage


