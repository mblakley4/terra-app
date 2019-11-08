import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import PledgePage from './PledgePage';

describe('PledgePage Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PledgePage />
      </BrowserRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
