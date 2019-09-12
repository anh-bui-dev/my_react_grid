import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import Error from '../components/error';

describe('Error', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
  });
});