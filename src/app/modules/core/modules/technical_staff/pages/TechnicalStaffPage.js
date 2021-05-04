/* eslint-disable react/react-in-jsx-scope */
import { CanActive } from "../../../../../components";
import config from '../../../../../../environments/config';
import { useOpendrawer, useLoadingEffect } from 'src/app/utils';
import { TechnicalStaffProcessOrder } from '../components';
import { MainBar } from '../../../components';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const TechnicalStaffPage = () => {
    const userRole = config.useUserRole.technicalStaff;
    const { openDrawerByLink } = useOpendrawer()

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {/* <p>TechnicalStaffPage</p> */}
            <CanActive isRole={config.useRoleName.technicalStaff} >
                {/* <Loader loading={loading} /> */}
                <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink}>
                    <TechnicalStaffProcessOrder />
                </MainBar>
            </CanActive>
        </>
    )
}

export default TechnicalStaffPage
