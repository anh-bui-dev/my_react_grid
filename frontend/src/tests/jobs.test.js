import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import Jobs from '../components/jobs';
import axios from 'axios';

describe('Jobs', () => {
  it('Should render correctly', () => {
    const wrapper = mount(<Jobs />);
    expect(wrapper).toMatchSnapshot();
  });
    
  it('Call componentDidMount', () => {
    const wrapper = mount(<Jobs />)
    const instance = wrapper.instance();
    jest.spyOn(instance, 'componentDidMount');
    instance.componentDidMount();
    expect(instance.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('fetches a list', () => {
    const getSpy = jest.spyOn(axios, 'get');
    const wrapper = shallow(<Jobs />);
    setTimeout(() => {
      expect(getSpy).toBeCalled();
    }, 500);
  });
});