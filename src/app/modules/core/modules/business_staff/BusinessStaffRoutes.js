import React from 'react'
import NoMatch from 'src/app/components/NoMatch';
import { useRouteMatch, Route, Redirect, Switch } from 'react-router-dom';
import BusinessStaffPage from './pages/BusinessStaffPage'
const BusinessStaffRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>BusinessStaffRoutes: {path}</p> */}
            <Switch>
                <Route exact path={path} render={() => <Redirect to={`${path}/home`} />} />
                <Route path={`${path}/home`} component={BusinessStaffPage} />
                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default BusinessStaffRoutes