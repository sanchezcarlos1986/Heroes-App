import React, {useContext} from 'react';
import {AuthContext} from '~auth';
import {Link, NavLink, useHistory} from 'react-router-dom';
import {types} from '~types';

/**
 * Represents Navbar component
 * @constructor
 * @param {object} history History to access router's methods
 * @return {function} Navbar
 */
function Navbar() {
  const {user, dispatch} = useContext(AuthContext);

  const history = useHistory();

  const links = [
    {to: '/marvel', title: 'Marvel'},
    {to: '/dc', title: 'DC'},
    {to: '/search', title: 'Search'},
  ];

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace('/login');
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {links.map((item, i) => (
            <NavLink
              key={i}
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to={item.to}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info user-name">
            {user.name}
          </span>
          <button onClick={handleLogout} className="nav-item nav-link btn">
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
