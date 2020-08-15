import React, {useContext} from 'react';
import {LoginScreen} from '~components';
import {DashboardRoutes, PrivateRoute, PublicRoute} from '~routers';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {AuthContext} from '~auth';

/**
 * Represents AppRouter component
 * @constructor
 * @return {function} AppRouter
 */
export default function AppRouter() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuth={user.logged}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuth={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
}
