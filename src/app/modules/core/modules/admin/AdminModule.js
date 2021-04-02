import React from 'react'
import AdminRoutes from './AdminRoutes'
import { useRouteMatch } from 'react-router-dom';

const AdminModule = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>AdminModule: {path}</p> */}
            <AdminRoutes />
        </>
    )
}

export default AdminModule
