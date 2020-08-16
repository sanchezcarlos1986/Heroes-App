import React from 'react';
import {mount} from 'enzyme';
import {DashboardRoutes} from '~routers';
import {AuthContext} from '~auth';
import {MemoryRouter} from 'react-router-dom';

describe('<DashboardRoutes />', () => {
  let component;
  const context = {user: {name: 'Carlos Sánchez', logged: true}};

  beforeEach(() => {});

  it('should renders correctly', () => {
    component = mount(
        <AuthContext.Provider value={context}>
          <MemoryRouter>
            <DashboardRoutes />
          </MemoryRouter>
        </AuthContext.Provider>,
    );
    // console.log('component:', component.debug());
    expect(component).toMatchSnapshot();
    expect(component.find('.user-name').text()).toBe(context.user.name);
  });
});
