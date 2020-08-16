import React from 'react';
import {mount} from 'enzyme';
import {AppRouter} from '~routers';
import {AuthContext} from '~auth';

describe('<AppRouter />', () => {
  let component;

  beforeEach(() => {});

  it('should renders login if !isAuth', () => {
    component = mount(
        <AuthContext.Provider value={{user: {logged: false}}}>
          <AppRouter />
        </AuthContext.Provider>,
    );
    expect(component.find('PublicRoute').exists()).toBe(true);
    expect(component.find('LoginScreen').exists()).toBe(true);
    expect(component.find('PrivateRoute').exists()).toBe(false);
  });

  it('should renders private route if isAuth', () => {
    component = mount(
        <AuthContext.Provider value={{user: {name: 'Carlos S', logged: true}}}>
          <AppRouter />
        </AuthContext.Provider>,
    );
    expect(component.find('PublicRoute').exists()).toBe(false);
    expect(component.find('LoginScreen').exists()).toBe(false);
    expect(component.find('PrivateRoute').exists()).toBe(true);
    expect(component.find('DashboardRoutes').exists()).toBe(true);
  });
});
