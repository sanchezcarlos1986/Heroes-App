import React from 'react';
import {mount} from 'enzyme';
import {PrivateRoute} from '~routers';
import {MemoryRouter} from 'react-router-dom';

describe('<PrivateRoute />', () => {
  let wrapper;
  const rest = {
    location: {
      pathname: '/marvel',
    },
  };
  const FakeComponent = () => <div>FakeComponent</div>;

  Storage.prototype.setItem = jest.fn();

  it('should renders component if isAuth and save in localStorge', () => {
    const props = {
      isAuth: true,
      // eslint-disable-next-line react/display-name
      component: () => <FakeComponent />,
    };

    wrapper = mount(
        <MemoryRouter>
          <PrivateRoute {...props} {...rest} />
        </MemoryRouter>,
    );
    expect(wrapper.find('FakeComponent').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith(
        'lastPath',
        rest.location.pathname,
    );
  });

  it('should not renders component if !isAuth, but save in localStorge', () => {
    const props = {
      isAuth: false,
      // eslint-disable-next-line react/display-name
      component: () => <FakeComponent />,
    };

    wrapper = mount(
        <MemoryRouter>
          <PrivateRoute {...props} {...rest} />
        </MemoryRouter>,
    );

    expect(wrapper.find('FakeComponent').exists()).toBe(false);
    expect(wrapper.html()).toBe('');
    expect(localStorage.setItem).toHaveBeenCalledWith(
        'lastPath',
        rest.location.pathname,
    );
  });
});
