import React from 'react';
import {Navbar} from '~ui';
import {MarvelScreen, HeroScreen, DcScreen} from '~components';
import {Switch, Route, Redirect} from 'react-router-dom';

/**
 * Represents DashboardRoutes component
 * @constructor
 * @return {function} DashboardRoutes
 */
export default function DashboardRoutes() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </React.Fragment>
  );
}
