import React from 'react';
import ReactDOM from 'react-dom';
import PledgeList from './PledgeList';

describe('PledgeList Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PledgeList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
