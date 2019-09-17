import React from 'react';
import render from 'react-test-renderer';
import Header from '../../components/header/header.js';
import { isMainThread } from 'worker_threads';

describe("<Header />", () => {
  it('is rendered at application start', () => {
    let app = shallow(<Header />);
    expect(app.find('h1').exists()).toBeTruthy();
    expect(app.find('h1').text).toEqual('Counters R Fun');
    expect(app.find('#head').exists()).toBe(true);
  });

  it('should toggle h1', () => {
    let app = mount(<Header />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('visible').toBe(false));
  });

});