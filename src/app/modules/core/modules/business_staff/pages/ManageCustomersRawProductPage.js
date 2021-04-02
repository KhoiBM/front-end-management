/* eslint-disable react/react-in-jsx-scope */
import CanActive from 'src/app/components/CanActive'
import config from '../../../../../../environments/config';
import { useOpendrawer } from 'src/app/utils';
import { ManageCustomersRawProduct } from '../components/Manage'
import { MainBar } from '../../../components';
const ManageCustomersRawProductPage = () => {
    const userRole = config.useUserRole.businessStaff;
    const { openDrawerByLink } = useOpendrawer()
    const drawerWidth = config.useStyles.drawerWidthBusinessStaff;

    return (
        <>
            {/* <p>BusinessStaffPage</p> */}
            {/* <Loader loading={loading} /> */}
            {/* <CanActive isRole={config.useRoleName.businessStaff} /> */}
            <MainBar userRole={userRole} openDrawerByLink={openDrawerByLink} drawerWidth={drawerWidth}>
                <ManageCustomersRawProduct />
            </MainBar>
        </>
    )
}

export default ManageCustomersRawProductPage


