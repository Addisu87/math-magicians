import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Body of the whole App', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Expect it to render the home page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByText(
        /Math magicians is a website for all fans of mathematics./,
      ),
    ).not.toBeNull();
  });

  it('Making sure the quote page renders', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const quote = screen.getByText('Quotes');

    fireEvent.click(quote);

    const speaker = screen.getByText(/Albert Einstein/);
    expect(speaker).not.toBeNull();
  });
});
