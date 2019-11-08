import React from 'react';
import ReactDOM from 'react-dom';
import Cheers from './Cheers';

describe('Cheers Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cheers />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
