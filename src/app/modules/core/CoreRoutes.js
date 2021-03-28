/* eslint-disable no-unused-vars */
import { useRouteMatch, Switch, Router, Route, Redirect } from "react-router-dom";
import React from 'react'
import AdminPage from "./modules/admin/pages/ManageAccountPage";
import ManagerPage from './modules/manager/pages/ManagerPage'
import AdminModule from './modules/admin/AdminModule'
import ManagerModule from './modules/manager/ManagerModule'
import BusinessStaffModule from './modules/business_staff/BusinessStaffModule'
import TechnicalStaffModule from './modules/technical_staff/TechnicalStaffModule'
import ProfilePage from './pages/ProfilePage'
import { NoMatch } from "src/app/components";
const CoreRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>AuthRoutes</p> */}
            <Switch>
                <Route path={`${path}/profile`} component={ProfilePage} />

                <Route path={`${path}/admin`} component={AdminModule} />

                <Route path={`${path}/manager`} component={ManagerModule} />
                <Route path={`${path}/business_staff`} component={BusinessStaffModule} />
                <Route path={`${path}/technical_staff`} component={TechnicalStaffModule} />
                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default CoreRoutes



{/* <Route path={`${path}/manager`} component={ManagerPage} /> */ }