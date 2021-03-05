import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AuthModule from './modules/auth/AuthModule';
const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/auth" />} />
                <Route path="/auth" component={AuthModule} />
            </Switch>
        </Router >
    )
}

export default AppRoutes
