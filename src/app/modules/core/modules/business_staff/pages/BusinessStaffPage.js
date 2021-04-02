/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive'
import config from '../../../../../../environments/config';
import { useOpendrawer } from 'src/app/utils';
import { BusinessStaffProcessOrder } from '../components/Manage'
import { MainBar } from '../../../components';
import { useEffect } from 'react';
const BusinessStaffPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()

    const drawerWidth = config.useStyles.drawerWidthBusinessStaff;

    useEffect(() => {
        if (drawerWidth && drawerWidth != null) {
            console.log("drawerWidth: " + drawerWidth)
        }
    }, [drawerWidth])

    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            {/* <Loader loading={loading} /> */}
            {/* <CanActive isRole={config.useRoleName.businessStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} drawerWidth={drawerWidth}>
                <BusinessStaffProcessOrder />
            </MainBar>
        </>
    )
}

export default BusinessStaffPage


