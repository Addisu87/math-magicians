import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Button from '../components/Button';

describe('Navigation bar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Button />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
