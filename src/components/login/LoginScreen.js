import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {AuthContext} from '~auth';
import {types} from '~types';

/**
 * Represents LoginScreen component
 * @constructor
 * @param {object} history History to access router's methods
 * @return {function} LoginScreen
 */
function LoginScreen({history}) {
  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {name: 'Carlos Sánchez'},
    });

    history.replace('/');
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

LoginScreen.propTypes = {
  history: PropTypes.object.isRequired,
};

export default LoginScreen;
