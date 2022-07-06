import React from 'react';
import {
  render,
  //  fireEvent, waitFor, screen
} from '@testing-library/react';

// import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('Testing the pages of the app individually', () => {
  test('Checks if the page renders accordingly', () => {
    const page = render.create(
      <Router>
        <App />
      </Router>,
    )
      .toJSON();
    expect(page).toMatchSnapshot();
  });
});
