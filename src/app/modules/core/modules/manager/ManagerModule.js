import React from 'react'
import { useRouteMatch } from 'react-router-dom';
import ManagerRoutes from './ManagerRoutes';

const ManagerModule = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>ManagerModule: {path}</p> */}
            <ManagerRoutes />
        </>
    )
}

export default ManagerModule
