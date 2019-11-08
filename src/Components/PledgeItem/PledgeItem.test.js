import React from 'react';
import ReactDOM from 'react-dom';
import PledgeItem from './PledgeItem';

describe('PledgeItem Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PledgeItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
