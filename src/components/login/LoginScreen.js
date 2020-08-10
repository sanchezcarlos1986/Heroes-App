import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents LoginScreen component
 * @constructor
 * @param {object} history History to access router's methods
 * @return {function} LoginScreen
 */
function LoginScreen({history}) {
  const handleClick = () => {
    history.replace('/');
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
}

LoginScreen.propTypes = {
  history: PropTypes.object.isRequired,
};

export default LoginScreen;
