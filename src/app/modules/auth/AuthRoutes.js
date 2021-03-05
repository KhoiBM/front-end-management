import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
const AuthRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>AuthRoutes</p> */}
            <Switch>
                <Route exact path={path} render={() => <Redirect to={`${path}/signin`} />} />
                <Route path={`${path}/signin`} component={SignInPage} />
                <Route path={`${path}/signup`} component={SignUpPage} />

            </Switch>
        </>
    )
}

export default AuthRoutes
