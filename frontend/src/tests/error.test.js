import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import Error from '../components/error';

describe('Error', () => {
  it('Should render correctly', () => {
    const message = "";
    const wrapper = shallow(<Error detail={message} />);
    expect(wrapper).toMatchSnapshot();
  });
});