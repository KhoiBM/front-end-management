import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import SignInPage from './pages/SignInPage/SignInPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ConfirmForgotPasswordPage from './pages/ConfirmForgotPasswordPage/ConfirmForgotPasswordPage'
import { NoMatch } from 'src/app/components';
const AuthRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>AuthRoutes</p> */}
            <Switch>
                <Route exact path={path} render={() => <Redirect to={`${path}/signin`} />} />
                <Route path={`${path}/signin`} component={SignInPage} />
                <Route path={`${path}/forgotpassword`} component={ForgotPasswordPage} />
                <Route path={`${path}/confirm_forgotpassword`} component={ConfirmForgotPasswordPage} />
                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default AuthRoutes
