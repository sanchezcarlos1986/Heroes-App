import React, {useContext} from 'react';
import {LoginScreen} from '~components';
import {DashboardRoutes, PrivateRoute} from '~routers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
          <Route exact path="/login" component={LoginScreen} />
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
