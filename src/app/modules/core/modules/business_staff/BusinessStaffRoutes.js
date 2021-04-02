import React from 'react'

import { useRouteMatch, Route, Redirect, Switch } from 'react-router-dom';
import BusinessStaffPage from './pages/BusinessStaffPage'
import BusinessStaffProcessOrderPage from './pages/BusinessStaffProcessOrderPage'
import ManageCustomersRawProductPage from './pages/ManageCustomersRawProductPage'
import ManageCustomersRawProductImportationPage from './pages/ManageCustomersRawProductImportationPage'
import { NoMatch } from 'src/app/components';
const BusinessStaffRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>BusinessStaffRoutes: {path}</p> */}
            <Switch>
                <Route exact path={path} render={() => <Redirect to={`${path}/home`} />} />
                <Route path={`${path}/home`} component={BusinessStaffPage} />
                <Route path={`${path}/business_staff_process_order`} component={BusinessStaffProcessOrderPage} />
                <Route path={`${path}/manage_customer’s_raw_product`} component={ManageCustomersRawProductPage} />
                <Route path={`${path}/manage_customer’s_raw_product_importation`} component={ManageCustomersRawProductImportationPage} />
                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default BusinessStaffRoutes