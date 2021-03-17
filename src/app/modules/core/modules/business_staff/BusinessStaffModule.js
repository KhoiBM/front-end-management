import React from 'react'
import ManagerRoutes from '../manager/ManagerRoutes'
import { useRouteMatch } from 'react-router-dom';
import BusinessStaffRoutes from './BusinessStaffRoutes';

const BusinessStaffModule = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>BusinessStaffModule: {path}</p> */}
            <BusinessStaffRoutes />
        </>
    )
}

export default BusinessStaffModule
