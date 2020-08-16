import React from 'react';
import {HeroScreen} from '~components';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';
import {MemoryRouter, Route} from 'react-router-dom';

describe('HeroScreen', () => {
  let component;

  let historyMock;

  it('should renders redirect if !hero', () => {
    historyMock = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 10,
    };

    component = mount(
        <MemoryRouter>
          <HeroScreen history={historyMock} />
        </MemoryRouter>,
    );
    expect(component).not.toBeNull();
    expect(component.find('Redirect').exists()).toBe(true);
  });

  it('should renders hero screen and details', () => {
    component = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
          <Route path="/hero/:heroId" component={HeroScreen} />
        </MemoryRouter>,
    );
    expect(component).not.toBeNull();
    expect(component).toMatchSnapshot();
    expect(component.find('img').prop('alt')).toBe('Batman');
  });

  it('should call PUSH', () => {
    historyMock = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 1,
    };

    component = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
          <Route
            path="/hero/:heroId"
            component={() => <HeroScreen history={historyMock} />}
          />
        </MemoryRouter>,
    );

    component.find('button').simulate('click');
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  it('should call GO BACK', () => {
    historyMock = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 10,
    };

    component = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
          <Route
            path="/hero/:heroId"
            component={() => <HeroScreen history={historyMock} />}
          />
        </MemoryRouter>,
    );

    component.find('button').simulate('click');
    expect(historyMock.push).not.toHaveBeenCalled();
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  it('should return redirect if hero does not exists', () => {
    historyMock = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 10,
    };

    component = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman438527590245']}>
          <Route
            path="/hero/:heroId"
            component={() => <HeroScreen history={historyMock} />}
          />
        </MemoryRouter>,
    );

    expect(component.html()).toBe('');
  });
});
