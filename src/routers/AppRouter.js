import React from 'react';
import {LoginScreen} from '~components';
import {DashboardRoutes} from '~routers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/**
 * Represents AppRouter component
 * @constructor
 * @return {function} AppRouter
 */
export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
}
