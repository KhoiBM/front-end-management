import React from 'react'
import ManagerRoutes from '../manager/ManagerRoutes'
import { useRouteMatch } from 'react-router-dom';
import TechnicalStaffRoutes from './TechnicalStaffRoutes'
const TechnicalStaffModule = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>ManagerModule: {path}</p> */}
            <TechnicalStaffRoutes />
        </>
    )
}

export default TechnicalStaffModule
