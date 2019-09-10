import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import App from '../app';

describe('App', () => {
  it('Should render correctly', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
    
  it('Call componentDidMount', () => {
    const wrapper = mount(<App />)
    const instance = wrapper.instance();
    jest.spyOn(instance, 'componentDidMount');
    instance.componentDidMount();
    expect(instance.componentDidMount).toHaveBeenCalledTimes(1);
  });
});