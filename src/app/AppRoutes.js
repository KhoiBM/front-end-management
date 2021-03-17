import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AuthModule from './modules/auth/AuthModule';
import CoreModule from './modules/core/CoreModule';
import NoMatch from './components/NoMatch';
const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/auth" />} />
                <Route path="/auth" component={AuthModule} />
                <Route path="/core" component={CoreModule} />
                <Route component={NoMatch} />
            </Switch>
        </Router >
    )
}

export default AppRoutes
