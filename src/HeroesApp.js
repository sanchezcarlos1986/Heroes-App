import React, {useReducer, useEffect} from 'react';
import {AppRouter} from '~routers';
import {AuthContext, authReducer} from '~auth';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
};

/**
 * Represents HeroesApp component
 * @constructor
 * @return {function} HeroesApp
 */
export default function HeroesApp() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify({...user}));
  }, [user]);

  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  );
}
