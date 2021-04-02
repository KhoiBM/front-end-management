import React from 'react'
import { useRouteMatch, Route, Redirect, Switch } from 'react-router-dom';
import ManageAccountPage from './pages/ManageAccountPage';
import { NoMatch } from 'src/app/components';
const AdminRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>AuthRoutes: {path}</p> */}
            <Switch>
                <Route exact path={path} render={() => <Redirect to={`${path}/home`} />} />
                <Route path={`${path}/home`} component={ManageAccountPage} />
                <Route path={`${path}/manage_account`} component={ManageAccountPage} />
                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default AdminRoutes