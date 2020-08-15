import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

/**
 * Represents PrivateRoute component
 * @constructor
 * @param {boolean} isAuth
 * @param {function} component
 * @return {function} PrivateRoute
 */
export default function PrivateRoute({isAuth, component: Component, ...rest}) {
  return (
    <Route
      component={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
      {...rest}
    />
  );
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
