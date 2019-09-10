import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import Loading from '../components/loading';

describe('Loading', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});