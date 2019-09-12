import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import Job from '../components/job';

describe('Job', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Job />);
    expect(wrapper).toMatchSnapshot();
  });
});