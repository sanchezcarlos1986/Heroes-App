import React from 'react';
import {DcScreen} from '~components';
import {shallow} from 'enzyme';

describe('DcScreen', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DcScreen />);
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component).toMatchSnapshot();
  });
});
