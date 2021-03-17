import React from 'react'
import NoMatch from 'src/app/components/NoMatch';
import { useRouteMatch, Route, Redirect, Switch } from 'react-router-dom';
import TechnicalStaffPage from './pages/TechnicalStaffPage'
import TechnicalStaffProcessOrderPage from './pages/TechnicalStaffProcessOrderPage'
import ManagePrintedProductPage from './pages/ManagePrintedProductPage'
const TechnicalStaffRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>ManagerRoutes: {path}</p> */}
            <Switch>
                <Route exact path={path} render={() => <Redirect to={`${path}/home`} />} />
                <Route path={`${path}/home`} component={TechnicalStaffPage} />
                <Route path={`${path}/technical_staff_process_order`} component={TechnicalStaffProcessOrderPage} />
                <Route path={`${path}/manage_printed_product`} component={ManagePrintedProductPage} />
                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default TechnicalStaffRoutes