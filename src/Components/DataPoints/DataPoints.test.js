import React from 'react';
import ReactDOM from 'react-dom';
import DataPoints from './DataPoints';

describe('DataPoints Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DataPoints />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
