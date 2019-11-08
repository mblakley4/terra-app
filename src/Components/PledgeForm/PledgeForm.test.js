import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import PledgeForm from './PledgeForm';

describe('PledgeForm Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PledgeForm />
      </ BrowserRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
