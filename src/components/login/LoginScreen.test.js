import React from 'react';
import {LoginScreen} from '~components';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';
import {AuthContext} from '~auth';
import {types} from '~types';

describe('LoginScreen', () => {
  let component;
  const history = {
    replace: jest.fn(),
  };

  const context = {
    dispatch: jest.fn(),
    user: {logged: false},
  };

  afterEach(() => jest.clearAllMocks());

  beforeEach(() => {
    component = mount(
        <AuthContext.Provider value={context}>
          <LoginScreen history={history} />
        </AuthContext.Provider>,
    );
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component).toMatchSnapshot();
  });

  it('should calls dispatch and lastPath should be /', () => {
    const expectedAction = {
      payload: {name: 'Carlos Sánchez'},
      type: types.login,
    };

    component.find('button').simulate('click');

    expect(context.dispatch).toBeCalledWith(expectedAction);
    expect(history.replace).toBeCalledWith('/');
  });

  it('should calls dispatch and lastPath should be /search', () => {
    const expectedAction = {
      payload: {name: 'Carlos Sánchez'},
      type: types.login,
    };

    const lastPath = '/search';

    localStorage.setItem('lastPath', lastPath);
    component.find('button').simulate('click');

    expect(context.dispatch).toBeCalledWith(expectedAction);
    expect(history.replace).toBeCalledWith(lastPath);
  });
});
