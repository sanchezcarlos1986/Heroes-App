import {authReducer} from '~auth';
import {types} from '~types';

describe('authReducer', () => {
  test('should returns default state', () => {
    const initialState = {greeting: 'こんにちは！'};
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test('should returns LOGIN state', () => {
    const initialState = {};
    const user = {
      name: 'Carlos Sánchez',
    };
    const action = {
      type: types.login,
      payload: user,
    };
    const state = authReducer(initialState, action);

    expect(state).toEqual({logged: true, name: user.name});
  });

  test('should returns LOGOUT state', () => {
    const initialState = {};
    const action = {
      type: types.logout,
    };
    const state = authReducer(initialState, action);

    expect(state).toEqual({logged: false});
  });
});
