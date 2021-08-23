import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Enter your name text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter your name/i);
  expect(linkElement).toBeInTheDocument();
});
