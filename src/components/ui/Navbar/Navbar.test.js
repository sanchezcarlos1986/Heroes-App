import React from 'react';
import {Navbar} from '~ui';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';
import {AuthContext} from '~auth';
import {MemoryRouter, Router} from 'react-router-dom';
import {types} from '~types';

describe('Navbar', () => {
  let component;

  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const context = {
    user: {
      name: 'Carlos Sánchez',
      logged: true,
    },
    dispatch: jest.fn(),
  };

  beforeEach(() => {
    component = mount(
        <AuthContext.Provider value={context}>
          <MemoryRouter>
            <Router history={historyMock}>
              <Navbar />
            </Router>
          </MemoryRouter>
        </AuthContext.Provider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component).toMatchSnapshot();
  });

  it('should click logout button and dispatch action', () => {
    expect(component.find('button').text()).toBe('Logout');
    component.find('button').simulate('click');
    expect(context.dispatch).toHaveBeenCalledWith({type: types.logout});
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  });
});
