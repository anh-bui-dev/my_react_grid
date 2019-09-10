import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import Popup from '../components/popup';

describe('Popup', () => {
  it('Should render correctly', () => {
    const wrapper = mount(<Popup />);
    expect(wrapper).toMatchSnapshot();
  });
});