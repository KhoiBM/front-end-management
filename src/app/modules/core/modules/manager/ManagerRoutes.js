import React from 'react'
import { useRouteMatch, Route, Redirect, Switch } from 'react-router-dom';
import ManagerPage from './pages/ManagerPage';
import StatisticPage from './pages/StatisticPage';
import ManageServicesPage from './pages/ManageServicePage';
import ManageCategoryPage from './pages/ManageCategoryPage';
import ManageRawProductPage from './pages/ManageRawProductPage';
import ManageRawProductImportationPage from './pages/ManageRawProductImportationPage';
import { NoMatch } from 'src/app/components';
const ManagerRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>ManagerRoutes: {path}</p> */}
            <Switch>
                <Route exact path={path} render={() => <Redirect to={`${path}/home`} />} />
                <Route path={`${path}/home`} component={ManagerPage} />
                <Route path={`${path}/statistics`} component={StatisticPage} />
                <Route path={`${path}/manage_service`} component={ManageServicesPage} />
                <Route path={`${path}/manage_category`} component={ManageCategoryPage} />
                <Route path={`${path}/manage_raw_product`} component={ManageRawProductPage} />
                <Route path={`${path}/manage_raw_product_importation`} component={ManageRawProductImportationPage} />
                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default ManagerRoutes