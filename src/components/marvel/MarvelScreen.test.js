import React from 'react';
import {MarvelScreen} from '~components';
import {shallow} from 'enzyme';

describe('MarvelScreen', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MarvelScreen />);
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component).toMatchSnapshot();
  });
});
