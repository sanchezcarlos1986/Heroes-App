import React from 'react';
import {SearchScreen} from '~components';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';
import {MemoryRouter, Route} from 'react-router-dom';

describe('<SearchScreen />', () => {
  let component;

  it('should renders default values', () => {
    component = mount(
        <MemoryRouter initialEntries={['/search']}>
          <Route path="/search" component={SearchScreen} />
        </MemoryRouter>,
    );
    expect(component).not.toBeNull();
    expect(component).toMatchSnapshot();
    expect(component.find('.alert-info').text()).toBe('Search a hero');
    expect(component.find('input').prop('value')).toBe('');
  });

  it('should renders could not find hero', () => {
    const search = 'ロックマン';

    component = mount(
        <MemoryRouter initialEntries={[`/search?q=${search}`]}>
          <Route path="/search" component={SearchScreen} />
        </MemoryRouter>,
    );
    expect(component.find('input').prop('value')).toBe(search);
    expect(component.find('.alert-danger').text()).toBe(
        `We couldn't find ${search}`,
    );
    expect(component.find('HeroCard').exists()).toBe(false);
  });

  it('should renders batman result', () => {
    const search = 'batman';

    component = mount(
        <MemoryRouter initialEntries={[`/search?q=${search}`]}>
          <Route path="/search" component={SearchScreen} />
        </MemoryRouter>,
    );
    expect(component.find('input').prop('value')).toBe(search);
    expect(component.find('HeroCard').exists()).toBe(true);
  });

  it('should send form and calls history PUSH', () => {
    const history = {
      push: jest.fn(),
    };

    const search = 'batman';
    const newSearch = 'spiderman';
    const fakeEvent = {preventDefault: () => jest.fn()};

    component = mount(
        <MemoryRouter initialEntries={[`/search?q=${search}`]}>
          <Route
            path="/search"
            component={() => <SearchScreen history={history} />}
          />
        </MemoryRouter>,
    );
    expect(component.find('input').prop('value')).toBe(search);

    component
        .find('input')
        .simulate('change', {target: {name: 'searchText', value: newSearch}});

    expect(component.find('input').prop('value')).toBe(newSearch);

    component.find('form').simulate('submit', fakeEvent);
    expect(history.push).toHaveBeenCalledWith(`?q=${newSearch}`);
  });
});
