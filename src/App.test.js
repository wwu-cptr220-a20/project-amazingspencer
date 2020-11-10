import { render, screen } from '@testing-library/react';
import App from './App';

test('testing works', () => {
  render(<App />);
  expect(document.getElementById('my-div')).toBeInTheDocument();
});
