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
const PrivateRoute = ({isAuth, component: Component, ...rest}) => {
  localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <Route
      {...rest}
      component={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
