import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

/**
 * Represents PublicRoute component
 * @constructor
 * @param {boolean} isAuth
 * @param {function} component
 * @return {function} PublicRoute
 */
export default function PublicRoute({isAuth, component: Component, ...rest}) {
  return (
    <Route
      component={props =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
      {...rest}
    />
  );
}

PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
